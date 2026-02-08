# 🚗 Gadijankari - Vehicle Information Platform (Test Task)

**Live Demo:** [Insert Your Vercel Link Here]  
**Developer:** Ankit Kumar

---

## 📋 Project Overview
This project is a modern, responsive **Vehicle Information Page** built as a technical assessment for the *Gadijankari.com* platform revamp. 

The goal was to transform a traditional blog-style layout into a dynamic, data-driven, and "AI-ready" frontend architecture that aligns with the company's future vision of automated automobile content.

## 🛠️ Tech Stack Used
* **Core:** React.js (Vite)
* **Styling:** Tailwind CSS (for modern, responsive design)
* **Icons:** Lucide React (lightweight, vector icons)
* **Deployment:** Vercel

---

## 🚀 Key Features & Logic Implemented

### 1. "AI-Ready" Data Architecture
Instead of hardcoding HTML, I structured all vehicle and article data as **JSON Arrays**. 
* **Logic:** The frontend iterates over this data using `.map()`.
* **Future Benefit:** When your AI backend is ready, we simply replace the local JSON variable with an API call (`fetch` or `axios`), and the entire site populates automatically without changing a single line of UI code.

### 2. Modern & Responsive Layout
* **Mobile-First Approach:** Implemented a hamburger menu and stacked layouts for mobile, which expand to multi-column grids on laptops/desktops.
* **Sticky Header:** Implemented a dual-layer sticky header (Main Bar + Navigation Strip) similar to top-tier auto portals like *CarWale* and *Autocar*.

### 3. Reusable Component System
To ensure scalability, I broke the UI into modular components:
* `VehicleCard`: A uniform card design for listing cars/bikes.
* `Carousel`: A custom-built, auto-playing slider for featured stories.
* `ArticleCard`: A compact side-bar component for latest news.
This ensures consistency and makes maintenance easy.

### 4. Search Functionality
* **Logic:** Implemented a real-time `.filter()` on the vehicle dataset. As the user types in the search bar, the grid updates instantly to show matching results (e.g., "Tata", "Thar").

---

## 🔮 Future Roadmap (For Full Project)
If I proceed with the full platform revamp, here is my execution plan:

1.  **Backend Integration:** Connect this frontend to your Node.js/Python backend to fetch real-time AI-generated content.
2.  **SEO Optimization:** Implement Next.js (SSR) for better Google ranking of individual car pages.
3.  **Dynamic Routing:** Create individual pages for each vehicle (e.g., `/cars/mahindra-thar`) dynamically.
4.  **Admin Dashboard:** Build a simple panel where you can manually override or edit AI-generated data if needed.

---
