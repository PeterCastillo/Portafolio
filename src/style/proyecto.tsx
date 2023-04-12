import styled from "styled-components";

export const ProyectStyle = styled.div`
    display: flex;
    background-color:rgba(241, 241, 241, 0.664);
    padding: 1rem;
    border-radius: 0.5rem;
    gap: 1rem;
    /* flex-wrap: wrap; */
    color: rgb(52, 52, 52);
    /* -webkit-box-shadow: 0px 0px 10px 0px rgba(127,141,170,1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(127,141,170,1);
    box-shadow: 0px 0px 10px 0px rgba(127,141,170,1);
    &:hover{
        -webkit-box-shadow: 0px 0px 15px 0px rgba(127,141,170,1);
    -moz-box-shadow: 0px 0px 15px 0px rgba(127,141,170,1);
    box-shadow: 0px 0px 15px 0px rgba(127,141,170,1);
    } */
    user-select: none;
    @media screen and (max-width:875px) {
        flex-direction: column;
    }
`
export const ProyectImg = styled.div`
    flex: 1 1 15rem;
    @media screen and (max-width:875px) {
        flex: 1 1 10rem;
    }
`
export const ProyectoInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    justify-content: center;
    flex: 1 1 15rem;
    @media screen and (max-width:875px) {
        flex: 1 1 10rem;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
`

export const Title = styled.span`
    font-size: 1.3rem;
    align-self: center;
    font-weight: bold;
`

export const Info =  styled.p`
    font-size: 1rem;
    align-self: center;
    text-align: center;
`
export const ProyectTecs = styled.div`
    align-self: center;
    text-align: center;
    display: flex;
    gap: 0.3rem;
`
export const Tec = styled.a`
    font-size: 2rem;
    color: black;
`
export const Links = styled.div`
    align-self: flex-end;
    display: flex;
    gap: 0.1rem;
`