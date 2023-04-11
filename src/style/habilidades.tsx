import styled from "styled-components";

export const HabilidadesContainer = styled.div`
  max-width: 1000px;
  padding: 1rem;
  margin: auto;
  font-family: "Inter", sans-serif;
  margin-top: 5rem;
`;
export const Title = styled.span`
  color: rgb(25, 85, 188);
  font-weight: 900;
  font-size: 2rem;
`;
export const HabilidadesList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HabilidadItem = styled.div<{ showItems: boolean }>`
border-bottom: solid 1px rgb(127, 141, 170);
  border-color: ${(props) => props.showItems && "rgb(25, 85, 188);"};
  padding-bottom: 1rem;
  transition: ${(props) =>
    !props.showItems
      ? "all 100ms ease-in-out;"
      : "all 300ms ease-in-out;"};
`;

export const Header = styled.div<{ showItems: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(127, 141, 170);
  user-select: none;
  cursor: pointer;
  margin-bottom: 0.5rem;
  span {
    font-size: 1.2rem;
    font-weight: 600;
  }
  svg {
    font-size: 1.5rem;
    transition: all 150ms;
    transform: ${(props) => props.showItems && "rotate(180deg);"};
  }
  color: ${(props) =>
    props.showItems ? "rgb(25, 85, 188);" : "rgb(127, 141, 170);"};
`;
export const Skills = styled.div<{ showItems: boolean }>`
  /* max-height: 0rem;
    overflow: hidden; */
  /* padding: 1rem 0rem; */
  /* padding-bottom: 0rem; */
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  transition: ${(props) =>
    !props.showItems
      ? "all 100ms ease-in-out;"
      : "all 300ms ease-in-out;"};
  overflow: ${(props) => (!props.showItems ? "hidden" : "")};
  max-height: ${(props) => (!props.showItems ? "0rem" : "50rem")};
  /* padding-bottom: ${(props) => !props.showItems && "0rem;"}; */
  div {
    display: flex;
    gap: 1rem;
    white-space: nowrap;
    border: solid 1px rgb(127, 141, 170);
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    transition: all 300ms ease-in-out;
    color: rgb(127, 141, 170);
    align-items: center;
    &:hover {
      transition: all 300ms ease-in-out;
      color: rgb(25, 85, 188);
    }
    svg {
        font-size: 1.5rem;
    }
  }
`;
