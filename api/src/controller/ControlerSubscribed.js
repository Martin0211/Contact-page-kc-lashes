const { Subscribed } = require('../models/index');


const postNewSubscribe = async (req, res) => {

    try {
        const { names, surname, phoneNumber, email } = req.body;

        // Verifica que al menos se proporcione un método de comunicación
        if (!email && !phoneNumber) {
            return res.status(400).json({ message: 'Debes proporcionar al menos un método de comunicación (correo o número de teléfono).' });
        }

        // Verifica si el suscriptor ya existe por correo electrónico o número de teléfono
        const existingSubscriber = await Subscribed.findOne({
            where: {
                [email ? 'email' : 'phoneNumber']: email || phoneNumber,
            },
        });

        if (existingSubscriber) {
            return res.status(400).json({ message: 'Ya estás suscrito.' });
        }
        
        const newSubscriber = await Subscribed.create({
            names, surname, phoneNumber, email, // Asegúrate de guardar la informacion en la base de datos
        });

        return res.status(201).json(newSubscriber);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error para suscribirte en el servidor.' });
    }
};

module.exports = {
    postNewSubscribe
};