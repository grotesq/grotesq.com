import React from "react";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";

const title = "양업고등학교 - 그로테스큐 스튜디오 || Studio GrotesQ";
const metaDescription =
  "그누보드 기반의 양업고등학교 웹사이트를 Modern PHP 에서 동작하도록 튜닝했습니다.";
const ogTitle = "양업고등학교 - 그로테스큐 스튜디오 || Studio GrotesQ";
const ogUrl = "https://www.grotesq.com/works/yangeob/";
const ogImage =
  "https://www.grotesq.com/assets/images/works/thumbnail/yangeob.jpg";
const ogImageWidth = 1000;
const ogImageHeight = 500;
const ogDescription =
  "그누보드 기반의 양업고등학교 웹사이트를 Modern PHP 에서 동작하도록 튜닝했습니다.";

export default () => (
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
            alt: ogTitle
          }
        ],
        site_name: "그로테스큐 스튜디오 || Studio GrotesQ"
      }}
    />
    <div className="gq-section gq-section--dark">
      <h1>
        <span>양업고등학교</span>
      </h1>

      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/yangeob/yangeob-1.png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">양업고등학교의 사이트 리뉴얼을 진행했습니다.</p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <h2>
          <span>GOAL</span>
        </h2>
        <ul>
          <li>디자인 개선</li>
          <li>
            반응형 <small>Responsive</small> 웹으로 개편
          </li>
          <li>형상 관리 시스템 도입</li>
          <li>서버 내 PHP 버전 업그레이드 (5.2 to 7.2)</li>
          <li>그누보드 메이저 버전 업그레이드 (4 to 5)</li>
          <li>개발 생산성 향상을 위한 도구의 도입</li>
        </ul>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <h2>
          <span>형상 관리 시스템 도입</span>
        </h2>

        <p>
          여러 작업자들이 동시에 작업을 진행하게 되므로 우선 형상관리 시스템부터
          도입했습니다.
          <br />
          형상 관리 도구는 <code>git</code>을 사용하기로 하고, 저장소는{" "}
          <code>github</code>를 이용하기로 했습니다.
        </p>

        <p>
          그누보드는 <code>/data</code> 디렉토리 안에 캐시, 세션, 사용자 파일 등
          모든 내용들이 저장되는 구조입니다.
          <br />
          따라서 <code>.gitignore</code>에 <code>/data</code>를 등록하고{" "}
          <code>/data</code>안의 내용은 각각의 작업자들이 <code>curl</code>을
          통해서 내려받도록 스크립트를 만들어 처리했습니다.
          <br />
          개발 환경별로 달라지는 설정값들은 <code>dotenv</code> 패키지를 통해
          관리하고, 그누보드의 설정 파일에서 <code>dotenv</code>를 참조하도록
          합니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <h2>
          <span>서버 내 PHP 버전 업그레이드 (5.2 to 7.2)</span>
        </h2>

        <p>
          서버에서 사용하는 PHP 5.2는 지원이 종료된 버전이므로, 당시 최신 버전인
          7.2로 마이그레이션을 진행했습니다.
          <br />
          PHP는 7버전대에서 많은 속도 향상이 있었고, 7.2에서는 페이스북의
          HHVM보다도 빨라지는 속도 향상이 있었습니다.
        </p>

        <p>
          그누보드 4에는 PHP 7.x 에서 동작하지 않는 코드가 많습니다.
          <br />
          이 부분을 해결하기 위해 로컬 환경에는 도커를 도입했습니다.
          <br />
          동일 소스를 도커를 통해서는 PHP 5.4로, 발렛을 통해서는 PHP 7.2로
          비교대조하며 오류를 잡아나갔습니다.
        </p>

        <p>
          최신 PHP 에서는 숏태그가 기본 비활성이며 코드의 품질 및 관리면에서도
          사용하지 않는 것이 좋으므로 <code>&lt;?</code> 태그와{" "}
          <code>&lt;?=</code> 태그를 모두 <code>&lt;?php</code> 태그와{" "}
          <code>&lt;?php echo</code> 태그로 대체했습니다.
          <br />
          <code>mysql_*</code> 함수들도 더 이상 지원되지 않으므로{" "}
          <code>mysqli_*</code> 함수와 <code>PDO</code> 함수로 대체했습니다.
        </p>

        <p>
          Composer를 도입해 <code>dotenv</code>, <code>var-dumper</code>,{" "}
          <code>mobiledetect</code> 등의 의존성 패키지들을 사용하고, 헬퍼
          함수들의 오토로드를 처리했습니다.
        </p>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <h2>
          <span>그누보드 마이그레이션</span>
        </h2>

        <p>그누보드는 개발자들에게는 애증의 프로그램입니다.</p>
        <p>
          훌륭한 CMS로 웹의 대중화에 공헌한 바가 크지만, 개발 철학이나 관리
          측면에서 현대적인 개발하고는 거리를 두고 있는 프로그램이기도 합니다.
          <br />
          최근에는 그누보드를 다른 프레임워크 기반으로 이전해달라는 요청들이
          많이 있었습니다.
          <br />
          이번 프로젝트에서도 다른 프레임워크로의 이전에 대한 부분까지
          검토했지만, 기간과 견적의 문제로 최신 그누보드로 마이그레이션 하는
          정도로 진행하게 되었습니다.
        </p>
        <p>
          데이터베이스는 그누보드에서 기본으로 제공하는 마이그레이션 기능을
          이용해 이전할 수 있습니다.
          <br />
          다만 코드의 경우 단순 덮어쓰기로 불가능한 부분들이 있는데,
        </p>
        <p>
          <code>$g4[path]</code>를 사용하는 부분은 <code>app_path()</code>라는
          이름의 헬퍼 함수를 이용하도록 변경합니다.
          <br />
          string이 아닌 참조 방식은 deprecated 되었기 때문에, 겸사겸사{" "}
          <code>app_path()</code>, <code>data_path()</code> 등의 헬퍼 함수로
          경로를 사용하도록 대체했습니다. 라라벨 헬퍼에서 차용해온 방식입니다.
          <br />
          헬퍼 함수를 사용하지 않는 부분이라도 <code>$member[mb_datetime]</code>
          로 된 부분을 <code>$member['mb_datetime']</code>로 변경이 필요합니다.
          <br />
          이런 부분들은 프로젝트 전반에 있으므로,{" "}
          <code>\$(\w+)\[([a-zA-Z]\w+)\]</code> 정규식으로 탐색해 하나씩 변경을
          해줘야 합니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <h2>
          <span>SCSS, ES6, Parcel</span>
        </h2>

        <p>
          스타일 시트 규칙은 BEM을 따르고, SCSS로 작성했습니다.
          <br />
          스크립트 작업은 ES6로 작업했습니다.
          <br />
          SCSS와 ES6의 번들링은 파셀<small>Parcel</small>을 사용했습니다. 파셀은
          Zero Configuration을 지향하는 만큼 빠르게 도입해 사용할 수 있는 장점이
          있습니다.
          <br />
          파셀은 번들링 된 결과물이 항상 해시로 반환되므로, 파셀이 빌드한 파일을
          PHP에서 include 하여 파싱해 사용하도록 연동했습니다.
        </p>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <h2>
          <span>Demo</span>
        </h2>

        <ul>
          <li>
            <a href="https://yangeob-static.grotesq.com" target="_blank">
              [완성 시점의 사이트 아카이빙]
            </a>
            <br />> 완성된 시점의 디자인 및 반응형 퍼블리싱에 대한 내용은
            이쪽에서 확인하실 수 있습니다.
          </li>
          <li>
            <a href="https://yangeob.hs.kr" target="_blank">
              [현재 사이트]
            </a>
            <br />> 현재는 인수인계되어 저희가 유지보수 하고 있지는 않습니다만,
            그누보드의 튜닝된 내용을 확인하시려면 운영중인 사이트에서 확인하시는
            것이 가장 좋습니다.
          </li>
        </ul>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <h2>
          <span>Technical Summary</span>
        </h2>

        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Backend</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>GNUBoard</li>
                  <li>MySQL</li>
                  <li>Composer</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Frontend</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>BEM SCSS</li>
                  <li>ES6</li>
                  <li>Parcel</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">etc</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>SSL Certification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
