import React from 'react'
import styled from 'styled-components';

import MainLogo from '../../../assets/icons/mainLogo.png';
import SearchIcon from '../../../assets/icons/mainSearch.svg'
import ScanIcon from '../../../assets/icons/mainScan.svg';


const Wrapper = styled.div`
    display : flex;
    flex-direction : row;
    justify-content: center; 

    position: relative;
    width : 100%;

    padding-top : 7%;
    padding-bottom : 7%;
`

const LogoImg = styled.img`
    width : 35%;
`

const IconDiv = styled.div`
    position : absolute;
    right : 0;
    top : 42%;

    width : 15%;

    display : flex;
    flex-direction : row;
    justify-content : space-between;

    & > img{
        width : 45%;
        margin : 0%;
    }
`

export default function Header() {
  return (
    <Wrapper>
        <LogoImg src = {MainLogo}></LogoImg>
        <IconDiv>
            <img src = {SearchIcon}></img>
            <img src = {ScanIcon}></img>
        </IconDiv>
    </Wrapper>
  )
}
