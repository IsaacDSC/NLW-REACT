import {Request, Response} from 'express'
import Orfanatos from '../database/models/Orfanatos'

class ControllerOrfanatos{
    public async index(req: Request, res: Response){
        return res.json('hello word')

    }
}


export default new ControllerOrfanatos()