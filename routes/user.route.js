import {Router} from 'express';
import { verifyToken } from '../middleware/auth.js';
import { userControllers } from '../src/controller/user.controller.js';
import { createUserMiddleware } from '../middleware/user.middlewares.js'
import { upload } from "../middleware/multerConfig.js";

const userRoute = Router()

userRoute.post("/login", userControllers.loginUser)

userRoute.get("/", verifyToken, userControllers.getAllUser);

userRoute.get("/:rut",verifyToken,userControllers.searchByIdUser)

userRoute.put("/:rut", verifyToken, upload.single("imagen"), userControllers.updateUser);

userRoute.delete("/:rut",verifyToken,userControllers.deleteUser)

userRoute.post("/",createUserMiddleware, userControllers.registerUser)

userRoute.delete("/:rut/imagen", verifyToken, userControllers.deleteUserImage); // 

export default userRoute;