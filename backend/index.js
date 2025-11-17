'use strict';

const express = require('express');
const app = express();

app.get('/math/circle/:r', (req, res) => {
  const r = parseFloat(req.params.r);

  if (isNaN(r) || r < 0) {
    return res.status(400).json({ error: 'Invalid radius' });
  }

  const area = (Math.PI * r * r).toFixed(2);            // pole
  const circumference = (2 * Math.PI * r).toFixed(2);   // obwód

  res.json({
    area,
    circumference   
  });
});

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const area = width * height;
  const perimeter = 2 * (width + height);

  res.json({
    area, 
    perimeter   
  });
});

app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);

  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const result = Math.pow(base, exponent);
  const response = { result };

  if (req.query.root === 'true') {
    const root = Math.sqrt(base);
    response.root = root;
  }

  res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});