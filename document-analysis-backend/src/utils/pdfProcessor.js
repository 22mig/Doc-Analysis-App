import { PDFDocument } from 'pdf-lib';

export const extractTextFromPDF = async (buffer) => {
    try {
        const pdfDoc = await PDFDocument.load(buffer);
        let extractedText = "";
        const pages = pdfDoc.getPages();

        for (const page of pages) {
            extractedText += page.getTextContent() + "\n";
        }

        return extractedText;
    } catch (error) {
        throw new Error("Failed to extract text from PDF");
    }
};
