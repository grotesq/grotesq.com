import React from 'react';
import Link from 'next/link';

export default props => {
  return (
    <>
      <nav className="gq-nav navbar fixed-top navbar-expand navbar-dark bg-dark">
        <Link href="/">
          <a className="navbar-brand">
            <img
              src="/assets/images/logo-small.png"
              className="gq-nav__logo-image"
              alt="그로테스큐 스튜디오"
            />
          </a>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/works">
                <a className="nav-link">Works</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:unknown@grotesq.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {props.children}
      <div
        className="text-center p-4"
        style={{ background: '#000', color: '#fff' }}
      >
        그로테스큐 스튜디오 / 대표: 김나람 /{' '}
        <a href="mailto:unknown@grotesq.com">unknown@grotesq.com</a>
        <br />
        Copyright © 2017-2020 GrotesQ, All rights reserved.
      </div>
    </>
  );
};
