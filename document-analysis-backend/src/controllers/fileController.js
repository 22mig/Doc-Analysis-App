import { extractTextFromPDF } from '../utils/pdfProcessor.js';

export const uploadFile = async (req, res) => {
    if (!req.File) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    try {
        const text = await extractTextFromPDF(req.file.buffer);
        res.status(200).json({ message: "File processed successfully", text });
    } catch (error) {
        console.error("Error processing file:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
