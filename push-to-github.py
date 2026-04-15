#!/usr/bin/env python3
"""
Script para subir landing page de Dagaz One a GitHub
"""

import subprocess
import sys

def run_command(cmd, description):
    print(f"⏳ {description}...")
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=True)
        print(f"✓ {description}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ Error: {e.stderr}")
        return False

REPO_URL = "https://github.com/DagazOne/dagaz-one.git"
BRANCH = "main"

commands = [
    ("git add .", "Agregando archivos al staging"),
    ("git commit -m 'Initial commit: Dagaz One landing page'", "Creando commit"),
    (f"git branch -M {BRANCH}", "Configurando rama main"),
    (f"git remote add origin {REPO_URL}", "Agregando remote GitHub"),
    (f"git push -u origin {BRANCH}", "Subiendo a GitHub"),
]

print("🚀 Iniciando push a GitHub\n")

for cmd, description in commands:
    if not run_command(cmd, description):
        print(f"\n✗ Error en: {description}")
        sys.exit(1)

print("\n✓ ¡Código subido exitosamente!")