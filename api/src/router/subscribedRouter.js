const { Router } = require('express');
const router = Router();
const { postNewSubscribe } = require('../controller/ControlerSubscribed');

router.post('/',postNewSubscribe);

module.exports = router;