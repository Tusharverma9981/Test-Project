# 🏠 Real Estate Admin Panel & Landing Page

This project is a **Real Estate Web Application** that features a user-facing landing page and a secure admin panel for property listings and management.

---

## 🧠 Approach & Tech Stack

To build this full-stack project, I followed a modular and scalable architecture using the following tools and technologies:

### ⚙️ Backend

* **Express.js:**
  Used as the core server framework to handle routing, middleware, and server-side logic efficiently.

* **MongoDB (with Mongoose):**
  Used as the primary database to store property listings and admin details in a flexible, document-based format.

* **Cloudinary:**
  Integrated to upload and store images in a fast, secure, and CDN-optimized environment. This enables efficient image handling without burdening the local server.

### 🎨 Frontend

* **EJS (Embedded JavaScript Templates):**
  Used to dynamically render HTML pages on the server side. EJS allowed for easy templating and the reuse of UI components such as headers, footers, and cards.

* **Tailwind CSS (Optional if used):**
  Utilized for clean, responsive design across both landing and admin panels, ensuring a mobile-friendly and visually appealing UI.

---

## 💡 Key Features

* 🏨 **Landing Page:**
  Showcases real estate listings in a professional layout with images, titles, and descriptions.

* 🔐 **Admin Panel:**
  A dedicated panel for adding, updating, or deleting property listings with real-time changes reflected in the UI.

* 🖼️ **Image Uploads via Cloudinary:**
  Admins can upload property images directly, which are then hosted on Cloudinary and embedded in the listings.

---

## 🛠️ Installation & Setup

```bash
git clone https://github.com/your-username/real-estate-project.git
cd real-estate-project
npm install
```

### 🔑 Environment Variables (`.env`)

Create a `.env` file and include the following:

```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=3000
```

### 🚀 Run the App

```bash
node app.js
```

---



---

## 🙋‍♂️ Why This Approach?

* Choosing **EJS** kept the rendering server-side, which is ideal for SEO-friendly content like real estate listings.
* **Express + MongoDB** offered a quick and flexible backend setup suitable for MVPs and full-stack apps.
* Using **Cloudinary** ensured performance optimization for media content — critical for property images.
* The entire stack is lightweight, clean, and easy to scale or refactor into a full-fledged product.

---

## 📌 Conclusion

This project demonstrates how to efficiently combine **server-side rendering, a document database, and cloud media storage** into a functional and clean real estate application with administrative control.
