const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');
const { exists } = require('../model/TaskModel');

const TaskValidation = async (req, res, next) => {

     const { macaddress, type, title, description, when } = req.body;

    if (!macaddress)
        return res.status(400).json({ error: 'Macaddress é obrigatório.' });
    else if (!type)
        return res.status(400).json({ error: 'Tipo é obrigatório.' });
    else if (!title)
        return res.status(400).json({ error: 'Título é obrigatório.' });
    else if (!description)
        return res.status(400).json({ error: 'Descição é obrigatório.' });
    else if (!when)
        return res.status(400).json({ error: 'Data e Hora são obrigatórios.' });
    else if (isPast(new Date(when)))
        return res.status(400).json({ error: 'Data e Hora não podem estar no passado.' });

    else {

        let exists;

        if(req.params.id) {
            exists = await TaskModel.findOne({
                '_id': {'$ne': req.params.id},
                'when': {'$eq': new Date(when)},
                'macaddress': {'$in': macaddress}
            })
        } else {
            exists = await TaskModel.findOne({
                'when': {'$eq': new Date(when)},
                'macaddress': {'$in': macaddress}
            })
        }

        if(exists) {
            return res.status(400).json({ error: 'Já existe uma taréfa cadastrada nesse dia e horário.' });
        }

        next();
    }

}

module.exports = TaskValidation;