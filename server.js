const express = require('express');
const app = express();
const port = 3000;
 
app.get('/', (req, res) => {
  res.send('CPSY 350 Project: Github Actions CI. SAIT ID:00012346');
});
 
app.listen(port, () => {
  console.log(`loading express\nRunning on http://0.0.0.0:${port}\n✔ responds to /\n❌ 404 everything else`);
});
