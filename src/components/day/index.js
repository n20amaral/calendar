import React from "react";
import { Event, EventsWrapper, DayNumber, Wrapper } from "./styled-components";

const Day = ({day, events, rowsCount}) => {
    return <Wrapper rowsCount={rowsCount}>
        <DayNumber>{day}</DayNumber>
        <EventsWrapper>
            {events.length > 0 && events.map(({title}) => (
                <Event key={title}>{title}</Event>
            ))}
        </EventsWrapper>
    </Wrapper>
};

export default Day;