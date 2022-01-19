import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import logo from '../../public/assets/image/logo/logo.png';
import BtnMobileMenu from '../../public/assets/icon/btn_mobile-menu.svg';
import BtnMobileClose from '../../public/assets/icon/btn_mobile-close.svg';
import { pxToRem } from '../utils/utils';

interface MenuProps {
  title: string;
  path: string;
  isInternal: boolean;
  isSelected?: boolean;
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  justify-content: space-between;
  height: ${pxToRem(100)};
  min-width: 23.437rem;
  font-weight: 300;
  @media ${(props) => props.theme.mediaQueryMax('sm')} {
    height: ${pxToRem(60)};
    position: fixed;
    z-index: 9999;
    width: 100%;
    background-color: ${(props) => props.theme.color['white']};
  }
`;

const activeStyle = css`
  color: ${(props) => props.theme.color['primary-blue']};
  font-weight: 600;
  text-decoration: underline;
`;

const NavContainer = styled.nav`
  ul {
    display: flex;
    font-size: ${pxToRem(18)};
    li {
      padding-left: ${pxToRem(45)};
      a:hover {
        ${activeStyle}
      }
      .selected {
        ${activeStyle}
      }
    }
  }
`;
const MobileNavContainer = styled.nav`
  background: white;
  height: 100%;
  padding-left: ${pxToRem(30)};
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;
  width: 15.625rem;
  a:hover {
    ${activeStyle}
  }
  li {
    padding-bottom: ${pxToRem(30)};
  }
`;
const MobileNavCloseBtn = styled.button`
  padding-bottom: 19.5px;
  padding-right: 22.5px;
  padding-top: 22.5px;
`;
const BlackBackground = styled.div`
  background: ${(props) => props.theme.background['gradient70']};
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const menus = [
  {
    title: 'Works',
    path: '/works',
    isInternal: true,
    isSelected: false,
  },
  {
    title: 'Recruit',
    path: '',
    isInternal: false,
    isSelected: false,
  },
  {
    title: 'Contact',
    path: 'mailto:unknown@grotesq.com',
    isInternal: false,
    isSelected: false,
  },
];

function Menus({ title, path, isInternal, isSelected }: MenuProps) {
  return (
    <li>
      {isInternal ? (
        <Link href={path}>
          <a className={isSelected ? 'selected' : ''}>{title}</a>
        </Link>
      ) : (
        <a href={path} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      )}
    </li>
  );
}

export default function Header() {
  const router = useRouter();

  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpened(!isMobileNavOpened);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      if (isMobileNavOpened) {
        setIsMobileNavOpened((isMobileNavOpened) => !isMobileNavOpened);
      }
    };
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isMobileNavOpened, router.events]);

  return (
    <HeaderContainer className="px-5 lg:px-40">
      <div>
        <Link href="/">
          <a>
            <div className="w-32 sm:w-44">
              <Image
                src={logo}
                alt="grtesq studio 그로테스큐 스튜디오"
                width={185}
                height={30}
                layout="responsive"
              ></Image>
            </div>
          </a>
        </Link>
      </div>
      <div>
        <button type="button" className="flex sm:hidden" onClick={toggleMobileNav} aria-label="open menu">
          <BtnMobileMenu />
        </button>
      </div>
      {isMobileNavOpened && (
        <BlackBackground>
          <MobileNavContainer className="sm:hidden">
            <ul>
              <li className="text-right">
                <MobileNavCloseBtn>
                  <BtnMobileClose onClick={toggleMobileNav} />
                </MobileNavCloseBtn>
              </li>
              {menus.map((menu: MenuProps) => (
                <Menus
                  key={menu.title}
                  title={menu.title}
                  path={menu.path}
                  isInternal={menu.isInternal}
                  isSelected={menu.isSelected}
                />
              ))}
            </ul>
          </MobileNavContainer>
        </BlackBackground>
      )}
      <NavContainer className="hidden sm:flex">
        <ul>
          {menus.map((menu: MenuProps) => (
            <Menus
              key={menu.title}
              title={menu.title}
              path={menu.path}
              isInternal={menu.isInternal}
              isSelected={router.pathname === menu.path}
            />
          ))}
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}
