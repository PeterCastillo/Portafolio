import styled from "styled-components";

export const IntroContainer = styled.div`
  align-items: center;
  margin-top: 5rem;
  padding: 5rem 0rem;
  @media screen and (max-width: 900px) {
    padding: 3rem 0rem;
  }
`;

export const SeccionIntro = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0rem 1rem;
  margin: auto;
  font-family: "Inter", sans-serif;
  letter-spacing: -1px;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Foto = styled.div`
  padding: 5px;
  display: flex;
  background-color: rgb(25, 85, 188);
  border-radius: 5px;
  display: flex;
  img {
    display: block;
    max-width: 20rem;
    width: 100%;
    border-radius: 5px;
    @media screen and (max-width: 500px) {
        width: 100%;
  }
  }
`;

export const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 5 0 30rem;
  color: rgb(127, 141, 170);
  @media screen and (max-width: 900px) {
    flex: 0 1 10rem;
    text-align: center;
  }
`;
export const Colored = styled.span`
  color: rgb(25, 85, 188);
  font-weight: 900;
  font-size: 2rem;
`;
export const Text = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625em;
  width: 100%;

`;


export const RedesBtns = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  gap: 0.5rem;
  div {
    white-space: nowrap;
    padding: 10px 15px;
    background-color: rgb(25, 85, 188);
    border-radius: 5px;
    display: flex;
    gap: 1rem;
    cursor: pointer;
    user-select: none;
    color: white;
    display: flex;
    align-items: center;
    &:hover {
      transition: all 150ms ease-in-out;
      background-color: rgba(25, 85, 188, 0.788);
    }
  }
`;

export const RedBtn = styled.a`
  text-decoration: none;
  font-family: "Inter", sans-serif;
  width: 10;
  cursor: pointer;
  user-select: none;
  border: solid 1px rgb(127, 141, 170);
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgb(127, 141, 170);
  &:hover {
    transition: all 150ms ease-in-out;
    color: rgb(25, 85, 188);
    border-color: rgb(25, 85, 188);
  }
  svg {
    font-size: 1.2rem;
  }
`;
