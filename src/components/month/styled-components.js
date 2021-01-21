import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: slategray;
    flex: 8.5 0 0;
    display: flex;
    flex-direction: column;
`
export const WeekdaysContainer = styled.div`
    flex: 0 0 40px;
    display: flex;
    justify-content: space-evenly;
`

export const Weekday = styled.div`
    background-color: gray;
    flex: 0 1 calc(100% / 7 - 6px);
    text-align: center;
    line-height: 40px;
`

export const DaysContainer = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    padding: 3px 0;
`