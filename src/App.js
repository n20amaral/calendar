import React from "react";

import "./App.css";
import Calendar from "./components/calendar"

export const EventsContext = React.createContext();

const fakeEvents = [
  {
    title: "Birthday",
    date: new Date(2021, 1, 10),
  },
  {
    title: "Put braces",
    date: new Date(2021, 1, 10),
  },
  {
    title: "Father's Day",
    date: new Date(2021, 2, 19),
  },
];

function App() {
  return (
    <div className="app">
      <EventsContext.Provider value={fakeEvents}>
        <Calendar startingDate={{month: 3, year: 2021}} />
      </EventsContext.Provider>
    </div>
  );
}

export default App;
