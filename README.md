# 🍔 Food Delivery Web Application

A full-stack food delivery platform where users can browse and order food online. The application features user authentication, real-time order management, distance-based delivery charges using Go Maps API, and Stripe-based payment integration. Admins can manage menu items and track orders with a dedicated admin panel.

---

## 🔧 Tech Stack

### 🚀 Frontend
- React.js
- CSS

### 🛠️ Backend
- Node.js
- Express.js

### 🗄️ Database
- MongoDB Atlas

### 💳 Payment Gateway
- Stripe

### 📍 Maps & Distance
- Go Maps API

---

## ✨ Features

### 🔐 User Authentication
- Sign up and login functionality
- Secure session management

### 🏠 Home Page
- Browse all available food items
- Filter foods by categories
- Add items to cart

### 🛒 Cart Page
- View selected items
- Modify quantities or remove items

### 🧾 Checkout Page
- Input delivery address
- Calculate delivery distance and fee using Go Maps API
- Process payment via Stripe

### 🧑‍🍳 Admin Panel
- Add, edit, and delete food items
- View all customer orders
- Update order status: `Preparing`, `Out for Delivery`, `Delivered`

---

## 🔍 How It Works

1. **User Flow:**
   - Create an account or login
   - Browse and filter food items
   - Add items to cart
   - Provide address in checkout
   - View delivery cost based on distance
   - Make payment via Stripe
   - Receive confirmation and delivery updates

2. **Admin Flow:**
   - Login to admin dashboard
   - Manage food inventory (CRUD operations)
   - View incoming orders and update statuses

---

## 📁 Project Structure

/client → React frontend
/server → Node + Express backend
/models → Mongoose models
/routes → API routes
/config → DB & API configs


Make sure to configure environment variables for:

MongoDB URI
Stripe keys
Go Maps API key


Future Enhancements:
Real-time order tracking with WebSockets
Rating & reviews for food items
Email/SMS order confirmation
