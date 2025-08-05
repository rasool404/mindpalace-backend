import express from 'express';
import noteRoutes from './routes/noteRoutes';

const app = express();

app.use(express.json()); 

// Debug log
app.use((req, res, next) => {
  console.log(`[DEBUG] ${req.method} ${req.url}`);
  next();
});

app.use('/api/notes', noteRoutes);

export default app;
