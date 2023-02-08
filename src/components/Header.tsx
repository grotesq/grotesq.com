import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import logo from '../../public/assets/image/logo/logo.png';
import BtnMobileMenu from '../../public/assets/icon/btn_mobile-menu.svg';
import BtnMobileClose from '../../public/assets/icon/btn_mobile-close.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { NavContext } from '../contexts/NavContext';

interface MenuProps {
  title: string;
  path: string;
  isInternal: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  justify-content: space-between;
  height: 6.25rem;
  min-width: 23.437rem;
  font-weight: 300;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.color['white']};
  z-index: 9999;
  box-shadow: 0 1.25rem 1.25rem 0 rgba(0, 0, 0, 0.1);

  @media ${(props) => props.theme.mediaQueryMax('sm')} {
    height: 3.75rem;
    position: fixed;
    z-index: 9999;
    width: 100%;
    background-color: ${(props) => props.theme.color['white']};
    box-shadow: 0 0.625rem 0.625rem 0 rgba(0, 0, 0, 0.1);
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
  background-color: ${(props) => props.theme.color['white']};
  box-shadow: 0 0.625rem 0.625rem 0 rgba(0, 0, 0, 0.1);
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
    .selected {
      ${activeStyle}
    }
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
    path: 'https://grotesq.notion.site/Recruits-GrotesQ-b9a8e7ad1a0a4c048c1c51b86f1404a3',
    isInternal: false,
    isSelected: false,
  },
  {
    title: '프로젝트 문의하기',
    path: '/contact',
    isInternal: true,
    isSelected: false,
  },
];

function Menus({ title, path, isInternal, isSelected, onClick }: MenuProps) {
  return (
    <motion.li>
      {isInternal ? (
        <Link href={path}>
          <a onClick={onClick} className={isSelected ? 'selected' : ''}>
            {title}
          </a>
        </Link>
      ) : (
        <a onClick={onClick} href={path} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      )}
    </motion.li>
  );
}

export default function Header() {
  const router = useRouter();
  const { isNavOpened } = useContext(NavContext);
  const { toggleNavOpened } = useContext(NavContext);

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
        <button type="button" className="flex sm:hidden" onClick={toggleNavOpened} aria-label="open menu">
          <BtnMobileMenu />
        </button>
      </div>
      <AnimatePresence>
        {isNavOpened && (
          <MobileNavBackground onClick={toggleNavOpened}>
            <MobileNavContainer
              // onClick={(e) => e.stopPropagation()}
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
                    <BtnMobileClose onClick={toggleNavOpened} />
                  </MobileNavCloseBtn>
                </li>
                <Menus
                  onClick={toggleNavOpened}
                  title="Home"
                  path="/"
                  isInternal={true}
                  isSelected={router.pathname === '/'}
                />
                {menus.map((menu: MenuProps) => (
                  <Menus
                    onClick={toggleNavOpened}
                    key={menu.title}
                    title={menu.title}
                    path={menu.path}
                    isInternal={menu.isInternal}
                    isSelected={router.pathname === menu.path}
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
