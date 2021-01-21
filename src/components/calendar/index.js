import React, { useState } from "react";
import DateSelector from "../date-selector";
import Month from "../month";
import { Wrapper, Footer } from "./styled-components";

const getMonthEvents = (month, year, events) => {
  return events.filter(
    ({ date }) => date.getMonth() === month - 1 && date.getFullYear() === year
  );
};

const Calendar = ({ startingDate, events }) => {
  const [month, setMonth] = useState(startingDate.month);
  const [year, setYear] = useState(startingDate.year);
  const [allEvents, setAllEvents] = useState(events);

  const onChangeMonth = (diff) => {
    const nextMonth = month + diff;

    if (nextMonth > 0 && nextMonth < 12) {
      setMonth(nextMonth);
      return;
    }

    setMonth(!nextMonth ? 12 : 1);
    setYear(year + diff);
  };

  return (
    <Wrapper>
      <DateSelector onChangeMonth={onChangeMonth} month={month} year={year} />
      <Month month={month} year={year} events={getMonthEvents(month, year, allEvents)} />
      <Footer>
        <a target="_blank" href="http://github.com/n20amaral/calendar">
          Github
        </a>
      </Footer>
    </Wrapper>
  );
};

export default Calendar;
