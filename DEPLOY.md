# Deploy — Dagaz One Landing Page

## Opción 1: Netlify (recomendada, gratis)
1. Abrí https://app.netlify.com
2. Arrastrá la carpeta `dagaz-landing/` al área de deploy
3. Listo — te da una URL tipo `random-name.netlify.app`
4. Opcionalmente conectá tu dominio custom

## Opción 2: Vercel
```bash
npm i -g vercel
cd dagaz-landing
vercel
```

## Opción 3: GitHub Pages
1. Creá un repo nuevo en GitHub (ej: `dagaz-landing`)
2. Subí el contenido:
```bash
cd dagaz-landing
git init
git add .
git commit -m "Landing page Dagaz One"
git remote add origin https://github.com/TU_USUARIO/dagaz-landing.git
git push -u origin main
```
3. En GitHub → Settings → Pages → Source: main / root → Save
4. URL: `https://TU_USUARIO.github.io/dagaz-landing/`

## Opción 4: Surge.sh
```bash
npm i -g surge
cd dagaz-landing
surge . dagaz-one.surge.sh
```

---

## Paso obligatorio post-deploy: Google Apps Script
1. Abrí Google Sheets → nueva hoja "Dagaz Leads"
2. Headers en fila 1: `Timestamp | Nombre | Email | Empresa | Mensaje`
3. Extensiones → Apps Script → pegá el código de `google-apps-script.gs`
4. Deploy → New deployment → Web app (Anyone, Execute as Me)
5. Copiá la URL y reemplazá `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` en index.html
