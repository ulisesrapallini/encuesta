const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const RESP_FILE = path.join(__dirname, 'responses.json');

app.post('/submit', async (req, res) => {
  try {
    const entry = {
      timestamp: new Date().toISOString(),
      data: req.body
    };
    let arr = [];
    if (fs.existsSync(RESP_FILE)) {
      const raw = fs.readFileSync(RESP_FILE, 'utf8');
      arr = raw ? JSON.parse(raw) : [];
    }
    arr.push(entry);
    fs.writeFileSync(RESP_FILE, JSON.stringify(arr, null, 2), 'utf8');
    console.log('Saved response:', entry.timestamp);
    res.json({ ok: true });
  } catch (err) {
    console.error('Error saving response', err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
