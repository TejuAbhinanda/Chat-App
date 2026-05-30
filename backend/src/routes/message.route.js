import express from 'express';
import {protectRoute} from '../middleware/auth.middleware.js';
import {
  getUsersforsidebar,
  getMessage,
  sendMessage
} from '../controllers/message.controller.js';

const router = express.Router();

router.get("/users",protectRoute, getUsersforsidebar);
router.get("/:id", protectRoute, getMessage);

router.post("/send/:id", protectRoute, sendMessage);

export default router;