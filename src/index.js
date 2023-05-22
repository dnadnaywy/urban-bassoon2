import React from "react";
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage';

// import LoginPage from "./Login_page";
// import RegisterPage from "./Register_page";
import RestaurantPage from "./RestaurantPage.js";
import FavouritesPage from "./FavouritesPage.js"


// import LoginPage from "./login-form.js";

// const restaurant = {
//   "Title": "Cuib",
//   "Image": "https://ychef.files.bbci.co.uk/1280x720/p078rppm.jpg"
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    {/* 
    <LoginPage/>
    <RegisterPage/> 
    
    <RestaurantPage restaurant={restaurant}/>*/}
<LandingPage />
  </React.StrictMode>
);
