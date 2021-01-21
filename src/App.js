import React from "react";

import "./App.css";
import Calendar from "./components/calendar"

const fakeEvents = [
  {
    title: "Birthday",
    date: new Date(2021, 1, 10),
  },
  {
    title: "Dentist Appointment",
    date: new Date(2021, 1, 10),
  },
  {
    title: "Party",
    date: new Date(2021, 1, 10),
  },
  {
    title: "Hangover",
    date: new Date(2021, 1, 11),
  },
  {
    title: "Father's Day",
    date: new Date(2021, 2, 19),
  },
];

function App() {
  return (
    <div className="app">
        <Calendar startingDate={{month: 3, year: 2021}} events={fakeEvents} />
    </div>
  );
}

export default App;
