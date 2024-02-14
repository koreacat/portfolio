import Banner from "./common/Banner";
import Block from "./common/Block";
import Line from "./common/Line";

const Jobflex = () => {

  return (
    <div className="mx-auto max-w-4xl py-8">
      <div className="flex flex-col items-center space-y-8">
        <Banner
          imgSrc="ImgJobflex.png"
          imgAlt="Jobflex"
          title={'SaaS 채용 솔루션 JOBFLEX'}
          siteHref={'https://www.jobflex.com/'}
          detailHref={'https://koreacat.notion.site/JOBFLEX-4b0b6bd7ad2242cd90368ce5b6693edd'}
        />

        <div className="mx-auto max-w-xl">
          <div>
            <h2 className="text-lg font-semibold">주요 업무</h2>
            <Line />
            <Block
              title={'JOBFLEX 유지보수'}
              contents={
                <p className="text-sm">
                  프론트엔드 신입으로 입사하여 유지보수를 하고, 핫픽스 이슈를 처리하며 제품에 대한 도메인을 익힐 수 있었습니다.
                </p>
              }
            />
            <Line />
            <Block
              title={'aws chime sdk를 활용한 화상 면접 솔루션 개발'}
              contents={
                <p className="text-sm">
                  코로나 19로 인해 대면 면접에 어려움이 생겨 채용 전용으로 개발된 화상 면접 솔루션입니다.
                  면접관과 면접자의 화면이 다르고 면접 대기실 등의  차별적인 기능을 가지고 있습니다.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobflex;