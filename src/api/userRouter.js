// Require packages
const express = require('express');

// Require functions
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'Success',
  });
});

module.exports = router;
