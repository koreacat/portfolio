const Profile = () => {

  return (
    <div>
      <div>
        <img src={'/ImgProfile.png'} />
        <div>
          ### 👋 안녕하세요!
          동료와 경험을 나누며
          성장의 기쁨을 함께하는 개발자 지경민 입니다.
        </div>

        <div>
          CAREER (2019.08 ~ 2024.02) 총 4년 6개월
        </div>
        <hr />
        <div>
          ### MIDAS IN

          `Front-end`

          2020.02 ~
        </div>
        <div>
          구직자 채용 플랫폼 JOBDA (2020.02 ~)
          `B2C, 회원 수 70만명, MAU 30만 명`

          - JOBDA 로그인, 프로필, 채팅, 결과표, 컨텐츠 페이지 개발
          - 채용공고, 기업정보 SEO 최적화로 페이지 노출 수 2배 이상 증가
          - React query 도입으로 서버 상태 분리와 아키텍처 개선
          - Mobx → Zustand 마이그레이션으로 전역 상태 아키텍처 개선
          - 디자인 시스템 도입으로 개발 생산성 증가
          - LCP, CLS 최적화로 사용자 경험 향상

          `nextjs` `react` `react-query` `zustand` `typescript`
        </div>

        <hr />

        <div>
          인사담당자용 생성용 AI 서비스 MOLLM (2023.08 ~ 2023.10)
          `B2B, Generative AI`

          - 채팅  페이지 개발
          - chatGPT stream 처리로 사용자 경험 향상
          - 반응형 UI 개발로 다양한 디바이스 지원

          `nextjs` `react` `react-query` `typescript` `zustand`
        </div>

        <hr />

        <div>
          채용 사이트 빌더 (2023.01 ~ 2023.03)
          `B2B, 100+ 고객사, 기업 채용, 브랜딩`

          - 채용 사이트 빌더, 채용 사이트 개발
          - 모노레포 구조 도입으로 기능 분리와 재사용성 향상
          - 정규화를 통한 전역 상태 최적화로 렌더링 성능 개선
          - 채용 사이트 반응형 UI 개발로 모바일 뷰 지원

          `nextjs` `react` `react-query` `recoil` `typescript`
        </div>

        <hr />

        <div>
          ### MIDAS IT

          `Front-end`

          2019.08 ~ 2020.02
        </div>

        <div>
          `B2B, 공채 채용 솔루션`

          - JOBFLEX 개발, 유지보수
          - aws chime sdk를 활용한  화상 면접 솔루션 개발

          `jquery` `react` `mobx`
        </div>

        <div>
          EDUCATION
        </div>

        <div>
          `수료`
          `최우수상 수상`
          SSAFY 1기 (SW 역량 향상 교육)
        </div>

        <div>
          `학점 4.0/4.5`
          `정보처리기사`
          국립안동대학교 컴퓨터공학과
        </div>

      </div>
    </div>
  )
}

export default Profile;