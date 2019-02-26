const express = require('express');
const router = express.Router();

// require and use "multer"...
const multer = require('multer');
const upload = multer();

// greetings from API
router.get('/hello', function (req, res) {
  res.json({ greetings: "Hello, API" });
});

// Upload and analyse file
router.post('/fileanalyse', upload.single('upfile'), function(req, res) {
  let name = req.file.originalname;
  let type = req.file.mimetype;
  let size = req.file.size;
  res.json({ name, type, size });
});

module.exports = router;
