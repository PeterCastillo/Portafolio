import styled from "styled-components";
export const Contenedor = styled.div`
  max-width: 1000px;
  margin: auto;
  font-family: "Inter", sans-serif;
  padding: 1rem;
  padding-top: 5rem;
`;
export const Title = styled.span`
  font-size: 2rem;
  align-self: flex-start;
  font-weight: 900;
  color: rgb(25, 85, 188);
`;

export const ExperienciaContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;
export const ExperienciaItem = styled.div`
  flex: 1 1 30rem;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  padding: 1rem;
  ul {
    padding: 0rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    li {
      color: rgb(127, 141, 170);
      font-size: 1rem;
      letter-spacing: -0.5px;
    }
  }
`;
export const Type = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: rgb(25, 85, 188);
    font-weight: 600;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: start;
    flex-direction: column;
    color: rgb(127, 141, 170);
    span {
      &:last-child {
        font-size: 0.6rem;
        letter-spacing: -0.5px;
      }
    }
  }
`;

export const Tecs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border: solid 1px rgb(25, 85, 188);
    padding: 10px;
    border-radius: 5px;
    color: rgb(25, 85, 188);
    cursor: pointer;
    user-select: none;
    span {
      font-size: 0.8rem;
      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }
`;
