# 🛍️  Search — Product Catalog & Discovery

A modern, responsive e-commerce product catalog web application built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **DaisyUI**. The application integrates with the [DummyJSON API](https://dummyjson.com) to provide fast, server-rendered product browsing, keyword search, and category-based filtering.


**Live link**: https://coruscating-frangipane-beef39.netlify.app/

---

## 🚀 Features

- **⚡ Server-Side Data Fetching**: Fast initial page loads and SEO-friendly rendering utilizing Next.js Server Components.
- **🔍 Search Functionality**: Search products by title and description via URL query parameters (`/products?search=...`).
- **🏷️ Category Filtering**: Filter products dynamically across multiple categories (Beauty, Fragrances, Furniture, Kitchen Accessories, etc.) with automated route updates.
- **📱 Fully Responsive Design**: Mobile-first UI featuring an adaptive grid layout (1 column on mobile up to 4 columns on large screens).
- **🖼️ Next.js Image Optimization**: Configured with remote patterns to load and optimize high-resolution product thumbnails from `cdn.dummyjson.com`.
- **⏳ Loading & Empty States**: Built-in loading spinner (`loading.jsx`) for suspense boundaries and user-friendly fallback messages when no items match search queries.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI v5](https://daisyui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Source**: [DummyJSON API](https://dummyjson.com/)
- **Linting**: ESLint 9

---

## 📂 Project Structure

```plaintext
internship-search/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── CategoryFilter.jsx   # Client component for category selection dropdown
│   │   │   ├── Navbar.jsx           # Main navigation bar with search bar & category filter
│   │   │   └── productCard.jsx      # Reusable card displaying product image, price, rating, & tags
│   │   ├── products/
│   │   │   └── page.jsx             # Filtered & search results product listing page
│   │   ├── favicon.ico
│   │   ├── globals.css              # Global styles importing Tailwind CSS and DaisyUI
│   │   ├── layout.js                # Root layout with font configuration & Navbar
│   │   └── page.js                  # Home page rendering all products
│   ├── lib/
│   │   └── data.js                  # API fetch helper functions (DummyJSON)
│   └── loading.jsx                  # Global loading state component
├── next.config.mjs                  # Next.js config with remote image domain rules
├── package.json
├── postcss.config.mjs
└── README.md
```

---

## 🌐 API Integrations

The project connects to DummyJSON endpoints defined in `src/lib/data.js`:

| Purpose | Method | Endpoint |
|---|---|---|
| Fetch all products | `GET` | `https://dummyjson.com/products` |
| Search products | `GET` | `https://dummyjson.com/products/search?q={query}` |
| Filter by category | `GET` | `https://dummyjson.com/products/category/{category}` |

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.18 or higher recommended) and `npm` installed.

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd internship-search
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the app in development mode with hot-reloading |
| `npm run build` | Compiles and optimizes the app for production |
| `npm run start` | Runs the production build server |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## ⚙️ Configuration Notes

### Image Domain Whitelist
External images from `cdn.dummyjson.com` are permitted in `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```
