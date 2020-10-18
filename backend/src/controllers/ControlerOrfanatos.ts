import {Request, Response} from 'express'
import {Orfanatos} from '../database/models/Orfanatos'

class ControllerOrfanatos{
    public async index(req: Request, res: Response){
        Orfanatos.findAll().then((orfanatos:Array<Orfanatos>)=>{
            return res.json(orfanatos)
        }).catch((err)=>{
            console.log(err)
        })

    }
}


export default new ControllerOrfanatos()