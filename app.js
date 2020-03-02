let shouldPopulate = false;
require('./modules/database')(shouldPopulate);

const express = require('./express');
const app = express.configureExpress();

app.listen(process.env.PORT || 3000);

console.log('Server running at http://localhost:3000/');
