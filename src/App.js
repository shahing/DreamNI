// src/App.js
import React from 'react';
import GoogleCalendar from './components/GoogleCalendar';
import NavBar from './components/NavBar';

function App() {
    return (
        <div>
            <h1>My Google Calendar App</h1>
            <GoogleCalendar />
            <NavBar />
        </div>
    );
}

export default App;
