import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styled from 'styled-components';
import logo from '../../public/assets/image/logo/logo.png';
import BtnMobileMenu from '../../public/assets/icon/btn_mobile-menu.svg';
import BtnMobileClose from '../../public/assets/icon/btn_mobile-close.svg'

const HeaderContainer = styled.header`
  min-width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  background: white;
  width: 250px;
  top: 0;
  right: 0;
  height: 100%;
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
  padding-bottom: 19.5px;
`;
const BlackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(26, 28, 35, 0.7);
`;
interface Menu { 
  title: string;
  path: string;
  isInternal: boolean;
}

const menues = [ 
  {
    title: 'Works',
    path: '/works',
    isInternal: true,
  },
  {
    title: 'Recruit',
    path: '/',
    isInternal: false,
  },
  {
    title: 'Contact',
    path: '/',
    isInternal: false,
  }
]

function Menues({ title, path, isInternal }: Menu) {
  return (
    <li>
      {
        isInternal ?
        <Link href={ path }><a>{ title }</a></Link>
        : <a href={ path }>{ title }</a>
      }
    </li>
  )
}

export default function Header() {
  const router = useRouter();
  const [ isMobileNavOpened, setIsMobileNavOpened ] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpened(!isMobileNavOpened)
  };

  useEffect(() => {
    const handleRouteChange = () => {
      if(isMobileNavOpened) {
        setIsMobileNavOpened(isMobileNavOpened => !isMobileNavOpened)
      }
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

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
          <BtnMobileMenu />
        </button>
      </div>
      { isMobileNavOpened &&
        <BlackBackground>
          <MobileNavContainer className="sm:hidden">
            <ul>
              <li className="text-right">
                <MobileNavCloseBtn>
                  <BtnMobileClose onClick={toggleMobileNav} />
                </MobileNavCloseBtn>
              </li>
              {
                menues.map((menu: Menu) => (
                  <Menues 
                    key={menu.title}
                    title={menu.title} 
                    path={menu.path} 
                    isInternal={menu.isInternal}
                  />
                ))
              }
            </ul>
          </MobileNavContainer>
        </BlackBackground>
      }
      <NavContainer className="hidden sm:flex">
        <ul>
          {
            menues.map((menu: Menu) => (
              <Menues 
                key={menu.title}
                title={menu.title} 
                path={menu.path} 
                isInternal={menu.isInternal} 
              />
            ))
          }
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}
