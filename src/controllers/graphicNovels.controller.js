import {sequelize} from '../database/database.js'
import authors from '../models/authors.js'
import modelsInit from '../models/init-models.js'
import novels from '../models/novels.js'
import {Op} from "sequelize";

let models = modelsInit(sequelize)

export const getGraphicNovels = async (req,res) => {
    let response
    try {
        response = await models.novels.findAll()
    } catch (e) {
        res.status(500).json({"error": e.message})
        return
    }
    res.status(200).json(response)
}

export const addGraphicNovels = async (req, res) => {
    const { author_id, title, novel_type } = req.body
    let response
    try {
        response = await novels.create({
            author_id,
            title,
            novel_type,
        })
    } catch (e) {
        res.status(500).json({"error": e.message})
        return
    }
    res.status(200).json({"Registro Exitoso": response.dataValues})
}

export const deleteNovel = async (req,res) =>{
    const{id_novel} = req.params;
    let response;
    try {
        response = await novels.destroy({
            where:{id_novel}
        });
        
    } catch (e) {
        res.status(500).json({
            "error": e.message
        })
        return;
    }
    res.status(200).json({"Transaction state": response})
}

export const getAuthorName = async (req,res) =>{
    const {name} = req.body;
    let response;
    let sentence_like = "%"+name.toLowerCase()+"%"
    try{
        response = await authors.findAll({
            where:{ [Op.or]:[{'first_name': {[Op.iLike]:sentence_like}}, {'last_name': {[Op.iLike]:sentence_like}}] },
            include: ['novels', 'country']
        })
    }catch(e){
        res.status(500).json({"error": e.message})
        return;
    }

    if(response.length === 0){
        res.status(404).json({
            "error":"Your record is not in the database"
        })
        return;
    }

    res.status(200).json(response);
}