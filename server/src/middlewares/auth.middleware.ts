import { Request, Response, NextFunction } from "express"

//este middleware sirve para validar rutas, que necesiten acceso, como pedir, borrar, o editar usuarios de la base de datos, asi com las horas que se cargan.
//se usa en las rutas.
const authMiddleware = (_req:Request, res:Response, next:NextFunction) => {
    //validar tokens con JWT
    next();
}