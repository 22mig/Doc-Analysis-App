import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/fileController.js";

const router = express.Router();

// ✅ Ensure "file" matches the Postman key
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.post("/upload", (req, res, next) => {
    console.log("Request Fields:", req.body);
    next();
}, upload.single("file"), uploadFile);

export default router;
