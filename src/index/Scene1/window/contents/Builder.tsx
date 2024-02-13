import Banner from "./common/Banner";
import Block from "./common/Block";
import Line from "./common/Line";

const Builder = () => {

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex flex-col items-center space-y-8">
        <Banner
          imgSrc="ImgBuilder.png"
          imgAlt="Builder"
          title={'채용 사이트 빌더'}
          siteHref={'https://recruit.jobda.im/features/attract/builder'}
          detailHref={'https://koreacat.notion.site/b9d3720a1bd2421b9bc14f5090f5dd1d'}
        />
        <div className="max-w-xl mx-auto">
          <div>
            <h2 className="text-lg font-semibold">주요 업무</h2>
            <Line />
            <Block
              title={'채용사이트 빌더 개발'}
              contents={
                <p className="text-sm">
                  빌더 컴포넌트 CRUD 기능 개발 작업
                  <br />
                  이미지 크롭 등 컴포넌트 모듈 개발
                </p>
              }
            />
            <Line />
            <Block
              title={'정규화를 통한 전역 상태 최적화'}
              contents={
                <p className="text-sm">
                  초기에는 DOM 트리와 유사한 계층 구조의 전역 상태로 아키텍처를 설계했습니다. 개발을 진행할 수록 전역 상태에서 관리할 값들이 많아졌고 객체 간의 참조로 인해 하나의 요소를 CRUD 조작할 시에도 전체가 리렌더되어 사용성과 성능에 문제가 생겼습니다. 이를 해결하기 위해 계층 구조의 전역 상태를 id를 통해 참조할 수 있는 선형 구조로 정규화 시켰고 하위 요소의 CRUD  조작에도 다른 컴포넌트가 영향을 받지 않도록 최적화하였습니다.               </p>
              }
            />
            <Line />
            <Block
              title={'채용사이트 뷰 모듈 개발'}
              contents={
                <p className="text-sm">
                  채용 사이트와 빌더의 미리보기에 쓰이는 공통 뷰 모듈을 개발해 재사용성을 높이고 뷰에 생기는 이슈를 공통적으로 처리할 수 있게 하였습니다.
                  <br />
                  채용사이트와 빌더에서 재사용 가능한 공통 컴포넌트를 개발하여 개발 생산성을 증가시켰습니다.
                  <br />
                  채용 사이트의 특성 상 검색을 통해 유입되는 사용자가 많아 SSR을 적용 시키고 SEO를 최적화시켜 사용자들이 접근하기 쉽게 하였습니다.
                  <br />
                  PC 뿐만 아니라 모바일 사용자들도 쉽게 유입될 수 있도록 모바일, 테블릿, PC를 모두 지원하는 반응형 UI로 개발했습니다.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Builder;