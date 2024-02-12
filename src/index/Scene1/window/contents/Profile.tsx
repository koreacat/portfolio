const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex flex-col items-center space-y-8">
        <img
          src="/ImgProfile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full"
        />

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">👋 안녕하세요!</h2>
          <p>
            동료와 경험을 나누며
          </p>
          <p>
            성장의 기쁨을 함께하는
          </p>
          <p>
            개발자 지경민입니다.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div>
            <h2 className="text-lg font-semibold">CAREER (2019.08 ~ 2024.02)</h2>

            <hr className="my-4" />

            <div className="mb-4">
              <h3 className="text-lg font-semibold">구직자 채용 플랫폼 JOBDA</h3>
              <p>2020.02 ~</p>
              <p className="italic">B2C, 회원 수 70만명, MAU 30만 명</p>
              <p className="text-sm">
                - JOBDA 로그인, 프로필, 채팅, 결과표, 컨텐츠 페이지 개발<br />
                - 채용공고, 기업정보 SEO 최적화로 페이지 노출 수 2배 이상 증가<br />
                - React query 도입으로 서버 상태 분리와 아키텍처 개선<br />
                - Mobx → Zustand 마이그레이션으로 전역 상태 아키텍처 개선<br />
                - 디자인 시스템 도입으로 개발 생산성 증가<br />
                - LCP, CLS 최적화로 사용자 경험 향상<br />
              </p>
            </div>

            <hr className="my-4" />

            <div className="mb-4">
              <h3 className="text-lg font-semibold">인사담당자용 생성용 AI 서비스 MOLLM</h3>
              <p>2023.08 ~ 2023.10</p>
              <p className="italic">B2B, Generative AI</p>
              <p className="text-sm">
                - 채팅 페이지 개발<br />
                - chatGPT stream 처리로 사용자 경험 향상<br />
                - 반응형 UI 개발로 다양한 디바이스 지원<br />
              </p>
            </div>

            <hr className="my-4" />

            <div className="mb-4">
              <h3 className="text-lg font-semibold">채용 사이트 빌더</h3>
              <p>2023.01 ~ 2023.03</p>
              <p className="italic">B2B, 100+ 고객사, 기업 채용, 브랜딩</p>
              <p className="text-sm">
                - 채용 사이트 빌더, 채용 사이트 개발<br />
                - 모노레포 구조 도입으로 기능 분리와 재사용성 향상<br />
                - 정규화를 통한 전역 상태 최적화로 렌더링 성능 개선<br />
                - 채용 사이트 반응형 UI 개발로 모바일 뷰 지원<br />
              </p>
            </div>

            <hr className="my-4" />

            <div className="mb-4">
              <h3 className="text-lg font-semibold">SaaS 채용 솔루션 JOBFLEX</h3>
              <p>2019.08 ~ 2020.02</p>
              <p className="italic">B2B, 공채 채용 솔루션</p>
              <p className="text-sm">
                - JOBFLEX 개발, 유지보수<br />
                - aws chime sdk를 활용한 화상 면접 솔루션 개발<br />
              </p>
            </div>

            <hr className="my-4" />
          </div>

          <div>
            <h2 className="text-lg font-semibold">EDUCATION</h2>
            <hr className="my-4" />
            <p className="italic">SSAFY 1기 (SW 역량 향상 교육)</p>
            <p className="italic">국립안동대학교 컴퓨터공학과</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;