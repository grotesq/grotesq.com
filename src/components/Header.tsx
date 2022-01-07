import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logo from '../../public/assets/images/logo/logo.png';
import BtnMobileMenu from '../../public/assets/images/btn_mobile-menu.svg';
import React, { useState } from 'react';

const HeaderContainer = styled.header`
  background: #e5e5e5;
  min-width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    height: 60px;
  }
`;
const NavContainer = styled.nav`
   ul {
     display: flex;
     font-size: 18px;
     a:hover {
      color: ${({theme}) => theme.color.blue};
      text-decoration: underline;
     }
     li {
       padding-left: 45px;
       }
     }
   }
`;
const MobileNavContainer = styled.nav`
  position: absolute;
  width: 250px;
  top: 0;
  right: 0;
  height: 100%;
  background: beige;
  padding-top: 87px;
  padding-left: 30px;
  text-align: left;
  a:hover {
    color: ${({theme}) => theme.color.blue};
    text-decoration: underline;
  }
  li {
    padding-bottom: 30px;
  }
`;
const MobileNavCloseBtn = styled.button`
  padding-top: 22.5px;
  padding-right: 22.5px;
  color: ${({theme}) => theme.color.blue};
`;
const BlackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(26, 28, 35, 0.7);
`;

export default function Header() {
  const [ isMobileNavOpened, setIsMobileNavOpened ] = useState(false);
  const toggleMobileNav = () => setIsMobileNavOpened(!isMobileNavOpened);
  return (
    <HeaderContainer className="px-5 md:px-40">
      <div>
        <Link href="/">
          <a>
            <Image src={logo} alt="grtesq studio 그로테스큐 스튜디오" width={185} height={30} layout="fixed"></Image>
          </a>
        </Link>
      </div>
      <div>
        <button type="button" className="flex sm:hidden" onClick={toggleMobileNav}>
          <BtnMobileMenu/>
        </button>
      </div>
      {isMobileNavOpened &&
        <BlackBackground>
          <MobileNavContainer className="sm:hidden">
            <ul>
              <li className="text-right">
                <MobileNavCloseBtn onClick={toggleMobileNav}>x</MobileNavCloseBtn>
              </li>
              <li>
                <Link href="/works">
                  <a>Works</a>
                </Link>
              </li>
              <li>
                <a>Recruit</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </MobileNavContainer>
        </BlackBackground>
      }
      
      <NavContainer className="hidden sm:flex">
        <ul>
          <Link href="/works">
              <a>Works</a>
            </Link>
          <li>
            <a href="/">Recruit</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}
