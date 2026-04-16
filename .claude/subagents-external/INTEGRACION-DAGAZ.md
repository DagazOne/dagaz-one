# Integración: Awesome Claude Code Subagents + Dagaz One

## Overview
Se han integrado 140+ agentes especializados desde el repositorio VoltAgent/awesome-claude-code-subagents. Estos agentes complementan y expanden las capacidades de los 10 agentes principales de Dagaz One.

**Ubicación:** `.claude/subagents-external/categories/`

---

## Mapeo: Agentes Externos → Agentes Dagaz One

### 1. **agente-desarrollo** ↔ 01-core-development + 02-language-specialists
Agentes relevantes para desarrollo técnico:
- `fullstack-developer.md` - Arquitectura full-stack
- `backend-developer.md` - APIs y backends
- `frontend-developer.md` - UIs y experiencia
- `api-designer.md` - Diseño de APIs REST/GraphQL
- `graphql-architect.md` - Schemas GraphQL

**Idiomas especializados** (02):
- `python-pro.md`, `django-developer.md`, `fastapi-developer.md` - Python
- `nodejs-pro.md`, `express-architect.md` - Node.js
- `typescript-pro.md` - TypeScript
- `golang-pro.md` - Go
- `rust-pro.md` - Rust
- etc.

### 2. **agente-web** ↔ 01-core-development + 07-specialized-domains
Agentes para web y WordPress:
- `frontend-developer.md` - HTML/CSS/JS avanzado
- `ui-designer.md` - Diseño UI/UX
- `design-bridge.md` - Puente diseño-desarrollo

**Dominios especializados** (07):
- `wordpress-specialist.md` - WordPress y temas
- `woocommerce-expert.md` - E-commerce
- `seo-optimizer.md` - SEO técnico y on-page

### 3. **agente-data** ↔ 05-data-ai + 06-developer-experience
Agentes para análisis y datos:
- `data-analyst.md` - EDA, análisis exploratorio
- `sql-expert.md` - Queries SQL optimizadas
- `database-architect.md` - Diseño de esquemas
- `analytics-engineer.md` - Pipelines y métricas

### 4. **agente-ciencia-datos** ↔ 05-data-ai
Agentes especializados en ML/AI:
- `ml-engineer.md` - Modelos de ML
- `data-scientist.md` - Análisis predictivo
- `nlp-specialist.md` - Procesamiento de lenguaje natural
- `computer-vision-expert.md` - Visión por computadora

### 5. **agente-automatizacion** ↔ 03-infrastructure + 06-developer-experience
Agentes para automatización e integraciones:
- `devops-engineer.md` - CI/CD, orquestación
- `integration-architect.md` - APIs y webhooks
- `cloud-architect.md` - Infraestructura cloud

### 6. **agente-marketing** ↔ 08-business-product
Agentes para marketing y producto:
- `product-manager.md` - Estrategia de producto
- `marketing-analyst.md` - Análisis de campañas
- `copywriter.md` - Redacción de contenido

### 7. **agente-comercial** ↔ 08-business-product
Agentes para ventas y negocio:
- `business-analyst.md` - Análisis de negocio
- `sales-strategist.md` - Estrategia comercial

### 8. **agente-finanzas** ↔ 08-business-product
Agentes para operaciones financieras:
- `financial-analyst.md` - Análisis financiero

### 9. **agente-operaciones** ↔ 09-meta-orchestration
Agentes orquestadores:
- `agent-orchestrator.md` - Coordinación multi-agente
- `project-manager.md` - Gestión de proyectos
- `process-optimizer.md` - Optimización de procesos

### 10. **agente-soporte** ↔ 08-business-product
Agentes para atención al cliente:
- `customer-support-specialist.md` - Soporte técnico

---

## Cómo Usar los Agentes Externos

### Opción 1: Referencia Directa en Prompts
Si Lucas pide algo que se alinea con un agente externo:

```
Lucas: "Necesito un experto en AWS para configurar nuestro backend"
→ Usar: agente-desarrollo + /subagents-external/categories/03-infrastructure/aws-architect.md
```

### Opción 2: Integrar en los Agentes Dagaz One
Actualizar los SKILL.md de cada agente para incluir referencias a especialistas externos:

```markdown
## Especialistas externos disponibles
Si la tarea requiere expertise específica:
- AWS/Cloud → 03-infrastructure/aws-architect.md
- Node.js → 02-language-specialists/nodejs-pro.md
- etc.
```

### Opción 3: Crear Skills Personalizadas
Convertir agentes externos en skills de Dagaz One para tareas recurrentes:

```bash
# Crear skill custom basado en un agente externo
cp .claude/subagents-external/categories/05-data-ai/sql-expert.md \
   .claude/skills/custom/sql-expert/SKILL.md
```

---

## Estructura de Directorios

```
.claude/
├── skills/                          # Skills originales Dagaz One (10 agentes)
│   ├── agente-comercial/
│   ├── agente-data/
│   └── ...
│
└── subagents-external/              # Agentes externos integrados (140+)
    ├── categories/
    │   ├── 01-core-development/     (11 agentes)
    │   ├── 02-language-specialists/ (29 agentes)
    │   ├── 03-infrastructure/       (16 agentes)
    │   ├── 04-quality-security/     (15 agentes)
    │   ├── 05-data-ai/              (13 agentes)
    │   ├── 06-developer-experience/ (14 agentes)
    │   ├── 07-specialized-domains/  (12 agentes)
    │   ├── 08-business-product/     (12 agentes)
    │   ├── 09-meta-orchestration/   (10 agentes)
    │   └── 10-research-analysis/    (8 agentes)
    │
    ├── INDEX.json                   # Catálogo de agentes
    └── INTEGRACION-DAGAZ.md         # Este archivo
```

---

## Quick Reference: Top Agentes por Categoría

### 🛠️ Core Development (01)
1. **fullstack-developer** - Arquitecto full-stack JS/Node
2. **backend-developer** - APIs y microservicios
3. **api-designer** - REST/GraphQL
4. **graphql-architect** - Schemas y queries optimizadas
5. **frontend-developer** - React/Vue/Svelte

### 📚 Language Specialists (02)
1. **python-pro** - Python avanzado + libs científicas
2. **nodejs-pro** - Node.js + Express
3. **typescript-pro** - TS avanzado + tipos
4. **django-developer** - Django + DRF
5. **fastapi-developer** - FastAPI y async

### ☁️ Infrastructure (03)
1. **aws-architect** - AWS + serverless
2. **devops-engineer** - CI/CD, Docker, K8s
3. **cloud-architect** - Multi-cloud
4. **database-architect** - PostgreSQL/MongoDB
5. **security-specialist** - Hardening

### 🔒 Quality & Security (04)
1. **qa-automation-engineer** - Testing frameworks
2. **security-auditor** - Pentesting, OWASP
3. **performance-optimizer** - Benchmarking, profiling

### 📊 Data & AI (05)
1. **data-scientist** - ML, estadística
2. **ml-engineer** - Modelos en producción
3. **analytics-engineer** - Pipelines ETL
4. **nlp-specialist** - LLMs, embeddings
5. **sql-expert** - Queries optimizadas

### 🎯 Developer Experience (06)
1. **documentation-specialist** - Docs, wikis, tutoriales
2. **cli-designer** - Command-line tools
3. **build-system-expert** - Build tools, bundlers

### 🎨 Specialized Domains (07)
1. **wordpress-specialist** - Themes, plugins, optimization
2. **woocommerce-expert** - E-commerce, pagos
3. **seo-optimizer** - SEO técnico y on-page

### 💼 Business & Product (08)
1. **product-manager** - Product strategy
2. **business-analyst** - Requirements, UX research
3. **financial-analyst** - Reporting, forecasting

### 🎪 Meta-Orchestration (09)
1. **agent-orchestrator** - Coordinación multi-agente
2. **project-manager** - Planificación, Gantt, sprints
3. **process-optimizer** - Automatización, bottlenecks

### 🔍 Research & Analysis (10)
1. **research-analyst** - Análisis de competencia
2. **market-analyst** - Estudios de mercado

---

## Próximas Acciones

1. **Documentar** cuál agente externo activar según cada tipo de tarea
2. **Crear wrappers** para agentes externos que se usen frecuentemente
3. **Feedback loop**: registrar cuándo se usan y cuáles agregan más valor a Dagaz One

---

**Status:** ✅ Integración completada
**Ubicación:** `/sessions/eloquent-affectionate-fermi/mnt/IA--Claude/.claude/subagents-external/`
**Total Agentes Disponibles:** 150+ (10 Dagaz One + 140 externos)
