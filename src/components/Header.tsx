import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import logo from '../../public/assets/image/logo/logo.png';
import BtnMobileMenu from '../../public/assets/icon/btn_mobile-menu.svg';
import BtnMobileClose from '../../public/assets/icon/btn_mobile-close.svg';
import { pxToRem } from '../utils/utils';

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  height: ${pxToRem(100)};
  justify-content: space-between;
  min-width: 300px;
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    height: ${pxToRem(60)};
  }
`;
const NavContainer = styled.nav`
  ul {
    display: flex;
    font-size: ${pxToRem(18)};
    a:hover {
      color: ${({ theme }) => theme.color['primary-blue']};
      text-decoration: underline;
      font-weight: 600;
    }

    li {
      padding-left: ${pxToRem(45)};
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
  width: 250px;
  a:hover {
    color: ${({ theme }) => theme.color['primary-blue']};
    text-decoration: underline;
    font-weight: 600;
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
  background: rgb(26, 28, 35, 0.7);
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
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
  },
];

function Menues({ title, path, isInternal }: Menu) {
  return (
    <li>
      {isInternal ? (
        <Link href={path}>
          <a>{title}</a>
        </Link>
      ) : (
        <a href={path}>{title}</a>
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
      {isMobileNavOpened && (
        <BlackBackground>
          <MobileNavContainer className="sm:hidden">
            <ul>
              <li className="text-right">
                <MobileNavCloseBtn>
                  <BtnMobileClose onClick={toggleMobileNav} />
                </MobileNavCloseBtn>
              </li>
              {menues.map((menu: Menu) => (
                <Menues key={menu.title} title={menu.title} path={menu.path} isInternal={menu.isInternal} />
              ))}
            </ul>
          </MobileNavContainer>
        </BlackBackground>
      )}
      <NavContainer className="hidden sm:flex">
        <ul>
          {menues.map((menu: Menu) => (
            <Menues key={menu.title} title={menu.title} path={menu.path} isInternal={menu.isInternal} />
          ))}
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
}
