const { Router } = require('express');
// Importar todos los routers;
const subscribedRouter = require('./subscribedRouter');

const router = Router();

// Configurar los routers
router.use('/subscribed' , subscribedRouter );

module.exports = router;