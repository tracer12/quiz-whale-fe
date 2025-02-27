import React from "react";
import Header from "../header/Header.jsx";
import LoginForm from "./Login.jsx";
import Introduce from "./Introduce.jsx";

const MainPageForm = () => {
    // 로컬스토리지에서 accessToken 확인
    const isLoggedIn = localStorage.getItem("userData") ? true : false;

    return (
        <div>
            <Header />

            {isLoggedIn ? (
                // 로그인된 상태에서 <Introduce />만 표시
                <div className="flex-1 p-4 flex items-center justify-center">
                    <Introduce />
                </div>
            ) : (
                // 로그인되지 않았을 때 기존 MainPageForm 보여주기
                <div className="flex h-[80vh]">
                    <div className="flex-1 p-4">
                        <div className="ml-40">
                            <Introduce />
                        </div>
                    </div>
                    <div className="flex-1 p-4">
                        <LoginForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPageForm;
