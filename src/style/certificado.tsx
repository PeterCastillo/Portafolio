import styled from "styled-components"

export const CertificadoStyle = styled.div`
    flex: 1 1 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(25,85,188);
    padding: 0.15rem;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
    -moz-box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
    box-shadow: 0px 0px 10px 0px rgb(25, 85, 188);
`
export const CertificadoLogo = styled.div`
    padding: 0.5rem 0rem;
`
export const CertificadoInfo = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    gap: 0.5rem;
    padding: 0.5rem 0rem;
`
export const LogoImg = styled.div`
    width: 10rem;
    height: 10rem;
`

export const CertificadoTitle = styled.span`
    font-weight: bold;
    color: rgb(52, 52, 52);
`
export const CertificadoThings = styled.span`
    color: rgb(127,141,170);
`