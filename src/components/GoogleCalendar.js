// src/components/GoogleCalendar.js
import React, { useState, useEffect } from 'react';
import { getToken } from '../googleCalendar'; // Import getToken function from googleCalendar.js

function GoogleCalendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Get tokens using the code from URL query parameters after user authorization
        const code = new URLSearchParams(window.location.search).get('code');
        if (code) {
            getToken(code).then(tokens => {
                // Use tokens to make authorized requests to Google Calendar API
                // Fetch events and set them to state
            }).catch(error => {
                console.error('Error getting tokens:', error);
            });
        }
    }, []);

    return (
        <div>
            {/* Display events from state */}
            {events.map(event => (
                <div key={event.id}>
                    <h3>{event.summary}</h3>
                    <p>{event.start.dateTime} - {event.end.dateTime}</p>
                </div>
            ))}
        </div>
    );
}

export default GoogleCalendar;
