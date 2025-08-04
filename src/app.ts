import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("MindPalace backend is running..")
})

export default app;