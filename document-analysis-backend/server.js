import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fileRoutes from './src/routes/fileRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Use Routes
app.use('/api/files', fileRoutes);

// Catch-All Route for 404
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Start Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
