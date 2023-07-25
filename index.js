'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');

const bodyParser = require('body-parser');

const eventRoutes = require('./routes/eventRoutes');
const loginRoutes = require('./routes/userRoutes');
const batchRoutes = require('./routes/batchRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const stockInRoutes = require('./routes/stockInRoutes');
const reorderRoutes = require('./routes/reorderRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', eventRoutes.routes);
app.use('/api', loginRoutes.routes);
app.use('/api', categoryRoutes.routes);
app.use('/api', batchRoutes.routes);
app.use('/api', medicineRoutes.routes);
app.use('/api', subCategoryRoutes.routes);
app.use('/api', stockInRoutes.routes);
app.use('/api', reorderRoutes.routes);

app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});