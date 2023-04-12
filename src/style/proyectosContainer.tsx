import styled from "styled-components";

export const Container = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 1rem;
    font-family: "Inter", sans-serif;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Title = styled.span`
     font-size: 2rem;
    align-self: flex-start;
    font-weight: 900;
    color:  rgb(25, 85, 188);
`
export const ProyectosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 1rem;
  margin: auto;
  gap: 1rem;
  @media screen and (max-width: 875px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;
