import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: black;
    color: white;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Footer = styled.div`
    text-align: center;
    font-size: 10px;
    line-height: 16px;
    & > a {
        color: white;
        text-decoration:none;
    }
    & > a:hover {
         color: gray;
    }
`
