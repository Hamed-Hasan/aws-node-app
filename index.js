const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express Server from AWS updated nginx port!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
