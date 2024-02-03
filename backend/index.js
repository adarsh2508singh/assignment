const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.get('/api/students', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/st.json', 'utf8'));
  res.json(data);
});
app.get("/", (req, res) => {
    res.send(`server is running at port ${PORT}`);
  });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
