import React from "react";

const Header = () => {
    const handleLogoClick = () => {
        // 이미지 클릭 시 /upload 페이지로 이동
        window.location.href = "/upload";
    };

    const handleIntroduceClick = () => {
        // Introduce 클릭 시 / 페이지로 이동
        window.location.href = "/";
    };

    const handleSingupClick = () => {
        // 로컬스토리지의 데이터가 있으면 로그아웃
        const accessToken = localStorage.getItem("data");
        if (accessToken) {
            // 로그아웃 처리
            localStorage.removeItem("data");
            window.location.href = "/"; // 도메인 루트로 이동
        } else {
            // 회원가입 페이지로 이동
            window.location.href = "/signup";
        }
    };

    // 로컬스토리지에서 데이터 확인 (accessToken이 있으면 로그인 상태로 판단)
    const isLoggedIn = localStorage.getItem("data") ? true : false;

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="-m-1.5 p-1.5">
                        <img
                            src="/quizwhale-icon.png"
                            className="h-16 w-24 cursor-pointer" // 아이콘 크기 조정
                            onClick={handleLogoClick} // /upload로 이동
                        />
                    </div>
                </div>
                {/* 기존 메뉴는 항상 표시되도록 설정 */}
                <div className="flex lg:flex-1 lg:justify-between gap-x-6">
                    <a
                        href="#"
                        className="text-sm font-semibold text-gray-900"
                        onClick={handleIntroduceClick} // Introduce 클릭 시 / 페이지로 이동
                    >
                        Introduce
                    </a>
                    <a href="#" className="text-sm font-semibold text-gray-900">Members</a>
                    <a href="#" className="text-sm font-semibold text-gray-900">Github</a>
                    <a href="#" className="text-sm font-semibold text-gray-900">MyProfile</a>
                </div>
                {/* 오른쪽 버튼이 회원가입 또는 로그아웃으로 바뀌도록 수정 */}
                <div className="flex flex-1 justify-end">
                    <div
                        className="text-sm font-semibold text-gray-900 cursor-pointer"
                        onClick={handleSingupClick}
                    >
                        {isLoggedIn ? "로그아웃" : "회원가입"}
                        <span aria-hidden="true"></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
