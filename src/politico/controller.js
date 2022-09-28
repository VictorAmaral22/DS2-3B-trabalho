const {Politico} = require("./model");
const jwt = require("jsonwebtoken");
const {Mandato} = require("../mandato/model");
const {Partido} = require("../partido/model");

class PoliticoController {
    constructor() {}

    async create(req, res) {
		try {
			const {
				cpf,
				name,
				foto,
				email,
				dataNascimento,
				cidade,
				estado,
				pais,
				id_partido,
				mandatoAtual
			} = req.body;

			let partido = await Partido.findByPk(id_partido)

			if(!partido){
				return res.status(400).json({msg: "Esse partido não existe"})
			}

			const user = await Politico.create({
				cpf,
				name,
				foto,
				email,
				dataNascimento,
				cidade,
				estado,
				pais,
				id_partido,
				mandatoAtual
			});

			return res
				.status(201)
				.json(user);

		} catch (error) {
			return res.status(400).json({error})
		}
    }

    async list(req, res) {
		try {
			const users = await Politico.findAndCountAll();
        	res.status(200).json(users);
		} catch (error) {
			return res.status(400).json({error})
		}
    }

    async getById(req, res) {
		try {
			let {id} = req.params

			let politico = await Politico.findOne({
				where: {
					cpf: id
				}
			})
			if (!politico) {
				return res.status(404).json({msg: "Político não encontrado"})
			}
			if (politico.id_partido) {
				let partido = await Partido.findByPk(politico.id_partido)
				console.log("politico ",politico)
				if (!politico.mandatoAtual) {
					return res
						.status(200)
						.json({politico, partido})
				} else {
					let mandato = await Mandato.findByPk(politico.mandatoAtual)
					// politico.mandatoAtual = mandato
					return res
						.status(200)
						.json({politico, partido, mandato})
				}
			}

			return res
				.status(200)
				.json({politico})
		} catch (error) {
            return res.status(400).json({error})
        }
    }
	
	async getPoliticianHistory(req, res) {
		try {
			let {id} = req.params

			let politico = await Politico.findOne({
				where: {
					cpf: id
				}
			})

			if (!politico) {
				return res.status(404).json({msg: "Político não encontrado"})
			}
			let mandatos = await Mandato.findAll({
				where: {
					id_politico: id
				}
			})

			return res
				.status(200)
				.json({politico, mandatos})
		} catch (error) {
            return res.status(400).json({error})
        }
    }

    async update(req, res) {
        try {
            const {id} = req.body;

			const politico = await Politico.findOne({where: {
				cpf: id
			}})

			if(!politico){
				return res.status(404).json({msg: "Político não encontrado"})
			}

            await Politico.update(req.body, {
                where: {
                    cpf: id
                }
            });
			
            return res
                .status(201)
                .json({msg: "UPDATED"})
        } catch (error) {
            return res.status(400).json({error})
        }
    }

    async delete(req, res) {
		try {
			const {id} = req.body;
			const deleteId = await Politico.findOne({where: {
				cpf: id
			}})
			await deleteId.destroy()
			return res
				.status(201)
				.json({msg: "DELETED"});
		} catch (error) {
			return res.status(400).json({error})
		}
    }
}

module.exports = PoliticoController;
