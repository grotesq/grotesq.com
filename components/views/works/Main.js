import React from 'react';
import Layout from '../../Layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const title = 'Our Works - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription = '그로테스큐 스튜디오에서 진행한 프로젝트 목록';
const ogTitle = 'Our Works - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/works';
const ogImage = 'https://www.grotesq.com/assets/images/social.png';
const ogImageWidth = 1200;
const ogImageHeight = 1200;
const ogDescription = '그로테스큐 스튜디오에서 진행한 프로젝트 목록';

export default () => {
  return (
    <Layout>
      <NextSeo
        title={title}
        description={metaDescription}
        openGraph={{
          url: ogUrl,
          title: ogTitle,
          description: ogDescription,
          images: [
            {
              url: ogImage,
              width: ogImageWidth,
              height: ogImageHeight,
              alt: ogTitle,
            },
          ],
          site_name: '그로테스큐 스튜디오 || Studio GrotesQ',
        }}
      />
      <div
        className="gq-section gq-section--dark"
        style={{ minHeight: '100vh' }}
      >
        <h1>
          <span>Our Works</span>
        </h1>

        <div className="container">
          <ul className="list-unstyled row gq-works">
            <li className="col-sm-6 col-md-4">
              <div className="gq-works__list-item">
                <Link href="/works/welaaa-app-v2">
                  <a>
                    <div className="gq-works__thumbnail">
                      <img src="/assets/images/works/thumbnail/welaaa-app-v2.png" />
                    </div>
                    <div className="gq-works__contents">
                      <div className="gq-works__title">
                        스마트 러닝 서비스 윌라 2.0 리뉴얼
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
            <li className="col-sm-6 col-md-4">
              <div className="gq-works__list-item">
                <Link href="/works/welaaa-web">
                  <a>
                    <div className="gq-works__thumbnail">
                      <img src="/assets/images/works/thumbnail/welaaa-web.png" />
                    </div>
                    <div className="gq-works__contents">
                      <div className="gq-works__title">
                        스마트 러닝 윌라 웹 서비스
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
            {/*<li className="col-sm-6 col-md-4">*/}
            {/*  <div className="gq-works__list-item">*/}
            {/*    <Link href="/works/big-hit-global-audition">*/}
            {/*      <a>*/}
            {/*        <div className="gq-works__thumbnail">*/}
            {/*          <img src="/assets/images/works/big-hit-global-audition/bighit-user-1.png" />*/}
            {/*        </div>*/}
            {/*        <div className="gq-works__contents">*/}
            {/*          <div className="gq-works__title">*/}
            {/*            빅히트 글로벌 오디션 시스템*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*      </a>*/}
            {/*    </Link>*/}
            {/*  </div>*/}
            {/*</li>*/}
            <li className="col-sm-6 col-md-4">
              <div className="gq-works__list-item">
                <Link href="/works/light-wall-in-folly">
                  <a>
                    <div className="gq-works__thumbnail">
                      <img src="https://img.youtube.com/vi/Rh1QAW_7z2I/maxresdefault.jpg" />
                    </div>
                    <div className="gq-works__contents">
                      <div className="gq-works__title">Light Wall in Folly</div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
            <li className="col-sm-6 col-md-4">
              <div className="gq-works__list-item">
                <Link href="/works/yangeob">
                  <a>
                    <div className="gq-works__thumbnail">
                      <img src="/assets/images/works/thumbnail/yangeob.jpg" />
                    </div>
                    <div className="gq-works__contents">
                      <div className="gq-works__title">양업고등학교</div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
            <li className="col-sm-6 col-md-4">
              <div className="gq-works__list-item">
                <Link href="/works/series-eight">
                  <a>
                    <div className="gq-works__thumbnail">
                      <img src="/assets/images/works/thumbnail/series-eight.png" />
                    </div>
                    <div className="gq-works__contents">
                      <div className="gq-works__title">Series Eight</div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
            <li className="col-sm-6 col-md-4">
              <div className="gq-works__list-item">
                <Link href="/works/sim-su-hoi">
                  <a>
                    <div className="gq-works__thumbnail">
                      <img src="/assets/images/works/sim-su-hoi/sim-su-hoi-cover.jpg" />
                    </div>
                    <div className="gq-works__contents">
                      <div className="gq-works__title">심수회전</div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
            <li className="col-sm-6 col-md-4">
              <div className="gq-works__list-item">
                <Link href="/works/zimcar">
                  <a>
                    <div className="gq-works__thumbnail">
                      <img src="/assets/images/works/thumbnail/zimcar.png" />
                    </div>
                    <div className="gq-works__contents">
                      <div className="gq-works__title">이사 말고 짐카</div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
            <li className="col-sm-6 col-md-4">
              <div className="gq-works__list-item">
                <Link href="/works/hooroorook">
                  <a>
                    <div className="gq-works__thumbnail">
                      <img src="/assets/images/works/thumbnail/hooroorook.png" />
                    </div>
                    <div className="gq-works__contents">
                      <div className="gq-works__title">
                        아이유의 후루룩 칼국수
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
