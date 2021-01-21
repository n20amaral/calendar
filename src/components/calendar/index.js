import React, { useState } from "react";
import DateSelector from "../date-selector";
import Month from "../month";
import { Wrapper, Footer } from "./styled-components";

const Calendar = ({ startingDate }) => {
  const [month, setMonth] = useState(startingDate.month);
  const [year, setYear] = useState(startingDate.year);

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
      <Month month={month} year={year} />
      <Footer>
        <a target="_blank" href="http://github.com/n20amaral/calendar">
          Github
        </a>
      </Footer>
    </Wrapper>
  );
};

export default Calendar;
