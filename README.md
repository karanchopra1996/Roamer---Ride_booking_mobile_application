# Roamer - Ride Booking Mobile Application 🚖  

Roamer is a powerful mobile application built with **React Native** for handling the user interface, **Google Maps** for rendering maps with directions, **Stripe** for handling payments, **serverless PostgreSQL** for managing databases, and styled with **Tailwind CSS**. The primary goal is to demonstrate how to develop full-stack mobile applications to showcase a developer's skills in a unique and impactful manner.

---

## Tech Stack  
- React Native  
- Expo  
- Stripe  
- PostgreSQL  
- Google Maps  
- Zustand  
- Clerk  
- Tailwind CSS  

---

## Features  
- **Onboarding Flow**: Seamless user registration and setup process.  
- **Email Password Authentication with Verification**: Secure login with email verification.  
- **OAuth Using Google**: Easy login using Google credentials.  
- **Authorization**: Secure access control for different user roles.  
- **Home Screen with Live Location & Google Map**: Real-time location tracking with markers on a map.  
- **Recent Rides**: View a list of recent rides at a glance.  
- **Google Places Autocomplete**: Search any place on Earth with autocomplete suggestions.  
- **Find Rides**: Search for rides by entering 'From' and 'To' locations.  
- **Select Rides from Map**: Choose available cars near your location from the map.  
- **Confirm Ride with Detailed Information**: View complete ride details, including time and fare price.  
- **Pay for Ride Using Stripe**: Make payments using multiple methods like cards and others.  
- **Create Rides After Successful Payment**: Book a ride after confirming payment.  
- **Profile**: Manage account details in the profile screen.  
- **History**: Review all rides booked so far.  
- **Responsive on Android and iOS**: Optimized for both Android and iOS devices.  

---

## Prerequisites  
Ensure you have the following installed on your machine:  
- **Git**  
- **Node.js**  
- **npm (Node Package Manager)**  

---

## Cloning the Repository  
### Clone the repository using the following command:  
 - git clone [https://github.com/your-username/roamer.git](https://github.com/karanchopra1996/Roamer---Ride_booking_mobile_application.git)
 - cd roamer

## Installation
###  Install the project dependencies using npm:
 - npm install

## ⚙Set Up Environment Variables
### Create a new file named .env in the root of your project.
Add the following content:
- EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=
- EXPO_PUBLIC_PLACES_API_KEY=
- EXPO_PUBLIC_DIRECTIONS_API_KEY=
- DATABASE_URL=
- EXPO_PUBLIC_SERVER_URL=https://roamer.com/
- EXPO_PUBLIC_GEOAPIFY_API_KEY=
- EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
- STRIPE_SECRET_KEY=

Replace the placeholder values with your actual Clerk, Stripe, NeonDB, Google Maps, and Geoapify API credentials.
You can obtain these credentials by signing up on the respective platforms.

## Running the Project
### Start the application by running:
- npx expo start
