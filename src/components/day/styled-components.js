import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: darkgray;
    flex: 0 1 calc(100% / 7 - 6px);
    position: relative;
    margin: 3px 0;
    ${({rowsCount}) => `height: calc(100% / ${rowsCount} - 6px);`}
    `

export const BlankDay = styled(Wrapper)`
    visibility: hidden;
`;

export const DayNumber = styled.h2`
    position: absolute;
    bottom: 10px;
    right: 10px;
    margin: 0;
`
//gap is not fully supported by browsers
export const EventsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const Event = styled.div`
    background-color: olive;
`
