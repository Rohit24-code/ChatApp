import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { receiveMessage, sendMessage } from '../controllers/message.controller.js';

const messageRoutes = express.Router();

messageRoutes.get("/:id",protectRoute,receiveMessage)
messageRoutes.post("/send/:userId",protectRoute,sendMessage)

export default messageRoutes;