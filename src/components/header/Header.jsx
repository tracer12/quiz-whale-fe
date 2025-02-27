import React from "react";
const Header = () => {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="-m-1.5 p-1.5">
                        <img
                            src="/quizwhale-icon.png"
                            className="h-16 w-24" // 아이콘 크기 조정
                        />
                    </div>
                </div>
                {/* 기존 메뉴는 항상 표시되도록 설정 */}
                <div className="flex lg:flex-1 lg:justify-between gap-x-6">
                    <a href="#" className="text-sm font-semibold text-gray-900">Introduce</a>
                    <a href="#" className="text-sm font-semibold text-gray-900">Members</a>
                    <a href="#" className="text-sm font-semibold text-gray-900">Github</a>
                    <a href="#" className="text-sm font-semibold text-gray-900">Castle</a>
                </div>
                {/* 오른쪽 버튼(회원가입)도 항상 표시되도록 수정 */}
                <div className="flex flex-1 justify-end">
                    <a href="#" className="text-sm font-semibold text-gray-900">SignUp <span aria-hidden="true">&rarr;</span></a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
