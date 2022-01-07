import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logo from '../../public/assets/logo/logo.png';
import BtnMobileMenu from '../../public/assets/images/btn_mobile-menu.svg';

const HeaderWrapper = styled.header`
  background: #e5e5e5;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 375px;
`;

const NavWrapper = styled.nav`
   ul {
     display: flex;
     font-size: 18px;
     li {
       padding-left: 45px;
     }
   }
`
const MobileNav = styled.nav`

`

export default function Header() {
  return (
    <HeaderWrapper className="px-5 sm:px-40">
      <div>
        <Link href="/">
          <a>
            <Image src={logo} alt="grtesq studio 그로테스큐 스튜디오" width={185} height={30} layout="fixed"></Image>
          </a>
        </Link>
      </div>
      <div>
        <button type="button" className="flex sm:hidden">
          <BtnMobileMenu />
        </button>
      </div>
      <NavWrapper className="hidden sm:flex">
        <ul>
          <li>
            <a href="/">Works</a>
          </li>
          <li>
            <a href="/">Recruit</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </NavWrapper>
    </HeaderWrapper>
  );
}
