# Medix - Medical Appointment Booking Application

Medix is a modern, responsive web application designed to streamline the process of finding and booking medical services. Users can browse various medical services, view detailed information, and book appointments. The platform also features secure user authentication, profile management, and a personalized appointments dashboard.

**Live Link:** [https://medical-booking-application.netlify.app/](https://medical-booking-application.netlify.app/)

**GitHub Repository:** [https://github.com/FarhanHamim/Medical-Appointment-Booking-Application/](https://github.com/FarhanHamim/Medical-Appointment-Booking-Application/)

## Features

### 1. Navigation & Layout
* **Responsive Navbar:**
    * Features the "Medix" logo and site name.
    * Navigation links: Home, Login, Register.
    * **Conditional UI for Logged-in Users:**
        * Displays user's profile picture (or a default icon).
        * Shows the user's display name.
        * Provides a "Logout" button.
    * Highlights the active route.
* **Consistent Footer:**
    * Displays the copyright message: `Copyright © 2024 - All right reserved by Medix Ltd.`
* **Dynamic Page Titles:** Each page has a relevant title for better browser history and SEO.
* **Loading Spinner:** Indicates data fetching or page transitions for improved UX.
* **Scroll Animations:** Subtle animations on scroll using AOS library for enhanced visual appeal.

### 2. Homepage (`/`)
* **Engaging Banner/Slider:**
    * Features at least 3 relevant, high-quality images with descriptive text using SwiperJS.
* **Services Section:**
    * Displays a minimum of 6 medical services.
    * Each service card includes:
        * Service Image
        * Service Name
        * Short, meaningful description
        * Price
        * "View Details" button to navigate to the specific service page.
    * Service data is loaded from a local `services.json` file.
* **"Why Choose Us" Section:** (Equivalent to "About Us") Provides information about the platform's benefits.
* **"Client Testimonials" Section:** Displays feedback from users.
* **"Contact Us" Section:**
    * Includes address, phone number, and email.
    * Provides a functional (can be dummy for submission) contact form.

### 3. Service Details Page (`/service/:id`)
* **Private Route:** Accessible only to logged-in users. Non-authenticated users are redirected to the Login page.
* Displays comprehensive details for the selected service:
    * Service Name
    * Service Image
    * Detailed Description
    * Price
* **"Book Appointment" Button:**
    * Upon clicking, a success notification (toast message) confirms the booking: "Successfully Booked!".

### 4. Authentication (Firebase Powered)
* **Login Page (`/login`):**
    * Email and Password based login.
    * Social Login options: Google Sign-in, GitHub Sign-in.
    * Clear error messages for invalid credentials or other login issues.
    * A link to navigate to the Register page.
* **Registration Page (`/register`):**
    * User registration form with fields for:
        * Name
        * Email
        * Photo URL
        * Password
    * **Password Validation:**
        * Minimum 6 characters.
        * At least one uppercase letter.
        * At least one special character.
    * Clear error messages for invalid input or registration failures.
    * A link to navigate to the Login page.

### 5. User-Specific Private Routes
* **User Profile Page (`/user-profile`):**
    * **Private Route.**
    * Displays the logged-in user's:
        * Name
        * Email
        * Photo URL
    * Features an "Update Profile" option allowing users to modify their name and photo URL.
* **Upcoming Appointments Page (`/appointments`):**
    * **Private Route.** (Bonus Feature)
    * Displays a list of services the user has conceptually "booked".

### 6. Error Handling
* **Custom 404 Not Found Page:** A user-friendly page for invalid URLs.

## Technologies Used

* **Frontend:**
    * React (v18.2.0)
    * Vite (as the build tool)
    * JavaScript (ES6+)
* **Routing:**
    * React Router DOM (v6.22.3)
* **Styling:**
    * Tailwind CSS (v3.4.1)
    * DaisyUI (v4.7.2) - Tailwind CSS Components
* **Authentication & Database (Backend as a Service):**
    * Firebase (v10.8.0) - for authentication and potentially storing user data.
* **Notifications:**
    * React Hot Toast (v2.4.1)
* **Animations:**
    * AOS (Animate On Scroll) (v2.3.4)
* **Slider/Carousel:**
    * Swiper (v11.0.7)
* **Page Title Management:**
    * React Helmet Async (v2.0.4)
* **Linting/Formatting:**
    * ESLint (configured for React)
* **Deployment:**
    * Netlify

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/FarhanHamim/Medical-Appointment-Booking-Application.git](https://github.com/FarhanHamim/Medical-Appointment-Booking-Application.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Medical-Appointment-Booking-Application
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
    *(If you prefer yarn, use `yarn install`)*

### Running the Project Locally

1.  **Ensure your `.env` file is correctly set up with your Firebase credentials.**
2.  **Run the development server:**
    ```sh
    npm run dev
    ```
    *(If you prefer yarn, use `yarn dev`)*

    This will typically open the application in your default web browser at `http://localhost:5173` (the port might vary if 5173 is in use).

## Project Structure

The project follows a standard Vite + React application structure:

Medical-Appointment-Booking-Application/
├── public/
│   └── services.json       # Static data for medical services
├── src/
│   ├── assets/             # Images, logos, etc.
│   ├── components/         # Reusable UI components (Navbar, Footer, ServiceCard, Spinner, etc.)
│   ├── firebase/
│   │   └── firebase.config.js # Firebase initialization
│   ├── layouts/
│   │   └── MainLayout.jsx    # Main application layout (includes Navbar, Footer, Outlet)
│   ├── pages/              # Page components (Home, Login, Register, ServiceDetails, etc.)
│   ├── providers/
│   │   └── AuthProvider.jsx  # React Context for Firebase authentication state
│   ├── routes/
│   │   ├── PrivateRoute.jsx  # HOC for protecting routes
│   │   └── Routes.jsx        # Main application routes configuration
│   ├── App.jsx               # Main application component
│   └── main.jsx              # Vite entry point
├── .env                      # Environment variables (Firebase config - Gitignored)
├── .eslintrc.cjs           # ESLint configuration
├── .gitignore                # Specifies intentionally untracked files
├── index.html                # Main HTML template for Vite
├── package.json              # Project metadata, scripts, and dependencies
├── postcss.config.js         # PostCSS configuration (for Tailwind CSS)
├── tailwind.config.js        # Tailwind CSS and DaisyUI configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file


## Author

* **Farhan Hamim**
    * GitHub: [https://github.com/FarhanHamim](https://github.com/FarhanHamim)
