import React from "react";
import { Wrapper, Title, Button } from "./styled-components";

const DateSelector = ({ month, year, onChangeMonth }) => {
  const today = new Date(year, month - 1);

  return (
    <Wrapper>
      <Button onClick={() => onChangeMonth(-1)}>&lt;</Button>
      <Title>{`${today.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      })}`}</Title>
      <Button onClick={() => onChangeMonth(1)}>&gt;</Button>
    </Wrapper>
  );
};

export default DateSelector;
