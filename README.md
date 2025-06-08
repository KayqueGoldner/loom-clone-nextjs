# SnapCast - Screen Recording and Video Sharing Platform

**A modern screen recording and video sharing platform built with Next.js 15, inspired by Loom. Create, share, and organize your screen recordings with ease.**

## 🚀 Features

- **Screen Recording**: Record your screen with audio capture from both system and microphone
- **Custom Video Upload**: Support for uploading pre-recorded videos with thumbnails
- **Video Management**: 
  - Organize videos with titles, descriptions, and tags
  - Control visibility (public/private)
  - Track views and engagement
  - Automatic video processing and encoding
- **Secure Authentication**: Google sign-in integration via Better Auth
- **Rich Media Features**:
  - Custom video player
  - Automatic thumbnail generation
  - Video duration tracking
  - WebM encoding with VP9 codec
- **Rate Limiting**: Smart request throttling with Arcjet
- **Responsive Design**: Modern UI that works across all devices

## 🛠️ Technologies Used

- **Frontend**:
  - [Next.js 15](https://nextjs.org/) - React framework with App Router
  - [React 19](https://react.dev/) - UI framework
  - [TailwindCSS](https://tailwindcss.com/) - Utility-first styling
  - Custom hooks for file handling and screen recording

- **Backend & Infrastructure**:
  - [Bunny.net](https://bunny.net/):
    - Stream service for video delivery
    - Storage service for thumbnails
    - CDN for fast content delivery
  - [PostgreSQL](https://www.postgresql.org/) - Database
  - [Drizzle ORM](https://orm.drizzle.team/) - Type-safe database access
  - [Better Auth](https://www.better-auth.com/) - Authentication
  - [Arcjet](https://arcjet.com/) - Rate limiting
  
- **Developer Experience**:
  - [TypeScript](https://www.typescriptlang.org/) - Type safety
  - ESLint & Prettier - Code quality
  - Turbopack - Fast development builds

## 💻 Setup

### 1. Clone and Install

```bash
git clone https://github.com/KayqueGoldner/loom-clone-nextjs.git
cd loom-clone-nextjs
npm install
```

### 2. Configure Environment Variables

Create a `.env` file with:

```env
NEXT_PUBLIC_BASE_URL= http://localhost:3000

# better-auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000 #Base URL of your app

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Database
XATA_API_KEY=
DATABASE_URL_POSTGRES=
DATABASE_URL=

# Bunny
BUNNY_STORAGE_ACCESS_KEY=
BUNNY_LIBRARY_ID=
BUNNY_STREAM_ACCESS_KEY=

# Arcjet
ARCJET_API_KEY=
```

### 3. Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
app/               # Next.js App Router pages
components/        # Reusable React components
lib/
  actions/        # Server actions
  hooks/          # Custom React hooks
  utils/          # Helper functions
drizzle/          # Database schema and config
public/           # Static assets
```

## 🎥 Screen Recording Features

- **Quality Settings**:
  - Video: 1920x1080 @ 30fps
  - Audio: 128kbps Opus codec
  - Video: VP9 codec at 2.5Mbps

- **Recording Controls**:
  - Start/Stop recording
  - Preview recorded content
  - Choose audio sources
  - Set video visibility

## 🤝 Contribute

1. Fork this repository
2. Create a branch for your changes (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

All contributions are welcome!