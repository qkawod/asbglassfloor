"use client";

import React, { use, useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import GalleryCarousel from "@/components/ui/GalleryCarousel";

const projectData: Record<string, any> = {
    "NBA-AS24-LED-Court-Collage": {
        title: "NBA All-Star 2024",
        category: "LumiFlex",
        location: "Indianapolis, USA",
        year: "2024",
        image: "/asb-glassfloor-nba-as24-led-court-celebrity-2-scaled.webp",
        video: "/NBA/NBA UNVEILS STATE-OF-THE-ART LED COURT FOR ALL-STAR 2024 EVENTS TAKING PLACE AT LUCAS OIL STADIUM.mp4",
        contentVideo: "/NBA/NBA_SlamDunk_2024.mov",
        about: `
            ASB GlassFloor는 NBA All-Star 2024를 통해 꿈의 무대인 NBA에 첫 선을 보이며 강렬한 파급력을 증명했습니다. Lucas Oil Stadium을 가득 메운 35,000명의 관중 앞에서, 당사의 디지털 코트는 Ruffles NBA All-Star Celebrity Game과 State Farm® All-Star Saturday Night의 핵심 무대로 채택되었습니다. 이 혁신적인 솔루션은 선수들에게는 최상의 퍼포먼스 환경을, 팬들에게는 잊을 수 없는 시각적 감동을 선사했습니다.
        `,
        aboutProject: [
            "NBA는 리그의 역사와 권위를 지키기 위해 그 어떤 단체보다 신중하고 보수적인 태도를 고수해 왔습니다. 특히 선수들의 안전과 최고의 경기력에 직결된 '코트'는 단순한 경기장을 넘어, 수십 년간 타협할 수 없는 성역과도 같은 영역이었습니다. 변화보다는 안정을, 파격보다는 검증된 전통을 택해 온 이유입니다.",
            "그러나 시대의 흐름 앞에서는 세계 최고의 리그도 변화를 선택해야 했습니다. 관중의 기대 수준이 높아짐에 따라 NBA는 오랜 관성을 깨는 과감한 결단을 내렸습니다. 금기시될 만큼 까다롭고 엄격했던 검증 과정 끝에, 그들이 기존의 나무 코트를 대체할 파트너로 지목한 유일한 대안은 바로 ASB GlassFloor였습니다.",
            "이 파격적인 도입은 단순한 퍼포먼스가 아닙니다. '가장 엄격한 기준조차 만족시킨 압도적 기술력'에 대한 증명입니다. ASB GlassFloor는 NBA의 전통과 미래를 잇는 가교로서, 스포츠 엔터테인먼트가 보여줄 수 있는 한계 없는 가능성을 전 세계에 입증했습니다."
        ],
        gallery: [
            "/NBA/NBA_Slide_0.jpg.webp",
            "/NBA/NBA_Slide_2.png",
            "/NBA/NBA_Slide_1.webp",
            "/NBA/NBA_Slide_4.webp",
            "/NBA/NBA_Slide_3.webp",
            "/NBA/NBA_Slide_6.webp",
            "/NBA/NBA-AS24-LED-Court-Skills-2.png",
            "/NBA/NBA_Slide_5.webp",
            "/NBA/csm_02152024_All-Star-Saturday-Night-Dunk__NBA__1__227983caf9.webp"
        ],
        glassCourtOS: null,
        nextProject: null
    },
    "FIBA-U19-Womens-World-Cup": {
        title: "FIBA U19 Women’s World Cup",
        category: "LumiFlex",
        location: "Madrid, Spain",
        year: "2023",
        image: "/FIBA U19 Women’s World Cup/SCS3391-scaled.jpg.webp",
        video: null, // No specific hero video found, fallback to image
        contentVideo: "/FIBA U19 Women’s World Cup/FIBA unveils innovative world-premiere ASB GlassFloor court.mkv",
        about: `
            마드리드 FIBA U19 여자 농구 월드컵은 스포츠 기술과 경기 연출의 획기적인 전환점이었습니다. 100년 넘게 이어진 목재 코트의 한계를 넘어, 8강전부터 적용된 ASB LumiFlex는 차세대 스포츠 코트의 기준을 새롭게 정립했습니다. 오랜 기간 축적된 R&D와 까다로운 국제 인증을 통해 완성된 이 혁신적인 솔루션은, 실제 경기에서 선수들에게 최고의 퍼포먼스를 제공하며 기술적 우수성을 완벽하게 입증했습니다.
        `,
        aboutProject: [
            "ASB GlassFloor 공식 런칭 현장에서 안드레아스 자글리스(Andreas Zagklis) FIBA 사무총장은 이 스포츠 바닥재 혁신의 순간을 다음과 같이 기념했습니다.",
            "\"오늘은 FIBA에게 매우 자랑스러운 날입니다. 1891년 제임스 네이스미스 박사가 농구를 창시한 이래, 농구는 성역과도 같은 목재 코트 위에서 펼쳐져 왔습니다. 그 전통을 넘어 새로운 도전을 하는 것은 결코 쉬운 일이 아니었습니다. 하지만 오늘 이 순간은 ASB라는 기업의 역사를 넘어, 농구 스포츠의 역사를 바꾼 기념비적인 날이 될 것입니다.\"",
            "이어서 호르헤 가르바호사(Jorge Garbajosa) FIBA 유럽 회장 또한 이 시스템이 가져올 미래형 체육관 솔루션으로서의 가치를 높이 평가했습니다.",
            "\"농구가 변하고 있음을 느낍니다. 이번 대회를 기점으로 실내 스포츠의 풍경은 완전히 달라질 것입니다. 머지않아 각종 국제 대회와 국가대표 대항전들이 이 매력적인 유리 코트 위에서 펼쳐지며, 차세대 스포츠 환경의 표준이 될 것이라 확신합니다.\""
        ],
        gallery: [
            "/FIBA U19 Women’s World Cup/FIBA U19 Women’s World Cup_?.jpg",
            "/FIBA U19 Women’s World Cup/FIBA U19 Women’s World Cup_1.jpg",
            "/FIBA U19 Women’s World Cup/FIBA U19 Women’s World Cup_2.jpg",
            "/FIBA U19 Women’s World Cup/asb-glassfloor-source-fiba-media-43.jpg.webp"
        ],
        glassCourtOS: null,
        nextProject: null
    },
    "BallsportARENA-Dresden": {
        title: "BallsportARENA Dresden",
        category: "MultiSports",
        location: "Dresden, Germany",
        year: "2017",
        image: "/Dresden/BallSport ARENA Dresden_04.jpg",
        video: null,
        contentVideo: "/Handball in the Dark  on ASB GlassFloor.mp4",
        about: `
             스포츠 경기장의 혁명: BallsportARENA Dresden

             2017년 5월에 개장한 드레스덴의 BallsportARENA는 프로 및 아마추어 스포츠, 장애인 스포츠, 복싱 및 콘서트와 같은 다양한 행사를 위해 거의 2000m²에 달하는 다목적 공간을 제공하며 다양한 활용성을 보여줍니다.
        `,
        aboutProject: [
            "2017년 5월에 개장한 드레스덴의 BallsportARENA는 Saxony주에서 가장 현대적이고 다목적인 스포츠 시설 중 하나입니다.",
            "이곳은 드레스덴에 프로 핸드볼을 정착시키기 위해 건립되었으며, HC Elbflorenz 팀에게 최상급의 훈련 및 경기 조건을 제공합니다. 또한 아마추어 스포츠, 장애인 스포츠, 그리고 콘서트나 복싱 경기와 같은 다채로운 행사를 위한 공간으로도 활용됩니다.",
            "이 모든 것은 시설의 핵심 요소인 다기능 ASB GlassFloor 덕분에 가능합니다. 이 플로어 시스템은 BallsportARENA의 컨셉에 완벽하게 부합하며, 서로 다른 이벤트 간의 신속한 전환을 보장합니다.",
            "이러한 특징 덕분에 BallsportARENA는 콘서트, 컨퍼런스 및 기업 행사에 이상적인 장소가 되었으며, 지역의 스포츠 및 문화 행사에 대한 새로운 기준을 제시하고 있습니다."
        ],
        gallery: [
            "/Dresden/20690303_1039972409439437_3075886819015665266_o-c797e3e6.jpg",
            "/Dresden/BallSport ARENA Dresden_01.jpg",
            "/Dresden/BallSport ARENA Dresden_07.jpg",
            "/Dresden/BallSport ARENA Dresden_08.jpg",
            "/Dresden/BallSport ARENA Dresden_10.jpg",
            "/Dresden/BallSport ARENA Dresden_11.jpg"
        ],
        glassCourtOS: null,
        nextProject: null
    },
    "OYM-College": {
        title: "OYM College",
        category: "MultiSports",
        location: "Cham, Switzerland",
        year: "2020",
        image: "/OYM/OYM_swiss.jpg",
        video: null,
        contentVideo: "/OYM/OYM Die neue Welt des Spitzensports 2-1.mp4",
        about: "OYM(On Your Marks)은 세계 최고의 선수들을 위한 스마트체육관으로서, 선수들이 경기력 향상에만 집중할 수 있도록 최적의 종합 훈련 기회를 제공하는 ASB GlassFloor의 MultiSports를 도입하여 데이터 기반의 최첨단 훈련 환경을 구현했습니다.",
        aboutProject: [
            "스위스 캄(Cham)에 위치한 최첨단 스포츠 센터 OYM(On Your Marks)의 건립은 스포츠계의 중요한 이정표입니다. 스위스 스포츠를 재정의한다는 비전 아래, OYM은 선수들에게 완벽한 훈련 조건을 제공하고자 핵심 요소인 스포츠 바닥재로 ASB GlassFloor를 선택했습니다.",
            "탁월한 유리 기술로 유명한 ASB GlassFloor는 기술적으로 진보하고 지속 가능한 MultiSports 바닥 시스템을 제공합니다. 이 최첨단 시스템은 간단한 터치만으로 공간을 다양한 스포츠 경기장으로 변신시켜 라인 혼선을 해결하며, OYM을 진정한 스마트체육관으로 구현했습니다.",
            "이번 OYM 프로젝트는 스포츠 시설의 새로운 기준을 제시하는 동시에, 지속 가능한 스포츠 바닥재 혁신 분야에서 ASB GlassFloor의 선도적 입지를 공고히 했습니다. OYM과의 협력은 ASB GlassFloor의 여정에 빛나는 이정표가 될 것입니다."
        ],
        gallery: [
            "/OYM/Landingpage_PS-OYM-Bild01.jpg.webp",
            "/OYM/oym2cregine-giesecke.jpg",
            "/OYM/oym-entrance-area.jpg",
            "/OYM/OYM_swiss.jpg",
            "/OYM/OYM____.jpeg"
        ],
        glassCourtOS: null,
        nextProject: null
    },
    "The-Graph": {
        title: "The Graph",
        category: "LumiFlex",
        location: "Future City",
        year: "2024",
        image: "/BMW Park_5.jpg",
        video: null,
        contentVideo: null,
        about: "The Graph는 미래지향적인 디자인과 ASB GlassFloor의 기술이 결합된 컨셉 프로젝트입니다.",
        aboutProject: ["미래 도시의 스포츠 환경을 재정의하는 프로젝트입니다."],
        gallery: [],
        glassCourtOS: null,
        nextProject: null
    },
    "Show-Court": {
        title: "Show Court",
        category: "Mobile",
        location: "Various",
        year: "2024",
        image: "/BMW Park_1.jpg",
        video: null,
        contentVideo: null,
        about: "ASB Show Court는 이동 가능한 글래스 플로어로, 어떤 장소에서든 최고의 스포츠 이벤트를 가능하게 합니다.",
        aboutProject: ["이동성과 설치 편의성을 극대화한 솔루션입니다."],
        gallery: [],
        glassCourtOS: null,
        nextProject: null
    },
    "FC-Bayern-Munich": {
        title: "FC Bayern Munich",
        category: "MultiSports",
        location: "Munich, Germany",
        year: "2024",
        image: "/BMW/BMW Park_2.jpeg",
        video: null,
        contentVideo: "/BMW/Buckets.mp4",
        about: "뮌헨 BMW 파크에서 열린 FC 바이에른과 바이센펠스의 경기에서 6,500명의 관중은 수준 높은 농구 경기와 함께 ASB LumiFlex 풀 LED 비디오 플로어가 제공하는 엔터테인먼트를 경험했습니다. 2024년 가을 영구 설치된 이 ASB GlassFloor는 현재 경기장에 상시 운영되고 있습니다.",
        aboutProject: [
            "혁신은 열망과 협력, 그리고 미래를 내다보는 통찰력에서 시작됩니다. ASB GlassFloor가 ASB LumiFlex를 개발해온 과정도 이와 같습니다.",
            "우리는 실내 스포츠 바닥재의 패러다임을 바꾸면서도 최상의 안전성과 활용성을 보장하겠다는 명확한 비전으로 출발했습니다. 기술의 발전과 스포츠 정신에서 영감을 받아, 기존 스포츠 바닥재가 가진 가능성의 한계를 넘어서고자 노력했습니다.",
            "FC 바이에른 농구단 및 BMW 뮌헨과의 파트너십은 각자의 강점을 결합하여 혁신을 이끌어낸 이상적인 협력 사례입니다. 우리는 함께 목표를 공유하고 여러 과제를 해결해 나가며, ASB LumiFlex가 완성될 때까지 끊임없이 제품의 완성도를 높였습니다.",
            "ASB LumiFlex는 단순한 제품을 넘어 스포츠의 미래를 향한 우리의 노력을 상징합니다. 이는 전통적인 스포츠의 가치와 최상의 성능, 그리고 첨단 기술이 조화를 이룬 결과물입니다."
        ],
        gallery: [
            "/BMW/BMW Park_1.jpeg",

            "/BMW/BMW Park_8.jpeg",
            "/BMW/BMW Park_9.jpg",
            "/BMW/BMW Park_7.webp"
        ],
        glassCourtOS: null,
        nextProject: null
    },

    "University-of-Kentucky": {
        title: "University of Kentucky",
        category: "LumiFlex",
        location: "Lexington, USA",
        year: "2023",
        image: "/Kentucky_BBM/Kenturky BBM_1.jpeg",
        video: null,
        contentVideo: "/Kentucky_BBM/KentuckyMBB_main_1.mp4",
        about: "2024년 10월, 켄터키 대학교(University of Kentucky)의 '빅 블루 매드니스(Big Blue Madness)'는 ASB GlassFloor를 도입한 최초의 NCAA(전미대학체육협회) 행사로 역사에 남게 되었습니다. ASB GlassFloor의 혁신적인 표면 처리 기술은 럽 아레나(Rupp Arena)를 스마트체육관으로 탈바꿈시켜 와일드캣츠(Wildcats)팀의 시즌 개막 축하 행사를 완전히 새로운 차원의 경험으로 승화시켰습니다.",
        aboutProject: [
            "2024년 10월, 켄터키 대학교(University of Kentucky)의 '빅 블루 매드니스(Big Blue Madness)'는 ASB GlassFloor를 도입한 최초의 NCAA(전미대학체육협회) 행사로 역사에 남게 되었습니다. ASB GlassFloor의 혁신적인 표면 처리 기술은 럽 아레나(Rupp Arena)를 스마트체육관으로 탈바꿈시켜 와일드캣츠(Wildcats)팀의 시즌 개막 축하 행사를 완전히 새로운 차원의 경험으로 승화시켰습니다.",
            "ASB GlassFloor의 인터랙티브 플로어는 팀 로고, 선수 기록, 생동감 넘치는 그래픽을 디스플레이하며 역동적인 분위기를 조성했습니다. 선수 소개 시 애니메이션 비주얼을 더해 열기를 고조시켰으며, 지역 예술가 와일리 코딜(Wylie Caudill)의 커스텀 아트워크와 미식축구장 디자인까지 구현하며 새로운 차원의 즐거움을 선사했습니다.",
            "ASB GlassFloor 기술은 실시간 콘텐츠, 소셜 미디어 피드, 경기 내 광고를 코트 바닥에 직접 통합함으로써 대학 스포츠를 한 단계 도약시킬 수 있는 잠재력을 입증했습니다. ASB GlassFloor의 크리스토프 바빈스키(Christof Babinsky)는 “빅 블루 매드니스는 우리 기술의 엄청난 영향력을 입증했습니다. 이 기술이 코치들에게는 훌륭한 도구를, 팬들에게는 비교할 수 없는 새로운 경험을 제공한다는 것을 확인했습니다”라고 평가했습니다.",
            "이번 행사의 성공은 ASB GlassFloor 기술이 팬 상호작용과 선수 육성 환경을 개선하고, 대학이 지역 사회와 소통하는 새로운 방안을 제시했음을 보여줍니다. 이는 코트 안팎에서 전통과 혁신이 만나는 대학 스포츠의 새로운 시대가 시작되었음을 알리는 중요한 계기입니다."
        ],
        gallery: [
            "/Kentucky_BBM/Kenturky BBM_3.jpg.webp",
            "/Kentucky_BBM/Kenturky BBM_5.jpeg",
            "/Kentucky_BBM/Kenturky BBM_6.webp",
            "/Kentucky_BBM/Kenturky BBM_4.jpg.webp"
        ],
        glassCourtOS: null,
        nextProject: null
    },

    "Oxford-University": {
        title: "Oxford University",
        category: "MultiSports",
        location: "Oxford, UK",
        year: "2018",
        image: "/University of oxford/asb_referenzen_oxford_03.jpg",
        video: null,
        contentVideo: "/University of oxford/Multi sports flooring LED marking lines_Oxford.mp4",
        about: "옥스퍼드 대학교, 스포츠 인프라의 혁신을 선도하다\n\n12세기부터 이어져 온 유서 깊은 전통을 자랑하는 옥스퍼드 대학교는 언제나 혁신을 선도하며 독보적인 위상을 지켜왔습니다. 최고의 가치를 향해 끊임없이 정진해 온 옥스퍼드의 철학은 이번 스포츠 시설 리노베이션 프로젝트에서도 고스란히 드러납니다.\n\n이번 대규모 리뉴얼의 핵심은 옥스퍼드 출신 올림픽 메달리스트 에이서 네더코트의 이름을 딴 최첨단 실내 스포츠 센터에 ASB GlassFloor의 멀티스포츠 시스템을 전격 도입한 것입니다. 이러한 과감한 변화는 혁신적인 유리 바닥 시스템의 잠재력을 알아본 옥스퍼드 대학교 스포츠국장 존 로이크로프트의 주도로 이루어졌습니다.\n\n이 시스템은 뛰어난 내구성과 쉬운 유지관리는 물론, LED 마킹 라인을 자유자재로 변경할 수 있는 독보적인 기능을 갖췄습니다. 덕분에 종목에 따라 경기장 라인을 즉각적으로 교체할 수 있어, 다목적 스포츠 시설의 패러다임을 바꾼 게임 체인저로 평가받습니다. 옥스퍼드 대학교는 새로운 바닥 시스템을 통해 전통과 혁신의 조화를 다시 한번 증명하며, 선수와 학생은 물론 모든 방문객에게 한 차원 높은 스포츠 경험을 선사하고 있습니다.",
        aboutProject: [
            "12세기부터 이어져 온 유서 깊은 전통을 자랑하는 옥스퍼드 대학교는 언제나 혁신을 선도하며 독보적인 위상을 지켜왔습니다. 최고의 가치를 향해 끊임없이 정진해 온 옥스퍼드의 철학은 이번 스포츠 시설 리노베이션 프로젝트에서도 고스란히 드러납니다.",
            "이번 대규모 리뉴얼의 핵심은 옥스퍼드 출신 올림픽 메달리스트 에이서 네더코트의 이름을 딴 최첨단 실내 스포츠 센터에 ASB GlassFloor의 멀티스포츠 시스템을 전격 도입한 것입니다. 이러한 과감한 변화는 혁신적인 유리 바닥 시스템의 잠재력을 알아본 옥스퍼드 대학교 스포츠국장 존 로이크로프트의 주도로 이루어졌습니다.",
            "이 시스템은 뛰어난 내구성과 쉬운 유지관리는 물론, LED 마킹 라인을 자유자재로 변경할 수 있는 독보적인 기능을 갖췄습니다. 덕분에 종목에 따라 경기장 라인을 즉각적으로 교체할 수 있어, 다목적 스포츠 시설의 패러다임을 바꾼 게임 체인저로 평가받습니다. 옥스퍼드 대학교는 새로운 바닥 시스템을 통해 전통과 혁신의 조화를 다시 한번 증명하며, 선수와 학생은 물론 모든 방문객에게 한 차원 높은 스포츠 경험을 선사하고 있습니다."
        ],
        gallery: [
            "/University of oxford/Oxford_1.jpg",
            "/University of oxford/University of oxford_02.jpg",
            "/University of oxford/University of oxford_07.jpg",
            "/University of oxford/asb_referenzen_oxford_03.jpg",
            "/University of oxford/HIGH29073_908678.jpg"
        ],
        glassCourtOS: null,
        nextProject: null
    },
    "OAKA-Arena": {
        title: "OAKA Arena",
        category: "LumiFlex",
        location: "Athens, Greece",
        year: "2024",
        image: "/OAKA/asb-glassfloor-bcl-final-four-2024-03.jpg.webp",
        video: null,
        contentVideo: "/OAKA/Panathinaikos BC Aktor.mp4",
        about: "Panathinaikos BC Aktor가 그리스 아테네 OAKA Arena에 혁신적인 ASB GlassFloor를 도입하며 농구 경기의 새로운 장을 열었습니다 . 유로리그 역사상 처음으로 ASB LumiFlex에서 공식 경기를 치른 이번 시도는 단순한 이벤트를 넘어 영구적인 시설 구축으로 이어졌습니다. 첨단 기술과 스포츠의 정수가 결합된 이 공간은 선수들에게 최상의 퍼포먼스를 보장하며, 관객들에게는 시각적 한계를 뛰어넘는 압도적인 몰입감을 선사합니다.",
        aboutProject: ["Panathinaikos BC Aktor가 그리스 아테네 OAKA Arena에 혁신적인 ASB GlassFloor를 도입하며 농구 경기의 새로운 장을 열었습니다 . 유로리그 역사상 처음으로 ASB LumiFlex에서 공식 경기를 치른 이번 시도는 단순한 이벤트를 넘어 영구적인 시설 구축으로 이어졌습니다. 첨단 기술과 스포츠의 정수가 결합된 이 공간은 선수들에게 최상의 퍼포먼스를 보장하며, 관객들에게는 시각적 한계를 뛰어넘는 압도적인 몰입감을 선사합니다."],
        gallery: [
            "/OAKA/OAKA_1.jpeg",
            "/OAKA/asb-glassfloor-euroleagues-most-advanced-court-arrives.webp",
            "/OAKA/OAKA_2.jpeg",
            "/OAKA/OAKA_3.webp"
        ],
        glassCourtOS: null,
        nextProject: null
    },
    "Private-Estate-London": {
        title: "Private Estate, London",
        category: "MultiSports",
        location: "London, UK",
        year: "2022",
        image: "/London/London1.jpeg",
        video: null,
        contentVideo: null,
        about: "런던의 한 개인 저택에 설치된 ASB MultiSports의 모습입니다. 현대적인 감각의 신축 시설과 완벽하게 조화를 이루는 이 스포츠 플로어는 시선을 사로잡는 독보적인 미감을 선사합니다.\n\n은은한 녹색 빛의 유리 바닥은 시설의 순백색 천장과 세련된 대비를 이룹니다. 630㎡ 규모의 코트에서는 테니스, 농구, 넷볼, 배드민턴, 풋살 등 다섯 가지 종목을 맞춤형으로 이용할 수 있습니다.\n\nASB GlassFloor는 고객의 프라이버시를 무엇보다 소중히 여깁니다. 당사는 철저한 보안과 비밀 유지를 원칙으로 삼아 모든 고객이 안심하고 프로젝트를 진행할 수 있도록 최선을 다합니다. 세계적인 스포츠 스타와 유명 인사를 포함한 수많은 VIP 고객들과 협업해 온 풍부한 경험은 보안 유지와 전문적인 업무 수행에 대한 당사의 확고한 약속을 증명합니다. 고객이 국제적인 선수이든 프라이빗한 환경을 원하는 개인이든, ASB GlassFloor는 사생활을 완벽히 보호하는 동시에 최상의 제품과 서비스를 제공할 것입니다.",
        aboutProject: [
            "런던의 한 개인 저택에 설치된 ASB MultiSports의 모습입니다. 현대적인 감각의 신축 시설과 완벽하게 조화를 이루는 이 스포츠 플로어는 시선을 사로잡는 독보적인 미감을 선사합니다.",
            "은은한 녹색 빛의 유리 바닥은 시설의 순백색 천장과 세련된 대비를 이룹니다. 630㎡ 규모의 코트에서는 테니스, 농구, 넷볼, 배드민턴, 풋살 등 다섯 가지 종목을 맞춤형으로 이용할 수 있습니다.",
            "ASB GlassFloor는 고객의 프라이버시를 무엇보다 소중히 여깁니다. 당사는 철저한 보안과 비밀 유지를 원칙으로 삼아 모든 고객이 안심하고 프로젝트를 진행할 수 있도록 최선을 다합니다. 세계적인 스포츠 스타와 유명 인사를 포함한 수많은 VIP 고객들과 협업해 온 풍부한 경험은 보안 유지와 전문적인 업무 수행에 대한 당사의 확고한 약속을 증명합니다. 고객이 국제적인 선수이든 프라이빗한 환경을 원하는 개인이든, ASB GlassFloor는 사생활을 완벽히 보호하는 동시에 최상의 제품과 서비스를 제공할 것입니다."
        ],
        gallery: [
            "/London/London1.jpeg",
            "/London/London2.jpeg",
            "/London/London3.jpeg",
            "/London/London4.jpeg"
        ],
        glassCourtOS: null,
        nextProject: null
    }
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function ReferenceDetailPage({ params }: PageProps) {
    const { slug } = use(params);
    const project = projectData[slug];

    const [isHeroMuted, setIsHeroMuted] = useState(true);
    const [isContentMuted, setIsContentMuted] = useState(true);

    // Animation Refs
    const heroImageRef = useRef<HTMLImageElement>(null);
    const heroTextRef = useRef<HTMLDivElement>(null);
    const heroOverlayRef = useRef<HTMLDivElement>(null);
    const scannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. Strong Image Entry (Scale Down + Fade In)
            if (heroImageRef.current) {
                tl.fromTo(heroImageRef.current,
                    { scale: 1.3, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 2.5,
                        ease: "power3.out"
                    }
                );
            }
            // 2. Overlay Fade In
            if (heroOverlayRef.current) {
                tl.fromTo(heroOverlayRef.current,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1.5,
                        ease: "power2.out"
                    },
                    "-=2.0"
                );
            }
            // 3. Strong Text Stagger (Slide Up + Fade In)
            if (heroTextRef.current) {
                const textElements = gsap.utils.toArray(heroTextRef.current.children);
                tl.fromTo(textElements,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        stagger: 0.15,
                        ease: "power4.out"
                    },
                    "-=1.5"
                );
            }

            // LED Scanner Loop Animation
            if (scannerRef.current) {
                gsap.fromTo(scannerRef.current,
                    { x: "-100%" },
                    {
                        x: "100%",
                        duration: 2,
                        repeat: -1,
                        ease: "linear"
                    }
                );
            }

        });

        return () => ctx.revert();
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-deepBlack text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/references" className="text-neonCyan hover:underline">
                    Back to References
                </Link>
            </div>
        );
    }

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <main className="min-h-screen bg-deepBlack text-white selection:bg-neonCyan selection:text-black">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <div ref={heroImageRef} className="absolute inset-0 w-full h-full">
                    {project.video ? (
                        <video
                            src={project.video}
                            autoPlay
                            loop
                            muted={isHeroMuted}
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                </div>

                <div ref={heroOverlayRef} className="absolute inset-0 z-10 opacity-0">
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-transparent to-transparent" />
                </div>



                <div ref={heroTextRef} className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-5xl z-20">
                    <span className="inline-block px-3 py-1 mb-4 text-sm font-bold uppercase tracking-widest text-neonCyan border border-neonCyan/30 rounded-full bg-black/50 backdrop-blur-sm opacity-0">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 leading-none opacity-0">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-8 text-lg md:text-xl text-gray-300 font-light opacity-0">
                        <span className="flex items-center gap-2">
                            📍 {project.location}
                        </span>
                        <span className="flex items-center gap-2">
                            📅 {project.year}
                        </span>
                    </div>

                    <div
                        onClick={scrollToContent}
                        className="cursor-pointer inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group mt-10 opacity-0"
                    >
                        <div className="p-3 rounded-full border border-white/20 group-hover:border-white transition-colors">
                            <ArrowDown className="w-6 h-6 animate-bounce" />
                        </div>
                        <span className="text-sm uppercase tracking-[0.3em]">Discover</span>
                    </div>

                </div>

                {/* Hero Video Mute Toggle */}
                {project.video && (
                    <button
                        onClick={() => setIsHeroMuted(!isHeroMuted)}
                        className="absolute bottom-8 right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-black/70 transition-all duration-300 border border-white/20 group cursor-pointer"
                    >
                        {isHeroMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        <span className="text-sm font-medium tracking-wide">{isHeroMuted ? "UNMUTE" : "MUTE"}</span>
                    </button>
                )}
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 md:px-20 container mx-auto max-w-6xl flex flex-col items-center">

                {/* Main Video */}
                <div className="w-[120%] -ml-[10%] aspect-video mb-16 relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
                    {(project.contentVideo || project.video) ? (
                        <video
                            src={project.contentVideo || project.video}
                            autoPlay
                            loop
                            muted={isContentMuted}
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full relative">
                            <Image
                                src={project.image}
                                alt="Main content"
                                fill
                                className="object-cover"
                            />
                            {/* Optional: Add a play button overlay if it's just an image to look like a paused video? No, just image is fine. */}
                        </div>
                    )}

                    {/* Content Video Mute Toggle */}
                    {(project.contentVideo || project.video) && (
                        <button
                            onClick={() => setIsContentMuted(!isContentMuted)}
                            className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all duration-300 border border-white/20 group"
                        >
                            {isContentMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            <span className="text-xs font-bold tracking-widest uppercase">
                                {isContentMuted ? "UNMUTE" : "MUTE"}
                            </span>
                        </button>
                    )}
                </div>

                {/* Divider Line (LED Style) */}
                <div className="relative h-[0.9px] w-72 mb-16 bg-[var(--color-led-line)]/30 rounded-full shadow-[0_0_15px_var(--color-led-line)] overflow-hidden">
                    <div ref={scannerRef} className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent" />
                </div>

                {/* Centered Text Content */}
                <div className="max-w-4xl text-center space-y-12">
                    {/* About Section */}
                    <div>
                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
                            {project.about}
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                {project.gallery && project.gallery.length > 0 && (
                    <div className="w-[120%] -ml-[10%] mb-16 mt-48 relative">
                        <GalleryCarousel images={project.gallery} />
                    </div>
                )}

                {/* About the Project Section */}
                {project.aboutProject && (
                    <div className="w-[120%] -ml-[10%] mt-24">
                        <div className="flex flex-col md:flex-row gap-32 md:gap-64">
                            {/* Left Column: Title */}
                            <div className="flex-shrink-0">
                                <h2 className="text-4xl md:text-5xl font-light text-white mb-8">About the Project</h2>
                                <div className="h-px w-24 bg-gray-500"></div>
                            </div>

                            {/* Right Column: Text & Button */}
                            <div className="flex-grow space-y-8 text-gray-100 leading-relaxed text-lg">
                                {project.aboutProject.map((paragraph: string, idx: number) => (
                                    <p key={idx}>
                                        {paragraph}
                                    </p>
                                ))}

                                <div className="pt-8">
                                    <Link href="/contact" className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm tracking-[0.2em] hover:bg-gray-200 transition-colors">
                                        MAKE AN INQUIRY
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


            </section>
        </main >
    );
}
