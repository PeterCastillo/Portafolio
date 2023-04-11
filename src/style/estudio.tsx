import styled from "styled-components";

export const EstudioStyle = styled.div`
  display: flex;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 2rem;
  flex-direction: row-reverse;
  gap: 2rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const EstudioPlace = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 1px;
  background-color: rgb(25, 85, 188);
  -webkit-box-shadow: 0px 0px 5px 0px rgb(127, 141, 170);
  -moz-box-shadow: 0px 0px 5px 0px rgb(127, 141, 170);
  box-shadow: 0px 0px 5px 0px rgb(127, 141, 170);
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    -webkit-box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
    -moz-box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
    box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
  }
`;
export const ImgEstudio = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

export const EstudioInfo = styled.div`
  flex: 1 1 20rem;
  display: flex;
  flex-direction: column;
  background-color: rgb(25, 85, 188);
  padding: 1.5px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 3px 0px rgb(127, 141, 170);
  -moz-box-shadow: 0px 0px 3px 0px rgb(127, 141, 170);
  box-shadow: 0px 0px 3px 0px rgb(127, 141, 170);
  transition: all 300ms ease;
  &:hover {
    transition: all 300ms ease;
    -webkit-box-shadow: 0px 0px 8px 0px rgb(25, 85, 188);
    -moz-box-shadow: 0px 0px 8px 0px rgb(25, 85, 188);
    box-shadow: 0px 0px 8px 0px rgb(25, 85, 188);
  }
  @media screen and (max-width: 900px) {
    flex: 1 1 10rem;
  }
`;
export const EstudioLogo = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  padding: 1rem;
  background-color: white;
`;

export const EstudioDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  color: white;
`;
export const EstudioType = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 5px 10px;
    background-color: white;
    color: rgb(127, 141, 170);
    border-radius: 5px;
    border: solid 1px rgb(127, 141, 170);
    user-select: none;
    span {
        font-size: 0.85rem;
    }
    svg {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 600px) {
      span {
        display: none;
      }
    }
  }
`;
export const EstudioDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const EstudioEstudio = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const EstudioSpecificInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.7rem 0.5rem;
  background-color: white;
  border-radius: 5px;
`;

export const EstudioList = styled.ul`
  margin: 0rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0rem;
`;
export const EstudioWeb = styled.a`
  font-size: 0.8rem;
  align-self: flex-end;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: rgb(25, 85, 188);
  color: white;
  text-align: center;
  text-decoration: none;
`;
export const EstudioThing = styled.li`
  list-style: none;
  font-size: 1rem;
  color: rgb(127, 141, 170);
  letter-spacing: -1px;
`;
export const Fecha = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  max-width: 7rem;
  letter-spacing: -1px;
  font-size: 0.8rem;
  @media screen and (max-width: 900px) {
    /* flex-direction: column-reverse; */
  }
`;
