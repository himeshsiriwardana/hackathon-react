import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
    signInRedirectURL: "http://localhost:3000/",
    signOutRedirectURL: "http://localhost:3000/",
    clientID: "5IT1_bqbYco8iJ2UfXs2FpCbTnca",
    baseUrl: "https://api.asgardeo.io/t/himeshdevinda",
    scope: [ "openid","profile", "groups" ],
    storage: "sessionStorage"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AuthProvider config={ config }>
        <App />
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
