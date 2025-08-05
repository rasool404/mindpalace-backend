import { Request, Response } from 'express';
import prisma from '../prisma/client'; 

export const getNotes = async (_req: Request, res: Response) => {
  res.json([{ id: 1, title: 'Dummy', content: 'Hello world' }]);
};

export const createNote = async (req: Request, res: Response) => {
  console.log('[DEBUG] Inside createNote controller');

  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  // Just echo back for now to isolate Prisma
  res.status(201).json({ title, content });
};
