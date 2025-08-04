# MindPalace Backend 🧠🏰

The backend API for **MindPalace** — a second brain that helps you organize notes, flashcards, bookmarks, and files into a personal knowledge system.

## 🔧 Tech Stack
- Node.js + Express + TypeScript
- PostgreSQL + Prisma ORM
- JWT Authentication
- Multer for file uploads
- Deployed via Render / Railway

## 📦 Features
- Secure Auth (JWT + hashed passwords)
- Notes CRUD with markdown support
- Flashcard review system (spaced repetition)
- Bookmarks with metadata extraction
- File uploads (PDFs/images) attached to notes

## 🔌 API Endpoints (WIP)
- `POST /api/auth/register` – Register new user
- `POST /api/auth/login` – Log in with JWT
- `GET /api/notes` – List notes
- ...

## 🛠️ Dev Setup
```bash
git clone https://github.com/your-username/mindpalace-backend
cd mindpalace-backend
npm install
npm run dev
