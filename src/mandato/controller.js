const { Partido } = require('../partido/model');
const { Politico } = require('../politico/model');
const {Mandato} = require('./model');

class MandatoController {

    constructor() {}

    async create(req, res) {
        // INPUT
        const {
            id_politico,
            numero,
            cidade,
            estado,
            pais,
            cargo,
            inicio,
            final
        } = req.body;

        // PROCESSAMENTO
        const user = await Mandato.create({            
            id_politico,
            numero,
            cidade,
            estado,
            pais,
            cargo,
            inicio,
            final});
            if(user){
                await Politico.update({mandatoAtual: user.id}, {
                    where: {
                        cpf: id_politico,
                        
                    }
                });
            }
        // RESPOSTA
        return res
            .status(201)
            .json(user);

    }

    async list(req, res) {
        const mandatos = await Mandato.findAndCountAll();
        res.json(mandatos);
    }

    async getById(req, res) {
        let {id} = req.params
        let mandato = await Mandato.findByPk(id)
        if (!mandato) {
            throw {status: 400, message: "Mandato não encontrado"}
        }else{
            const politico = await Politico.findByPk(mandato.id_politico)
            if(politico.id_partido){
                const partido = await Partido.findByPk(politico.id_partido)
                return res
                .status(200)
                .json({mandato, politico,partido})
            }
            return res
                .status(200)
                .json({mandato, politico})
        }
    }
    async update(req, res) {
        const {id} = req.params;
        await Mandato.update(req.body, {where: {
                id
            }});
        return res
            .status(200)
            .json({msg: "UPDATED"})
    }
    async delete(req, res) {
        const {id} = req.params;
        await Mandato.destroy({where: {
                id
            }});
        res.json({message: 'DELETED'});
    }
}

module.exports = MandatoController;