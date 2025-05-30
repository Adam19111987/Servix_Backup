import {Router} from 'express';
import { serviceController } from '../src/controller/service.controller.js';
import { verifyToken } from "../middleware/auth.js";
const serviceRoute = Router();

serviceRoute.get("/",serviceController.getAllServices)

serviceRoute.get("/:id",serviceController.getByIdService)

//serviceRoute.get("/:rut",serviceController.getByIdRut)

serviceRoute.get("/servicesProvider/:rut", verifyToken,serviceController.getByIdRut)

serviceRoute.get("/name/:parameter",serviceController.searchByNameService)

serviceRoute.post("/",verifyToken,serviceController.createService) 


serviceRoute.put("/:id",verifyToken,serviceController.updateService)

serviceRoute.delete("/:id",verifyToken,serviceController.deleteService)


export default serviceRoute;