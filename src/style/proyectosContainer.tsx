import styled from "styled-components";

export const  ProyectosContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40rem,1fr));
    gap: 1rem;
    max-width: 1300px;
    margin: auto;
    gap: 1rem;
    padding: 1rem;
    @media screen and (max-width:875px) {
        grid-template-columns: repeat(auto-fill, minmax(18rem,1fr))
    }
`