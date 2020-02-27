//확진자수와 완치자수
//질병관리본부와 KBS 뉴스 페이지 참고 바랍니다.
//확인사항 1. 일본 크루즈 업데이트 주의 바랍니다.
//확인사항 2. 한국은 완치자 수가 있습니다.
var marker = [
    {
        "Name": "이란",
        "Name_en": "Iran",
        "Name_ch": "伊朗",
        "lat": 35.6970118,
        "lng": 51.2097373,
        "확진자수": 95,
        "사망자수": 16,
        "완치자수": 25,
        "추가날짜": "2/21"
    },{
        "Name": "이집트",
        "Name_en": "Egypt",
        "Name_ch": "埃及",
        "lat": 30.0594838,
        "lng": 31.2234448,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1,
        "추가날짜": "2/16"
    }, {
        "Name": "벨기에",
        "Name_en": "Belgium",
        "Name_ch": "比利时",
        "lat": 50.8550625,
        "lng": 4.3053503,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1,
        "추가날짜": "2/5"
    }, {
        "Name": "스페인",
        "Name_en": "Spain",
        "Name_ch": "西班牙",
        "lat": 40.4378698,
        "lng": -3.8196189,
        "확진자수": 9,
        "사망자수": 0,
        "완치자수": 2,
        "추가날짜": "2/2"
    }, {
        "Name": "스웨덴",
        "Name_en": "Sweden",
        "Name_ch": "瑞典语",
        "lat": 59.3260668,
        "lng": 17.8419725,
        "확진자수": 1,
        "사망자수": 0,
        "추가날짜": "2/2"
    }, {
        "Name": "이탈리아",
        "Name_en": "Italy",
        "Name_ch": "义大利",
        "lat": 41.902782,
        "lng": 12.496366,
        "확진자수": 325,
        "사망자수": 11,
        "완치자수": 2,
        "추가날짜": "2/1"
    }, {
        "Name": "러시아",
        "Name_en": "Russia",
        "Name_ch": "俄罗斯",
        "lat": 55.751244,
        "lng": 37.618423,
        "확진자수": 2,
        "사망자수": 0,
        "완치자수": 2,
        "추가날짜": "2/1"
    }, {
        "Name": "캐나다",
        "Name_en": "Canada",
        "Name_ch": "加拿大",
        "lat": 54.7235693,
        "lng": -113.7164202,
        "확진자수": 11,
        "사망자수": 0,
        "완치자수": 3
    }, {
        "Name": "미국",
        "Name_en": "United States",
        "Name_ch": "美国",
        "lat": 37.2757368,
        "lng": -104.6549972,
        "확진자수": 57,
        "사망자수": 0,
        "완치자수": 6
    }, {
        "Name": "핀란드",
        "Name_en": "Finland",
        "Name_ch": "芬兰",
        "lat": 60.1102086,
        "lng": 24.7378224,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1
    }, {
        "Name": "프랑스",
        "Name_en": "France",
        "Name_ch": "法国",
        "lat": 46.1390503,
        "lng": -2.4346589,
        "확진자수": 14,
        "사망자수": 1,
        "완치자수": 11
    }, {
        "Name": "영국",
        "Name_en": "United Kingdom",
        "Name_ch": "英国",
        "lat": 51.509865,
        "lng": -0.118092,
        "확진자수": 13,
        "사망자수": 0,
        "완치자수": 8,
        "추가날짜": "2/1"
    }, {
        "Name": "네팔",
        "Name_en": "Nepal",
        "Name_ch": "尼泊尔",
        "lat": 28.3838445,
        "lng": 81.8867804,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1
    }, {
        "Name": "마카오",
        "Name_en": "Macau",
        "Name_ch": "澳门",
        "lat": 22.1619078,
        "lng": 113.5351333,
        "확진자수": 10,
        "사망자수": 0,
        "완치자수": 6
    }, {
        "Name": "홍콩",
        "Name_en": "Hong Kong",
        "Name_ch": "香港",
        "lat": 22.3529808,
        "lng": 113.9876162,
        "확진자수": 85,
        "사망자수": 2,
        "완치자수": 18
    }, {
        "Name": "태국",
        "Name_en": "Thailand",
        "Name_ch": "泰国",
        "lat": 13.0110763,
        "lng": 96.9952628,
        "확진자수": 40,
        "사망자수": 0,
        "완치자수": 22
    }, {
        "Name": "호주",
        "Name_en": "Australia",
        "Name_ch": "澳大利亚",
        "lat": -24.9936027,
        "lng": 115.2351577,
        "확진자수": 22,
        "사망자수": 0,
        "완치자수": 15
    }, {
        "Name": "싱가포르",
        "Name_en": "Singapore",
        "Name_ch": "新加坡",
        "lat": 1.3143394,
        "lng": 103.7041659,
        "확진자수": 91,
        "사망자수": 0,
        "완치자수": 58
    }, {
        "Name": "레바논",
        "Name_en": "Lebanese Republic",
        "Name_ch": "黎巴嫩",
        "lat": 33.8869444,
        "lng": 35.5130556,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/23"
    }, {
        "Name": "이스라엘",
        "Name_en": "Israel",
        "Name_ch": "以色列",
        "lat": 31.4117257,
        "lng": 35.0818155,
        "확진자수": 2,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/23"
    },{
        "Name": "말레이시아",
        "Name_en": "Malaysia",
        "Name_ch": "马来西亚",
        "lat": 4.1389178,
        "lng": 105.1226078,
        "확진자수": 22,
        "사망자수": 0,
        "완치자수": 20
    }, {
        "Name": "캄보디아",
        "Name_en": "Cambodia",
        "Name_ch": "柬埔寨",
        "lat": 12.1458696,
        "lng": 103.8594161,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1
    }, {
        "Name": "베트남",
        "Name_en": "Vietnam",
        "Name_ch": "越南",
        "lat": 15.7583637,
        "lng": 101.4157502,
        "확진자수": 16,
        "사망자수": 0,
        "완치자수": 16
    }, {
        "Name": "필리핀",
        "Name_en": "Philippines",
        "Name_ch": "菲律宾",
        "lat": 14.5965787,
        "lng": 120.9444545,
        "확진자수": 3,
        "사망자수": 1,
        "완치자수": 2
    }, {
        "Name": "대만",
        "Name_en": "Taiwan",
        "Name_ch": "台湾",
        "lat": 25.0174719,
        "lng": 121.3662943,
        "확진자수": 32,
        "사망자수": 1,
        "완치자수": 5
    }, {
        "Name": "스리랑카",
        "Name_en": "Sri Lanka",
        "Name_ch": "斯里兰卡",
        "lat": 7.8589214,
        "lng": 79.5850432,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1
    }, {
        "Name": "독일",
        "Name_en": "Germany",
        "Name_ch": "德国",
        "lat": 51.0968735,
        "lng": 5.9694438,
        "확진자수": 18,
        "사망자수": 0,
        "완치자수": 15
    }, {
        "Name": "인도",
        "Name_en": "India",
        "Name_ch": "印度",
        "lat": 28.5274228,
        "lng": 77.1387735,
        "확진자수": 3,
        "사망자수": 0,
        "완치자수": 3
    }, {
        "Name": "아랍에미리트",
        "Name_en": "United Arab Emirates",
        "Name_ch": "阿拉伯联合酋长国",
        "lat": 24.3870789,
        "lng": 54.4185368,
        "확진자수": 13,
        "사망자수": 0,
        "완치자수": 3
    }, {
        "Name": "중국",
        "Name_en": "China",
        "Name_ch": "中国",
        "lat": 39.9385466,
        "lng": 116.117281,
        "확진자수": 78064,
        "사망자수": 2715,
        "완치자수": 29894
    }, {
        "Name": "일본",
        "Name_en": "Japan",
        "Name_ch": "日本",
        "lat": 34.6777642,
        "lng": 135.4160247,
        "확진자수": 171,
        "사망자수": 2,
        "완치자수": 23
    },{
        "Name": "일본크루즈",
        "Name_en": "Japan Cruise ship",
        "Name_ch": "日本 邮轮",
        "lat": 34.6777642,
        "lng": 135.4160247,
        "확진자수": 691,
        "사망자수": 4,
        "완치자수": 10
    },
    {
        "Name": "쿠웨이트",
        "Name_en": "Kuwait",
        "Name_ch": "科威特",
        "lat": 29.376150,
        "lng": 47.977308,
        "확진자수": 12,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/25"
    },
    {
        "Name": "이라크",
        "Name_en": "Iraq",
        "Name_ch": "伊拉克",
        "lat": 33.294967,
        "lng": 44.364783,
        "확진자수": 5,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/25"
    },
    {
        "Name": "바레인",
        "Name_en": "Bahrain",
        "Name_ch": "巴林",
        "lat": 34.561213,
        "lng": 69.210980,
        "확진자수": 26,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/25"
    },
    {
        "Name": "오만",
        "Name_en": "Oman",
        "Name_ch": "阿曼",
        "lat": 23.577151,
        "lng": 58.371409,
        "확진자수": 4,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/25"
    },
    {
        "Name": "오스트리아",
        "Name_en": "Austria",
        "Name_ch": "奥地利",
        "lat": 48.220599,
        "lng": 16.239634,
        "확진자수": 2,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/26"
    },
    {
        "Name": "아프가니스탄",
        "Name_en": "Afghanistan",
        "Name_ch": "阿富汗",
        "lat": 26.225355,
        "lng": 50.580098,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/25"
    },
    {
        "Name": "알제리",
        "Name_en": "Algeria",
        "Name_ch": "阿尔及利亚",
        "lat": 36.722930,
        "lng": 3.0595322,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/26"
    },
    {
        "Name": "크로아티아",
        "Name_en": "Croatia",
        "Name_ch": "克罗地亚",
        "lat": 45.809237,
        "lng": 15.817735,
        "확진자수": 2,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/26"
    },
    {
        "Name": "스위스",
        "Name_en": "Switzerland",
        "Name_ch": "瑞士",
        "lat": 46.945735,
        "lng": 7.3077371,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/26"
    },
    {
        "Name": "브라질",
        "Name_en": "Brazil",
        "Name_ch": "巴西",
        "lat": -15.775082,
        "lng": -48.077963,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 0,
        "추가날짜": "2/26"
    },
    {
        "Name": "한국",
        "Name_en": "Korea, Republic of",
        "Name_ch": "韩国",
        "lat": 37.5456299,
        "lng": 126.9540667,
        "확진자수": 1595,
        "사망자수": 13,
        "격리자수": 1559,
        "완치자수": 24,
        "검사진행": 21097
    },
    {
        "Name": "제주",
        "Name_en": "Jeju",
        "Name_ch": "濟州",
        "lat": 33.50972,
        "lng": 126.52194,
        "확진자수": 2,
        "사망자수": 0,
        "격리자수": 0,
        "완치자수": 0,
        "검사진행": 60
    }
];

// 선차트용 데이터 세계 확진자수, 세계 사망자수, 세계 완치자수
// 세계 확진자수, 세계 사망자수는 질병관리본부 데이터 근거
// 세계 완치자수는 존스 홉킨스 코로나 맵 데이터에 근거
// 존스홉킨스 : https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6
// data : 확진환자
// data2 : 사망
// data3 : 완치자

var marker2 = {
    labels: ["1/24", "1/25", "1/26", "1/27", "1/28", "1/29", "1/30", "1/31", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6","2/7","2/8","2/9", "2/10", "2/11", "2/12", "2/13", "2/14", "2/15", "2/16", "2/17", "2/18", "2/19","2/20", "2/21", "2/22", "2/23", "2/24", "2/25","2/26"],
    data: [845, 1315, 2010, 2794, 4576, 6056, 7812, 9812, 11925, 14550, 17378, 20619, 24524, 28253, 31422, 34929, 37607, 40597, 45228, 45260, 45171, 64420, 67097, 69195, 71673, 73326, 75196, 75710, 76563, 77778, 78346, 78595, 80294, 81467],
    data2: [25, 41, 56, 80, 106, 132, 170, 213, 259, 304, 362, 426, 492, 565, 638, 724, 813, 910, 1016, 1115, 1115, 1382, 1526, 1669, 1775, 1873, 2009, 2124, 2246, 2359, 2456, 2612, 2707, 2766],
    data3: [36, 49, 54, 63, 110, 133, 141, 220, 284, 487, 621, 899, 1100, 1500, 2000, 2600, 3200, 3300, 3957, 4849, 5924, 6982, 8158, 9600, 10892, 12604, 14417, 16195, 18327, 20707, 23377, 25038, 27806, 30199]

}

// 선차트용 데이터
// 바울랩 메일 참고

var 입도객현황 = {
    날짜: ["19년평균", "2/3", "2/4", "2/5", "2/6", "2/8","2/9", "2/10", "2/11", "2/12" , "2/13", "2/16", "2/17", "2/18", "2/19", "2/20", "2/22", "2/23", "2/24", "2/25"],
    내국인: [37150, 19209, 17633, 15873, 17184, 20488, 18959, 19074, 18922, 18720, 24409, 26120, 25105, 27135, 27247, 29316, 23732, 20508, 16379, 14567],
    외국인: [4729, 1866, 1285, 1247, 1280, 1127, 976, 906, 1003, 755, 793 , 769, 639, 453, 623, 815, 762, 613, 524, 598],
    중국인: [2957, 755, 156, 116, 157, 86, 209, 66, 76, 103, 52, 186, 6, 12, 100, 7, 9, 7, 6, 6]
}

// 제주지역선별진료소
var 제주지역선별진료소 = [{
        "이름": "제주대학교병원",
        "lat": "33.4670605",
        "lng": "126.5370226",
        "주소": "제주 제주시 아란13길 15",
        "전화번호": "064-717-1075"
    },
    {
        "이름": "한마음병원",
        "lat": "33.4962918",
        "lng": "126.5374979",
        "주소": "제주 제주시 연신로 52",
        "전화번호": "064-750-9000"
    },
    {
        "이름": "서귀포의료원",
        "lat": "33.254995",
        "lng": "126.5625628",
        "주소": "제주 서귀포시 장수로 47",
        "전화번호": "064-730-3000"
    },
    {
        "이름": "한국병원",
        "lat": "33.5002078",
        "lng": "126.5148722",
        "주소": "제주 제주시 서광로 193",
        "전화번호": "064-750-0000"
    },
    {
        "이름": "제주한라병원",
        "lat": "33.4899863",
        "lng": "126.4829032",
        "주소": "제주 제주시 도령로 65",
        "전화번호": "064-740-5975"
    },
    {
        "이름": "중앙병원",
        "lat": "33.4922645",
        "lng": "126.4685369",
        "주소": "제주 제주시 월랑로 91",
        "전화번호": "064-786-7000"
    },
    {
        "이름": "서귀포열린병원",
        "lat": "33.2544248",
        "lng": "126.5632242",
        "주소": "제주 서귀포시 일주동로 8638",
        "전화번호": "064-762-8001"
    }
];

// 제주지역보건소
var 제주지역보건소 = [
  {
      "이름" : "서귀포보건소",
      "lat" : "33.25347667",
      "lng" : "126.5553602",
      "주소" : "서귀포시 중앙로 101번길 52(서홍동)",
      "전화번호" : "064-760-6000"
  },
  {
      "이름" : "서귀포동부보건소",
      "lat" : "33.27565472",
      "lng" : "126.7033908",
      "주소" : "서귀포시 남원읍 태위로527",
      "전화번호" : "064-760-6100"
  },
  {
      "이름" : "서귀포서부보건소",
      "lat" : "33.25236402",
      "lng" : "126.2431305",
      "주소" : "서귀포시 대정읍 최남단해안로 15길 12",
      "전화번호" : "064-760-6200"
  },
  {
      "이름" : "제주보건소",
      "lat" : "33.49159776",
      "lng" : "126.520239",
      "주소" : "제주시 연삼로 264",
      "전화번호" : "064-728-4010"
  },
  {
      "이름" : "제주동부보건소",
      "lat" : "33.55434823",
      "lng" : "126.751323",
      "주소" : "제주시 구좌읍 김녕로 14길 6",
      "전화번호" : "064-728-1515"
  },
  {
      "이름" : "제주서부보건소",
      "lat" : "33.41208308",
      "lng" : "126.2695288",
      "주소" : "제주시 한림읍 강구로 5",
      "전화번호" : "064-728-1513"
  }
];

// This is a bad way to copy, but for now it will suffice.
// 네이버 지도 API가 로드된 후 marker를 수정하기 때문에 일단 copy를 진행하지만 수정이 필요한 코드입니다.
var _marker = JSON.parse(JSON.stringify(marker));

// 업데이트 일시 데이터
var updateLog = {
  date: "2/27",
  time: "11:45"
};

//KBS 또는 중앙방역대책본부 데이터 참고해주세요.
var 지역별확진자 = [
  55, //서울
  3, //인천
  55, //경기
  1, //세종
  8, //대전
  7, //충남
  3, //전북
  9, //광주
  1, //전남
  6, //강원
  7, //충북
  321, //경북
  1017, //대구
  36, //경남
  6, //울산
  58, //부산
  2, //제주
];
