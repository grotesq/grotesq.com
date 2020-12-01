import React from 'react';
import Layout from '../../Layout';
import { NextSeo } from 'next-seo';
import Title from '../../ui/Title';

const title = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription = '그로테스큐 스튜디오 개발자 인턴십';
const ogTitle = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/recruit/20-internship';
const ogImage = 'https://www.grotesq.com/assets/images/social.png';
const ogImageWidth = 1200;
const ogImageHeight = 1200;
const ogDescription = '그로테스큐 스튜디오 개발자 인턴십';

export default () => {
  const [fold, setFold] = React.useState(true);
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
      <div className="gq-section">
        <Title>
          <h2 className="font-poiret">Recruit</h2>
        </Title>
        <div className="container">
          <div className="text-center">
            <img
              src="/assets/images/about/about-image.png"
              style={{ maxWidth: '100%', marginBottom: '2rem' }}
              alt="about-image"
            />
          </div>
          <Title textAlign="left">
            <h3 className="font-noto">요약</h3>
          </Title>
          <p>
            그로테스큐에서는 교육을 통한 사회적 기여에 힘쓰고 있습니다.
            <br />
            기업에서 필요한 인재는 기업에서 육성하도록 노력해야 한다는 철학을
            실천하고자, 인턴십을 진행하게 되었습니다.
          </p>
          <Title textAlign="left">
            <h3 className="font-noto">모집 분야 / 지원 자격</h3>
          </Title>
          <p>- 개발자 인턴십</p>

          <p>
            학력 무관합니다.
            <br />
            전공자/비전공자 상관 없습니다.
          </p>
          <Title textAlign="left">
            <h3 className="font-noto">인턴이 되면 어떤 일을 하게 되나요?</h3>
          </Title>
          <p>
            6개월간 회사에서 지정한 교육 과정을 진행하게 됩니다.
            <br />
            <br />
            <strong>[외부 교육 프로그램]</strong>
            <br />
            - POCU
            <br />
            - Fast Campus
            <br />
            - 노마드 코더
            <br />
            - 기타 협의를 통해 결정 후 진행
            <br />
            <br />
            <strong>[내부 교육 프로그램]</strong>
            <br />
            - 사내 스터디 참여
            <br />
            - 토이 프로젝트
            <br />
            <br />
            교육 진행에 들어가는 비용은 모두 회사에서 부담합니다.
            <br />
            일부 보조 업무가 주어질 수는 있으나, 기본적으로 업무 시간의 최소
            90%는 교육으로만 진행됩니다.
            <br />
            <br />
            인턴십 기간 동안에는 소정의 생활비가 지원됩니다.
            <br />
            종료 후 채용을 목적으로 진행되는 인턴십이기 때문에, 최소 재직 기간에
            대한 계약이 포함됩니다.
            <br />
            중도 하차시에는 반환 비용이 발생합니다.
          </p>
          <Title textAlign="left">
            <h3 className="font-noto">채용 절차</h3>
          </Title>
          <ol>
            <li>서류 심사</li>
            <li>인터뷰</li>
            <li>채용</li>
          </ol>
          <Title textAlign="left">
            <h3 className="font-noto">장점</h3>
          </Title>
          <p>
            <strong>
              - 회사에 나오면 돈 쓸 일이 없도록 만들어 저축을 많이 할 수 있도록
              하는 것이 목표
            </strong>
            <br />
            <br />
            - 식대 지급. 식대 제한 없음
            <br />
            - 커피는 사내에서 네스프레소 머신으로 무제한 제공
            <br />
            - 각종 간식 지원. 원하는 종류 신청 가능
            <br />
            - 연봉과 별개로 퇴직금 지급. 소멸 정책 없이 1개월만 근무해도 지급
            <br />
            - 재택 근무 가능. 유연한 휴가 제도
            <br />
            - 서적 구매, 인강 구매 등 교육비 지원
            <br />
            - 창립 후 지금까지 연봉 인상률 10% 유지중
            <br />
            - 연 2회 워크샵. 락 페스티벌 단체 관람, 해외 노마드 워킹 체험 등
            다양한 프로그램으로 진행
            <br />
            <br />
            <strong>- 좋은 회사가 되기 위해 노력중</strong>
            <br />
            <br />
            - 탄력 근무제 시행 (8~12시 사이 출근 후 8시간 근무 + 1시간 식사)
            <br />
            - 정해진 시간만 근무하기
            <br />
            - 생산성 향상 위해 지속적으로 프로세스 개선중
            <br />
            - 인터넷 익스플로러 프로젝트 안하기
            <br />
            <br />
            <strong>- 기타 장점</strong>
            <br />
            <br />- 카카오맵 기준 강남역 4번출구에서 도보 6분거리에 위치
          </p>
          <Title textAlign="left">
            <h3 className="font-noto">지원방법</h3>
          </Title>
          <p>
            - 개인 정보를 최소한으로 담은 이력서
            <br />
            - 인턴십을 마친 후 어떤 개발을 하고 싶은지에 대한 계획서
            <br />
            <br />를{' '}
            <a href="mailto:unknown@grotesq.com">unknown@grotesq.com</a>
            으로 보내주세요.
          </p>
        </div>
      </div>
    </Layout>
  );
};
