/**
 * Dagaz One — Landing Page Form Handler (v2 robusto)
 *
 * INSTRUCCIONES CORRECTAS:
 * 1. Abrí tu Google Sheet "Dagaz Leads"
 * 2. Menú: Extensiones → Apps Script  (IMPORTANTE: desde el sheet, NO desde script.google.com)
 * 3. Borrá todo el código existente y pegá ESTE
 * 4. Guardá (💾 o Ctrl+S)
 * 5. Deploy → New deployment → icono de engranaje → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone   ← clave
 * 6. Click Deploy → Autorizar permisos
 * 7. Copiá la URL /exec
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Usa el primer tab del spreadsheet vinculado (sin importar el nombre)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    sheet.appendRow([
      new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }),
      data.nombre  || '',
      data.email   || '',
      data.empresa || '',
      data.mensaje || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // Log del error para ver en Ejecuciones
    console.error('Error en doPost:', err.toString(), 'Data:', e && e.postData && e.postData.contents);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Dagaz One endpoint activo ✓')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Test manual — correlo desde el editor, luego fijate en el sheet si aparece la fila.
 */
function testDoPost() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        nombre: 'Test Manual',
        email: 'test@manual.com',
        empresa: 'Test Inc',
        mensaje: 'Prueba desde el editor de Apps Script'
      })
    }
  };
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
