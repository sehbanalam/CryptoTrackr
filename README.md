# 💰 CryptoTrackr

A modern React-based cryptocurrency tracker that fetches real-time data from the [CoinGecko API](https://www.coingecko.com/en/api).

> **🛠️ This is a learning project to explore and practice Vite, React, TypeScript, and Tailwind CSS.**  
> Built to understand modular React architecture, API integration, and modern frontend tooling.

---

## 🛠️ Tech Stack

- ⚡️ [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- 🌗 Light/Dark theme using React Context
- 🧭 Modular folder structure
- 🔁 React Router for routing
- 🧪 TypeScript

---

## 📦 Setup

```bash
git clone https://github.com/your-username/cryptotrackr.git
cd cryptotrackr
npm install
npm run dev
```

---

## 📁 Folder Structure

```
src/
├── App.tsx              # App layout with Header + Routes
├── main.tsx             # Entry point (with BrowserRouter)
├── routes/              # All route definitions
│   └── Routes.tsx
├── modules/             # Modular feature-based architecture
│   ├── home/
│   │   └── pages/Home.tsx
│   │   └── components/CoinList.tsx
│   ├── shared/
│   │   └── components/Header.tsx, CoinCard.tsx
│   │   └── context/ThemeContext.tsx
├── index.css            # Tailwind import
```

---

## 🎯 Features

- ✅ Real-time crypto market data
- ✅ Responsive Tailwind styling
- ✅ Modular code organization
- ✅ Global layout with persistent header
- ✅ Light/Dark theme toggle
- ✅ Routing structure ready for multi-page app

---

## 🔗 API Reference

Powered by [CoinGecko Public API](https://www.coingecko.com/en/api).

---

## 🚀 Deployment

Deployed live at: [https://crypto-trackr-nu.vercel.app/](https://crypto-trackr-nu.vercel.app/)

---

## 📜 License

MIT