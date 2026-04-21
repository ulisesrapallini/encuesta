# Encuesta por voz para personas ciegas

Aplicación mínima que guía a un participante ciego mediante voz (texto a voz y reconocimiento de voz) para completar una entrevista y guarda las respuestas en el servidor.

Cómo ejecutar:

1. Instale dependencias:

```powershell
cd c:\REPOS\encuesta
npm install
```

2. Inicie el servidor:

```powershell
npm start
```

3. Abra un navegador moderno (Chrome/Edge) en `http://localhost:3000` y use auriculares. La aplicación utiliza la Web Speech API para TTS y reconocimiento de voz (es posible que el reconocimiento de voz solo funcione en Chrome/Edge).

Notas de accesibilidad:
- La interacción es por voz y confirmaciones; también hay botones accesibles para controlar la entrevista.
- Puede ajustar el idioma de síntesis/ reconocimiento en `public/app.js` si desea otro dialecto.
# encuesta
encuesta web automatica paea ciegos sobre navegacion web y accesiibilidad
