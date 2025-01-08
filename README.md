# Bistro Boss 🍽️

Bistro Boss is a modern and responsive restaurant website designed to provide a seamless experience for food enthusiasts. The project showcases a sleek interface, user-friendly navigation, and essential features for a restaurant's online presence. 

---

## 🌟 Overview
Bistro Boss is a full-stack web application designed to:
- Display a menu of delicious dishes with detailed descriptions.
- Allow users to browse, search, and filter dishes.
- Offer a smooth and interactive user experience.
- Provide an admin panel for managing menu items and user interactions.

---

## 🛠️ Technologies Used
### Frontend:
- **React**: Dynamic UI rendering.
- **Tailwind CSS**: Responsive and modern styling.

### Backend:
- **Node.js** and **Express.js**: Backend framework for API creation.
- **MongoDB**: NoSQL database for data storage.
- **Express js**: For database interaction.

### Others:
- **Axios**: For HTTP requests.
- **JWT**: For secure user authentication.
- **Firebase**: For user authentication and hosting.

---

## ✨ Main Features
- **Dynamic Menu**: View dishes by categories with filtering options.
- **User Authentication**: Login and sign-up functionality with Firebase.
- **Admin Dashboard**: Add, update, and delete menu items.
- **Order Management**: Manage customer orders seamlessly.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## 📦 Dependencies 
- **@tanstack/react-query**: Library for data fetching and caching.  
- **axios**: Promise-based HTTP client.  
- **lucide-react**: Icon library for React.  
- **react**: JavaScript library for building user interfaces.  
- **react-dom**: React library for DOM rendering.  
- **react-helmet-async**: Library for managing the document head.  
- **react-hook-form**: Library for form validation.  
- **react-hot-toast**: Notifications for React.  
- **react-icons**: Library of popular icons.  
- **react-parallax**: React component for creating parallax scrolling effects.  
- **react-responsive-carousel**: Carousel component for React.  
- **react-router-dom**: Declarative routing for React.  
- **react-simple-captcha**: CAPTCHA component for React forms.  
- **react-tabs**: Tabs component for React.  
- **shadcn**: Predefined UI components for React.  
- **sweetalert2**: Beautiful and customizable popups.   
- **tailwindcss-animate**: Tailwind CSS plugin for animations.  
- **zod**: TypeScript-first schema declaration and validation library.

To see the full list of dependencies, check the [package.json](./package.json) file.

---

## 🚀 How to Run Locally
Follow these steps to run the project on your local machine:

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/nafiz678/restaurant-project-client.git 
   cd restaurant-project-client


2. Install Dependencies:
- Frontend
    ```bash
    cd client
    npm install

- Backend
    ```bash
    cd server
    npm install


3. Set Up Environment Variables:
    ```bash
    env
    Copy code
    # Server  
    MONGO_URI=your_mongodb_connection_string
    # Client  
    VITE_FIREBASE_API_KEY=your_firebase_api_key

4. Run the Development Servers:
- Start the backend:
    ```bash
    cd server
    node index.js

- Start the frontend:
    ```bash
    cd server
    npm run dev

5. Access the Application: </br>
Open your browser and navigate to http://localhost:5000.