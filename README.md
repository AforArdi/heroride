# 🚗 HeroRide - Premium Car Rental Platform

> 🚀 **[Live Demo](https://heroride.vercel.app)** - Check out the live application now!

Hey there! Welcome to **HeroRide**. I built this full-stack web application as a major milestone in my 180-day MERN stack learning journey. I'm super excited to share it because building this platform really pushed my skills to the next level in connecting a Next.js frontend with a secure Express backend!

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-7.2-green?style=flat-square&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwind-css)

---

## ✨ Features

### 🔍 **Car Discovery & Exploration**
- Browse an extensive catalog of available rental cars
- Advanced search and filtering capabilities by car type, price, and location
- Detailed car information with high-quality images and specifications
- Real-time availability status

### 📅 **Seamless Booking System**
- Easy-to-use booking modal with date and time selection
- Instant booking confirmation with toast notifications
- View and manage all your active bookings
- Modify or cancel bookings with flexible terms

### 👤 **User Management**
- Secure user authentication with email/password
- OAuth authentication with Google Sign-In
- Complete user profile management
- User dashboard with personalized features

### 🏎️ **Car Owner Tools**
- Add and manage your own vehicles
- Track bookings for your listed cars
- Edit car details, pricing, and availability
- Monitor booking performance and demand

### ⭐ **Reviews & Ratings**
- Leave detailed reviews and ratings
- View real customer feedback
- Trust-building community features
- Animated review carousel

### ❓ **Helpful FAQ Section**
- Comprehensive FAQs addressing common questions
- Interactive accordion interface
- Information about documents, bookings, and availability

### 🌙 **Dark/Light Theme**
- Toggle between dark and light modes
- Persistent theme preference
- Optimized UI for both modes

### 📱 **Responsive Design**
- Fully responsive across all devices
- Mobile-first approach
- Smooth animations and transitions
- Beautiful UI with HeroUI components

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React metaframework with App Router
- **Runtime**: [React 19](https://react.dev/) - JavaScript library for UI
- **Database**: [MongoDB 7.2](https://www.mongodb.com/) - NoSQL database
- **Authentication**: [Better Auth](https://www.better-auth.com/) - Modern authentication library
- **UI Library**: [HeroUI 3](https://heroui.com/) - Beautiful React components
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library
- **Carousel**: [Swiper](https://swiperjs.com/) - Touch slider carousel
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/) - Toast notifications

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/heroride.git
cd heroride
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
BETTER_AUTH_SECRET=your_random_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

```
heroride/
├── src/
│   ├── app/
│   │   ├── api/                 # API routes & authentication
│   │   ├── cars/                # Car listing and details pages
│   │   ├── add-car/             # Car listing form
│   │   ├── my-bookings/         # User's bookings
│   │   ├── my-added-cars/       # User's listed cars
│   │   ├── login/               # Login page
│   │   ├── register/            # Registration page
│   │   ├── rate-us/             # Review/rating page
│   │   ├── providers/           # Context providers
│   │   └── layout.js            # Root layout
│   ├── components/
│   │   ├── Home/                # Homepage components
│   │   │   ├── Banner.jsx
│   │   │   ├── PopularCars.jsx
│   │   │   ├── Reviews.jsx
│   │   │   ├── Faq.jsx
│   │   │   └── Footer.jsx
│   │   ├── Navbar/              # Navigation components
│   │   └── utils/               # Utility components
│   └── lib/
│       ├── auth.js              # Authentication setup
│       ├── auth-client.js       # Client-side auth
│       ├── data.js              # Database queries
│       └── action.js            # Server actions
├── public/                       # Static assets
├── package.json
└── next.config.mjs
```

---

## 🎯 Key Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with banner, popular cars, reviews, and FAQ |
| Explore Cars | `/cars` | Browse all available cars with search and filters |
| Car Details | `/cars/[id]` | Detailed information about a specific car |
| Add Car | `/add-car` | Form to list a new car |
| My Bookings | `/my-bookings` | View and manage your reservations |
| My Added Cars | `/my-added-cars` | Manage your listed vehicles |
| Login | `/login` | User authentication |
| Register | `/register` | New user registration |
| Rate Us | `/rate-us` | Leave reviews and ratings |

---

## 🔐 Authentication

HeroRide uses **Better Auth** for secure authentication with support for:
- Email/Password signup and login
- Google OAuth integration
- Session management
- MongoDB adapter for secure data storage

---

## 💾 Database Schema

### Cars Collection
```javascript
{
  _id: ObjectId,
  carName: String,
  carType: String,
  dailyRentPrice: Number,
  image: String,
  seatCapacity: Number,
  transmission: String,
  fuelType: String,
  mileage: String,
  pickupLocation: String,
  description: String,
  features: [String],
  availability: Boolean,
  owner: ObjectId,
  bookingCount: Number,
  createdAt: Date
}
```

### Bookings Collection
```javascript
{
  _id: ObjectId,
  carId: ObjectId,
  userId: ObjectId,
  pickupDate: Date,
  dropoffDate: Date,
  totalPrice: Number,
  status: String,
  createdAt: Date
}
```

### Reviews Collection
```javascript
{
  _id: ObjectId,
  name: String,
  message: String,
  rating: Number,
  createdAt: Date
}
```

---

## 🧪 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

---

## 📧 Contact & Support

For questions, issues, or suggestions, please feel free to reach out:

- **LinkedIn**: [Mohammad Ardi](https://www.linkedin.com/in/mohammad-ardi/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohammad-ardi/)

---

<div align="center">

**Made with ❤️ by [Mohammad Ardi](https://www.linkedin.com/in/mohammad-ardi/)**

⭐ If you found this project helpful, please give it a star!

</div>