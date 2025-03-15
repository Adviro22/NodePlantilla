import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'HTML', 'plantilla1.html'));
});

app.get('/doc2', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'HTML', 'plantilla2.html'));
});

app.get('/doc3', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'HTML', 'plantilla3.html'));
});

app.get('/doc4', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'HTML', 'plantilla4.html'));
});

app.get('/doc5', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'HTML', 'plantilla5.html'));
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
