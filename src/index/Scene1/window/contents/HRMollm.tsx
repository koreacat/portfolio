const HRMollm = () => {

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex flex-col items-center space-y-8">
        <img
          src="ImgMollm.png"
          alt="ImgMollm"
          className="h-32 object-cover"
        />

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">인사담당자용 생성용 AI 서비스 MOLLM</h2>
          <br />
          <a className="text-blue-500" target="_blank" href="https://mollm.hlab.im/?email=jgm0531@midasin.com">
            <p className="italic">사이트 바로 가기</p>
          </a>

          <a className="text-blue-500" target="_blank" href="https://koreacat.notion.site/HR-MOLLM-087458043fde483ea8684b870d9412a9">
            <p className="italic">프로젝트 상세 보기</p>
          </a>
        </div>

        <div className="max-w-xl mx-auto">
          <div>
            <h2 className="text-lg font-semibold">주요 업무</h2>

            <hr className="my-4" />

            <div className="mb-4">
              <h3 className="text-lg font-semibold">채팅 페이지 개발</h3>
              <p className="text-sm">
                퍼블리싱 및 기능 개발
                <br />
                기존 서비스(hlab)의 연관성이 적어 프로젝트를 분리 시켰고,  iframe을 통해 런타임 통합했습니다.
              </p>
            </div>

            <hr className="my-4" />

            <div className="mb-4">
              <h3 className="text-lg font-semibold">gpt api 연동 및 stream 데이터 처리</h3>
              <p className="text-sm">
                실시간 stream 데이터 처리를 통해 사용자 경험 향상
                처음에는 일반적인 post 방식으로 답변을 처리해 3~10초 정도의 긴 로딩 시간을 기다리고 답변을 받을 수 있어 사용성이 많이 떨어졌습니다. fetch api의 steam 방식으로 개선해 실시간으로 데이터를 받아와 화면에 출력해주는 방식으로 변경해 로딩을 기다리는 시간을 3초 이내로 최소화하고, 실제로 대화하는 듯한 느낌의 사용자 경험을 제공할 수 있었습니다.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HRMollm;