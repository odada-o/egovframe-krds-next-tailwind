import React from 'react';

const Header = () => {
    return (
        <>
            {/* 본문 바로가기 영역 */}
            <div id="skip-nav">
                <a href="#container">본문 바로가기</a>
            </div>
            {/* // 본문 바로가기 영역 */}

            {/* 상단 배너영역  */}
            <div id="header-top">
                <div className="toggle-wrap">
                    <div className="toggle-head">
                        <div className="inner">
                            <span className="nuri-txt">이 누리집은 대한민국 공식 전자정부 누리집입니다.</span>
                            <button type="button" className="btn btn-txt ico-arr-down toggle-btn xsm">
                                공식 누리집 확인방법<span className="sr-only">열기</span>
                            </button>
                        </div>
                    </div>
                    <div className="toggle-body">
                        <div className="inner">
                            <dl className="dl nuri">
                                <dt className="dt">공식 누리집 주소 확인하기</dt>
                                <dd className="dd">
                                    go.kr 주소를 사용하는 누리집은 대한민국 정부기관이 관리하는 누리집입니다.
                                    <br className="br" />
                                    이밖에 or.kr 또는 .kr등 다른 도메인 주소를 사용하고 있다면 아래 URL에서 도메인
                                    주소를 확인해 보세요
                                </dd>
                                <dd>
                                    <a href="/search.do" className="btn btn-txt ico-go xsm" target="_blank">
                                        운영중인 공식 누리집보기
                                    </a>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            {/* //상단 배너영역  */}

            {/* 헤더 영역 */}
            <header id="header">
                {/* 헤더 컨텐츠 영역  */}
                <div className="header-in">
                    {/* 헤더 상단 기타메뉴 */}
                    <div className="head-body">
                        <div className="inner">
                            <div className="head-etc">
                                <ul className="etc-ul">
                                    <li className="li">
                                        <a href="#" className="btn btn-txt ico-go xsm" target="_blank">
                                            어린이 정부포털
                                        </a>
                                    </li>
                                    <li className="li">
                                        <div className="krds-drop-wrap">
                                            <button type="button" className="btn btn-txt ico-arr-down xsm drop-btn">
                                                지원
                                            </button>
                                            <div className="drop-menu">
                                                <div className="drop-in">
                                                    <ul className="drop-list">
                                                        <li>
                                                            <a href="#" className="item-link">
                                                                인증센터
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="item-link">
                                                                누리집안내지도
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="li">
                                        <div className="krds-drop-wrap zoom-drop">
                                            <button type="button" className="btn btn-txt ico-arr-down xsm drop-btn">
                                                화면크기
                                            </button>
                                            <div className="drop-menu">
                                                <div className="drop-in">
                                                    <ul className="drop-list">
                                                        <li>
                                                            <a href="#" className="item-link xsm">
                                                                작게
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="item-link sm active">
                                                                보통
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="item-link md">
                                                                조금 크게
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="item-link lg">
                                                                크게
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="item-link xlg">
                                                                가장크게
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="drop-btm-btn">
                                                        <button
                                                            type="button"
                                                            className="btn sm btn-txt ico-reset ico-before"
                                                        >
                                                            초기화
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="li">
                                        <div className="krds-drop-wrap">
                                            <button type="button" className="btn btn-txt ico-arr-down xsm drop-btn">
                                                Language
                                            </button>
                                            <div className="drop-menu">
                                                <div className="drop-in">
                                                    <ul className="drop-list">
                                                        <li>
                                                            <a href="#" className="item-link ico-go" target="_blank">
                                                                한국어
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="item-link ico-go" target="_blank">
                                                                English
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="item-link ico-go" target="_blank">
                                                                中文
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="head-in">
                                <h1 className="logo">
                                    <a href="worksheet.html">
                                        <img
                                            src="../../resources/img/pattern/layout/head_logo.svg"
                                            className="logo-im"
                                            alt="대한민국정부"
                                        />
                                        <img
                                            src="../../resources/img/pattern/layout/head_logo_slogan.svg"
                                            className="logo-slogan"
                                            alt="다시 대한민국! 새로운 국민의 나라"
                                        />
                                    </a>
                                </h1>

                                <div className="right ">
                                    <button
                                        type="button"
                                        className="btn-navi sch"
                                        title="통합검색 레이어"
                                        onClick="common.popupEvent('#popTotalSch');"
                                    >
                                        통합검색
                                    </button>
                                    <button type="button" className="btn-navi login">
                                        로그인
                                    </button>
                                    <button type="button" className="btn-navi join">
                                        회원가입
                                    </button>
                                    <div className="krds-drop-wrap my-drop">
                                        <button type="button" className="btn-navi my drop-btn">
                                            나의 GOV
                                        </button>
                                        <div className="drop-menu">
                                            <div className="drop-in">
                                                <div className="drop-top-info">
                                                    <p className="my-name">홍길동님</p>
                                                    <dl className="my-time">
                                                        <dt>로그아웃까지 남은 시간</dt>
                                                        <dd>
                                                            <span className="time">12:00</span>
                                                            <button type="button" className="btn sm btn-txt">
                                                                시간 연장
                                                            </button>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <ul className="drop-list">
                                                    <li>
                                                        <a href="#" className="item-link">
                                                            나의 GOV 홈
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="item-link">
                                                            나의 신청내역
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="item-link">
                                                            나의 생활정보
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="item-link">
                                                            나의 정보관리
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="drop-btm-btn">
                                                    <button type="button" className="btn sm btn-txt ico-log ico-before">
                                                        로그아웃
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn-navi all" id="m-gnb-open">
                                        전체메뉴
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //헤더 상단 기타메뉴 */}

                    {/* 웹 : 메뉴 영역 */}
                    <nav className="head-gnb">
                        <div className="inner">
                            <ul className="gnb">
                                <li className="li">
                                    <a href="#" className="mn">
                                        민원
                                    </a>
                                    <div className="w-gnb-wrap">
                                        <div className="inner">
                                            <div className="w-gnb-menu">
                                                <div className="menu-wrap">
                                                    <ul className="ul">
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="sm active"
                                                                data-id="w-gnb-sm1-1"
                                                            >
                                                                2depth1
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm1-2">
                                                                2depth2
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm1-3">
                                                                2depth3
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sm ico-go" target="_blank">
                                                                2depth4_외부사이트
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm1-5">
                                                                2depth5
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="submenu-wrap">
                                                    <div className="submenu-in" id="w-gnb-sm1-1">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth1-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in between" id="w-gnb-sm1-2">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth2-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm1-3">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth3-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm1-5">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth5-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="li">
                                    <a href="#" className="mn">
                                        국민참여
                                    </a>
                                    <div className="w-gnb-wrap">
                                        <div className="inner">
                                            <div className="w-gnb-menu">
                                                <div className="menu-wrap">
                                                    <ul className="ul">
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="sm active"
                                                                data-id="w-gnb-sm2-1"
                                                            >
                                                                2depth1
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm2-2">
                                                                2depth2
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm2-3">
                                                                2depth3
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sm ico-go" target="_blank">
                                                                2depth4_외부사이트
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm2-5">
                                                                2depth5
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="submenu-wrap">
                                                    <div className="submenu-in" id="w-gnb-sm2-1">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth1-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm2-2">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth2-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm2-3">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth3-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm2-5">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth5-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="li">
                                    <a href="#" className="mn">
                                        뉴스･소식
                                    </a>
                                    <div className="w-gnb-wrap">
                                        <div className="inner">
                                            <div className="w-gnb-menu">
                                                <div className="menu-wrap">
                                                    <ul className="ul">
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="sm active"
                                                                data-id="w-gnb-sm3-1"
                                                            >
                                                                2depth1
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm3-2">
                                                                2depth2
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm3-3">
                                                                2depth3
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sm ico-go" target="_blank">
                                                                2depth4_외부사이트
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm3-5">
                                                                2depth5
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="submenu-wrap">
                                                    <div className="submenu-in" id="w-gnb-sm3-1">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth1-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm3-2">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth2-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm3-3">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth3-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm3-5">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth5-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="li">
                                    <a href="#" className="mn">
                                        정보공개
                                    </a>
                                    <div className="w-gnb-wrap">
                                        <div className="inner">
                                            <div className="w-gnb-menu">
                                                <div className="menu-wrap">
                                                    <ul className="ul">
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="sm active"
                                                                data-id="w-gnb-sm4-1"
                                                            >
                                                                2depth1
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm4-2">
                                                                2depth2
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm4-3">
                                                                2depth3
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sm ico-go" target="_blank">
                                                                2depth4_외부사이트
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm4-5">
                                                                2depth5
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="submenu-wrap">
                                                    <div className="submenu-in" id="w-gnb-sm4-1">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth1-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm4-2">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth2-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm4-3">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth3-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm4-5">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth5-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="li">
                                    <a href="#" className="mn">
                                        정책자료
                                    </a>
                                    <div className="w-gnb-wrap">
                                        <div className="inner">
                                            <div className="w-gnb-menu">
                                                <div className="menu-wrap">
                                                    <ul className="ul">
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="sm active"
                                                                data-id="w-gnb-sm5-1"
                                                            >
                                                                2depth1
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm5-2">
                                                                2depth2
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm5-3">
                                                                2depth3
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sm ico-go" target="_blank">
                                                                2depth4_외부사이트
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm5-5">
                                                                2depth5
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="submenu-wrap">
                                                    <div className="submenu-in" id="w-gnb-sm5-1">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth1-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm5-2">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth2-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm5-3">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth3-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm5-5">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth5-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="li">
                                    <a href="#" className="mn">
                                        이용안내
                                    </a>
                                    <div className="w-gnb-wrap">
                                        <div className="inner">
                                            <div className="w-gnb-menu">
                                                <div className="menu-wrap">
                                                    <ul className="ul">
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="sm active"
                                                                data-id="w-gnb-sm6-1"
                                                            >
                                                                2depth1
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm6-2">
                                                                2depth2
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm6-3">
                                                                2depth3
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="sm ico-go" target="_blank">
                                                                2depth4_외부사이트
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="sm" data-id="w-gnb-sm6-5">
                                                                2depth5
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="submenu-wrap">
                                                    <div className="submenu-in" id="w-gnb-sm6-1">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth1-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm6-2">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth2-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm6-3">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth3-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="submenu-in" id="w-gnb-sm6-5">
                                                        <div className="sub-in">
                                                            <h3 className="sub-tit">
                                                                <a href="#" className="btn btn-txt ico-arr lg">
                                                                    2depth5-title
                                                                </a>
                                                            </h3>
                                                            <ul className="sub-ul">
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title111</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">3depth-title</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="sub-ban">
                                                            <span className="krds-badge bg1">신규 서비스</span>
                                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                                행정서식 간편이름
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* //웹 : 메뉴 영역 */}
                </div>
                {/* //헤더 컨텐츠 영역  */}

                {/* 모바일 : 전체메뉴 */}
                <div id="m-gnb" className="m-gnb-wrap">
                    <div className="m-gnb-in">
                        <div className="m-gnb-head">
                            <div className="m-gnb-top-etc">
                                <ul className="etc-ul">
                                    <li>
                                        <button type="button" className="btn btn-txt xsm">
                                            화면크기
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-txt xsm">
                                            Language
                                        </button>
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-ico ico-close">
                                    <span className="sr-only">전체메뉴 닫기</span>
                                </button>
                            </div>
                            <div className="m-gnb-login">
                                <a href="#" className="btn-navi navi-row login">
                                    로그인을 해주세요.
                                </a>
                            </div>
                            <div className="etc-menu">
                                <a href="#" className="link">
                                    메뉴명
                                </a>
                                <a href="#" className="link">
                                    메뉴명
                                </a>
                                <a href="#" className="link">
                                    메뉴명
                                </a>
                                <a href="#" className="link">
                                    메뉴명
                                </a>
                            </div>
                            <div className="etc-sch">
                                <div className="sch-input">
                                    <input
                                        type="text"
                                        className="form-control md"
                                        placeholder="찾고자 하는 메뉴명을 입력해 주세요"
                                    />
                                    <button type="button" className="btn btn-ico ico-sch">
                                        <span className="sr-only">검색</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="m-gnb-body">
                            <div className="m-gnb-menu">
                                <div className="menu-wrap">
                                    <ul className="ul">
                                        <li>
                                            <a href="#mGnb-anchor1" className="mn">
                                                MyGOV
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#mGnb-anchor2" className="mn">
                                                민원서비스
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#mGnb-anchor3" className="mn">
                                                보조금24
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#mGnb-anchor4" className="mn">
                                                정책정보
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#mGnb-anchor5" className="mn">
                                                고객센터
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="submenu-wrap">
                                    <div className="dl" id="mGnb-anchor1">
                                        <dl>
                                            <dt className="dt">MyGOV</dt>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    MyGOV 홈
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    나의 신청내역
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    나의 생활정보
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    나의 정보관리
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="dl" id="mGnb-anchor2">
                                        <dl>
                                            <dt className="dt">민원서비스</dt>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    민원 신청·안내
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    사실/진위 확인
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    원스톱 서비스
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    분야별 서비스
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    기업/단체 서비스
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    돌봄시설 등 위치 찾기
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="dl" id="mGnb-anchor3">
                                        <dl>
                                            <dt className="dt">보조금24</dt>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    보조금24 홈
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    나의 혜택
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    간편 찾기
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    전체 혜택
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    보조금24란
                                                </a>
                                                <ul className="sub-ul">
                                                    <li>
                                                        <a href="#" className="subm is-depth4">
                                                            소개(4depth)
                                                        </a>
                                                        <div className="depth4-wrap">
                                                            <div className="depth4-head">
                                                                <button type="button" className="btn btn-ico ico-prev">
                                                                    <span className="sr-only">이전화면</span>
                                                                </button>
                                                                <button type="button" className="btn btn-ico ico-close">
                                                                    <span className="sr-only">전체메뉴 닫기</span>
                                                                </button>
                                                            </div>
                                                            <dl className="depth4-body">
                                                                <dt>4depth title</dt>
                                                                <dd>
                                                                    <ul className="depth4-ul">
                                                                        <li>
                                                                            <a href="#">depth title</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">depth title</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">depth title</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">depth title</a>
                                                                        </li>
                                                                    </ul>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="subm">
                                                            이용안내
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="subm">
                                                            자주묻는 질문
                                                        </a>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="dl" id="mGnb-anchor4">
                                        <dl>
                                            <dt className="dt">정책정보</dt>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    분야별 정책정보
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    정부/지자체 조직도
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    정부/지자체 누리집
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    지자체 소식
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    공모전
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    공공자원공유
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    국고보조금 부정수급 신고
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="dl" id="mGnb-anchor5">
                                        <dl>
                                            <dt className="dt">고객센터</dt>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    공지사항
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    이용안내
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    자주 묻는 질문(FAQ)
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    자료실
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    상담 예약
                                                </a>
                                            </dd>
                                            <dd className="dd">
                                                <a href="#" className="sm">
                                                    개선 의견
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="m-gnb-body-btm">
                                <a href="#" className="btn btn-txt sm">
                                    인증 센터
                                </a>
                                <a href="#" className="btn btn-txt sm ico-go">
                                    어린이 정부포털
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //모바일 : 전체메뉴 */}

                {/* 레이어 : 통합 검색 */}
                <div className="popup-wrap" data-type="full" id="popTotalSch">
                    <div className="popup-in">
                        <div className="popup">
                            <div className="popup-head sr-only">
                                <h1 className="pop-tit">통합검색</h1>
                            </div>
                            <div className="popup-body">
                                {/* 통합검색 */}
                                <div className="pop-total-serch-wrap">
                                    {/* 통합검색 정보입력 영역 */}
                                    <div className="search-total-top">
                                        {/* 검색어 타이틀 */}
                                        <div className="search-tit">
                                            <label htmlFor="search-total-input-id">검색어를 입력해주세요</label>
                                            <a href="#" className="btn btn-txt ico-arr sm">
                                                검색에 어려움이 있으신가요?
                                            </a>
                                        </div>
                                        {/* //검색어 타이틀 */}

                                        {/* 검색어 입력 폼 */}
                                        <div className="sch-form-wrap vert">
                                            <div className="sch-input">
                                                <input
                                                    type="text"
                                                    className="form-control xlg"
                                                    id="search-total-input-id"
                                                    placeholder=""
                                                />
                                                <button type="button" className="btn btn-ico ico-sch">
                                                    <span className="sr-only">검색</span>
                                                </button>
                                            </div>
                                            <button type="button" className="btn btn-txt ico-sch1 sm ico-before">
                                                고급검색
                                            </button>
                                        </div>
                                        {/* //검색어 입력 폼 */}
                                    </div>
                                    {/* //통합검색 정보입력 영역 */}

                                    {/* 검색어 리스트 */}
                                    <div className="search-text">
                                        {/* 검색어 입력 전 */}
                                        <ul className="sch-info-list">
                                            <li className="li li1">
                                                <h3 className="tit">인기검색어</h3>
                                                <ol className="list">
                                                    <li>
                                                        <span className="ranking-txt">안전보건교육</span>
                                                        <span className="ranking-state up">
                                                            <em className="sr-only">상승</em>1
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="ranking-txt">산업재해조사표</span>
                                                        <span className="ranking-state same">
                                                            <em className="sr-only">동일</em>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="ranking-txt">퇴직금계산기</span>
                                                        <span className="ranking-state up">
                                                            <em className="sr-only">상승</em>3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="ranking-txt">육아휴직급여</span>
                                                        <span className="ranking-state same">
                                                            <em className="sr-only">동일</em>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="ranking-txt">실업인정신청</span>
                                                        <span className="ranking-state same">
                                                            <em className="sr-only">동일</em>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="ranking-txt">국민내일배움</span>
                                                        <span className="ranking-state down">
                                                            <em className="sr-only">하락</em>1
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="ranking-txt">노사협의회</span>
                                                        <span className="ranking-state down">
                                                            <em className="sr-only">하락</em>1
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="ranking-txt">산업안전보건</span>
                                                        <span className="ranking-state same">
                                                            <em className="sr-only">동일</em>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="ranking-txt">국민내일배움카드신청</span>
                                                        <span className="ranking-state up">
                                                            <em className="sr-only">상승</em>11
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="ranking-txt">안전보건교육</span>
                                                        <span className="ranking-state same">
                                                            <em className="sr-only">동일</em>
                                                        </span>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="li li2">
                                                <h3 className="tit">최근검색어</h3>
                                                <ul className="list">
                                                    <li>
                                                        <span className="word-txt">안전보건교육</span>
                                                        <button className="btn btn-ico ico-del sm">
                                                            <span className="sr-only">삭제</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <span className="word-txt">안전보건교육</span>
                                                        <button className="btn btn-ico ico-del sm">
                                                            <span className="sr-only">삭제</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <span className="word-txt">안전보건교육</span>
                                                        <button className="btn btn-ico ico-del sm">
                                                            <span className="sr-only">삭제</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                                <button type="button" className="btn btn-txt ico-del sm">
                                                    최근검색어 전체 삭제
                                                </button>
                                            </li>
                                        </ul>
                                        {/* //검색어 입력 전 */}
                                    </div>
                                    {/* //검색어 리스트 */}
                                </div>
                                {/* //통합검색 */}
                            </div>
                            <button type="button" className="popup-close">
                                <span className="sr-only">레이어 닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* //레이어 : 통합 검색 */}

                {/* 레이어 : 소속기관 링크 */}
                <div className="popup-wrap" data-type="full" id="popFootLink">
                    <div className="popup-in">
                        <div className="popup">
                            <div className="popup-head">
                                <h1 className="pop-tit">소속기관(지청 및 위원회)</h1>
                            </div>
                            <div className="popup-body">
                                {/* 관련기관 링크 */}
                                <ul className="pop-foot-links">
                                    <li>
                                        <a href="#" target="_blank">
                                            서울지방고용노동청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            서울강남지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            서울동부지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            서울서부지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            서울남부지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            서울북부지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            서울관악지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            중부지방고용노동청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            인천북부지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            부천지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            의정부지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            고양지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            경기지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            성남지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            안양지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            안산지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            평택지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            강원지청･강릉지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            원주지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            태백지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            영월출장소
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            부산지방고용노동청{' '}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            부산동부지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            부산북부지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            창원지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            울산지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            양산지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            진주지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            통영지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            대구지방고용노동청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            대구서부지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            포항지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            구미지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            영주지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            안동지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            광주지방고용노동청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            전주지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            전주지청익산지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            군산지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            목포지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            여수지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            대전지방고용노동청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            청주지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            천안지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            충주지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            보령지청
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            서산출장소
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            중앙노동위원회
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            최저임금위원회
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            산업재해보상보험재심사위원회
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            고용보험심사위원회
                                        </a>
                                    </li>
                                </ul>
                                {/* //관련기관 링크 */}
                            </div>
                            <button type="button" className="popup-close">
                                <span className="sr-only">레이어 닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* //레이어 : 소속기관 링크 */}
            </header>
            {/* //헤더 영역 */}
        </>
    );
};

export default Header;
