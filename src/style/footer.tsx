import styled from "styled-components";

export const  FooterContainer = styled.div`
    text-align: center;
    padding: 1rem;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
`

export const FooterText = styled.span`
    font-size: 0.8rem;
    font-weight: bold;
    font-family: "Inter", sans-serif;
    color: rgb(127, 141, 170);
    &:last-child{
        font-size: 0.5rem;
    }
`