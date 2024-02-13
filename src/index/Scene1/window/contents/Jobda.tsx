import Banner from "./common/Banner";
import Block from "./common/Block";
import Line from "./common/Line";

const Jobda = () => {

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex flex-col items-center space-y-8">
        <Banner
          imgSrc="ImgJobda.png"
          imgAlt="Jobda"
          title={'구직자 채용 플랫폼 JOBDA'}
          linkEls={[
            <a className="text-blue-500" target="_blank" href="https://www.jobda.im/">
              <p className="italic">사이트 바로 가기</p>
            </a>,
            <a className="text-blue-500" target="_blank" href="https://koreacat.notion.site/JOBDA-3b17b8919b6e4d46bbc3c88bd22a4598">
              <p className="italic">프로젝트 상세 보기</p>
            </a>
          ]}
        />
        <div className="max-w-xl mx-auto">
          <div>
            <h2 className="text-lg font-semibold">주요 업무</h2>
            <Line />
            <Block
              title={'프론트엔드 리드'}
              contents={
                <p className="text-sm">
                  잡다 프론트챕터의 스프린트 관리와 배포를 담당하고 있습니다.
                  <br />
                  프로젝트 세팅 방법, pull request 작성 가이드 등의 프로젝트 운영에 필요한 문서를 작성하고 공유해 신규 입사자와 잡다 프론트 개발 팀원의 온보딩을 돕고 있습니다.
                </p>
              }
            />
            <Line />
            <Block
              title={'잡다 로그인 개발'}
              contents={
                <p className="text-sm">
                  기존 사내 서비스의 jsp 모노리틱 구조에서 벗어나 백엔드와 프론트엔드를 분리시키고 jwt로 로그인을 구현하였습니다.
                </p>
              }
            />
            <Line />
            <Block
              title={'잡다 채팅 서비스 개발'}
              contents={
                <p className="text-sm">
                  talk plus 외부 api를 이용해 채팅 서비스를 개발하였습니다. api 한 번 당 100개의 channel data만 가져올 수 있어 전체 채팅 목록을 가져오려면 waterfall로 조회할 수밖에 없어 로딩이 아주 길고 비용이 많이 드는 문제가 있었으나 기획자분과 협의해 한번 불러온 전체 채팅 목록을 로컬스토리지에 저장하고 하루에 한번 갱신 시키는 정책으로 문제를 일부 개선할 수 있었습니다.
                </p>
              }
            />
            <Line />
            <Block
              title={'잡다 콘텐츠 개발'}
              contents={
                <p className="text-sm">
                  잡다 플랫폼 내 메인페이지, 결과표, 소개페이지 등 콘텐츠를 퍼블리싱하고 개발하고 있습니다.
                </p>
              }
            />
            <Line />
            <Block
              title={'SEO 최적화 작업'}
              contents={
                <p className="text-sm">
                  구직자들이 검색해서 서비스를 이용할 수 있도록 채용 공고와 기업 정보 페이지를 SSR 처리하고 동적으로 생성되는 페이지들의 sitemap을 등록하여 크롤러가 페이지를 발견하기 쉽게 하였습니다. 이외에도 모바일 사이트로 리다이렉트 되어 크롤링이 되지 않는 문제를 해결하고 api 서버의 robots.txt의 내용을 수정해 soft 404 문제를 해결하는 등의 작업을 진행하였습니다.
                  <br />
                  <br />
                  지표 추적 결과 (23년 11월 ~  24년 2월)
                  <br />
                  개선 전 : 색인 수 71개, 총 노출 수 23.2만
                  <br />
                  개선 후 : 색인 수 4,289개, 총 노출 수 33.8만
                  <br />
                  결과 : 색인 수 약 5944% 증가, 총 노출 수 약 45% 증가
                  <br />
                  <br />
                  B2C 채용 사이트 특성상 채용 시즌(9월 ~ 10월)과 이벤트에 영향을 많이 받아 클릭 수와 평균 CTR 수치는 증가하지 않았지만 채용 비시즌(11월~2월)임을 고려한다면 페이지 노출에 있어 유의미한 상승을 이끌어 냈다고 생각할 수 있으며 다음 채용 시즌이 돌아왔을 때 증가한 페이지 색인과 노출 수가 전체 서비스에 긍정적인 영향을 줄 수 있을 것으로 예상하고 있습니다.
                </p>
              }
            />
            <Line />
            <Block
              title={'아키텍쳐 개선 작업'}
              contents={
                <p className="text-sm">
                  기존의 클라이언트 상태와 서버 상태가 섞여 있던 mobx 스토어를 제거하고 전역 상태와 클라이언트 상태, 서버 상태를 확실히 구분 짓고 커스텀 훅으로 재사용할 수 있도록 아키텍처를 개선시켜 개발 생산성을 증가시켰습니다.
                </p>
              }
            />
            <Line />
            <Block
              title={'디자인 시스템 개발'}
              contents={
                <p className="text-sm">
                  잡다 모바일과 함께 사용할 수 있는 디자인 시스템을 개발하며 운영 중입니다. 모노레포로 구성되어 있으며 jds-pc, jds-mo, jds-common으로  이루어져 있습니다.
                </p>
              }
            />
            <Line />
            <Block
              title={'최적화 작업'}
              contents={
                <p className="text-sm">
                  LCP지표 개선 - 이미지 사이즈를 줄일 수 있는 webp 포멧을 사용해서 사이즈 압축시켜 리소스를 받아오는 시간을 감소시켰습니다.
                  <br />
                  CLS 지표 개선 - 컨텐츠 로딩전 스켈레톤 출력으로 layout shift 현상을 완화하고 고정된 사이즈의 이미지는 next Image를 사용해서 사이즈를 지정해주었습니다.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Jobda;