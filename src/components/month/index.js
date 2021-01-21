import React from "react";
import Day from "../day";
import {
  DaysContainer,
  Weekday,
  WeekdaysContainer,
  Wrapper,
} from "./styled-components";
import { BlankDay } from "../day/styled-components";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getLastDayOfMonth = (month, year) => {
  const nextMonthFirstDay = new Date(year, month === 12 ? 0 : month, 1);
  nextMonthFirstDay.setDate(nextMonthFirstDay.getDate() - 1);
  return nextMonthFirstDay;
};

const renderDays = (month, year, events) => {
  const lastDayOfMonth = getLastDayOfMonth(month, year);
  const monthDaysCount = lastDayOfMonth.getDate();
  const firstWeekDay = new Date(year, month - 1, 1).getDay();
  const lastWeekDay = lastDayOfMonth.getDay();
  const daySlotsCount = monthDaysCount + 6 - lastWeekDay;
  const rowsCount = Math.floor((daySlotsCount - 1) / 7) + 1;
  const days = [];

  for (let i = 1 - firstWeekDay; i <= daySlotsCount; i++) {
    if (i < 1 || i > monthDaysCount) {
      days.push(<BlankDay key={`${month}-${i}`} rowsCount={rowsCount} />);
      continue;
    }
    const dayEvents = events.filter(({ date }) => date.getDate() === i);
    days.push(
      <Day
        key={`${month}-${i}`}
        day={i}
        events={dayEvents}
        rowsCount={rowsCount}
      />
    );
  }

  return days;
};

const Month = ({ month, year, events }) => {
  return (
    <Wrapper>
      <WeekdaysContainer>
        {weekdays.map((day) => (
          <Weekday key={day}>{day}</Weekday>
        ))}
      </WeekdaysContainer>
      <DaysContainer>{renderDays(month, year, events)}</DaysContainer>
    </Wrapper>
  );
};

export default Month;
