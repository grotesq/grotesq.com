import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import logo from '../../public/assets/image/logo/logo.png';
import BtnMobileMenu from '../../public/assets/icon/btn_mobile-menu.svg';
import BtnMobileClose from '../../public/assets/icon/btn_mobile-close.svg';
import { motion, AnimatePresence } from 'framer-motion';
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
  height: 6.25rem;
  min-width: 23.437rem;
  font-weight: 300;
  @media ${(props) => props.theme.mediaQueryMax('sm')} {
    height: 3.75rem
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
    font-size: 1.125rem;
    li {
      padding-left: 2.8125rem;
      a:hover {
        ${activeStyle}
      }
      .selected {
        ${activeStyle}
      }
    }
  }
`;
const MobileNavContainer = styled(motion.nav)`
  background: white;
  height: 100%;
  padding-left: 1.875rem;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;
  width: 15.625rem;
  a:hover {
    ${activeStyle}
  }
  li {
    padding-bottom: 1.875rem;
  }
`;
const MobileNavCloseBtn = styled.button`
  padding-bottom: 1.1875rem;
  padding-right: 1.375rem;
  padding-top: 1.375rem;
`;
const MobileNavBackground = styled(motion.div)`
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
    <motion.li>
      {isInternal ? (
        <Link href={path}>
          <a className={isSelected ? 'selected' : ''}>{title}</a>
        </Link>
      ) : (
        <a href={path} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      )}
    </motion.li>
  );
}

export default function Header() {
  const router = useRouter();
  const [isMobileNavOpened, setIsMobileNavOpened] = useState<boolean>(false);
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
                sizes="185 123"
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
      <AnimatePresence>
        {isMobileNavOpened && (
          <MobileNavBackground>
            <MobileNavContainer
              className="sm:hidden"
              key="drawer"
              initial={{ x: '100%' }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '100%',
              }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            >
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
          </MobileNavBackground>
        )}
      </AnimatePresence>
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
