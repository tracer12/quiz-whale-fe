import react from "react";
import Header from "../header/Header.jsx";
import LoginForm from "./Login.jsx";
import Introduce from "./Introduce.jsx";

const MainPageForm = () => {
    return (
        <div>
            <Header />
            <div className="flex h-[80vh]">
                {/* 왼쪽 문제 리스트 */}
                <div className="flex-1 p-4">
                    <Introduce />
                </div>

                {/* 오른쪽 문제 상세 정보 */}
                <div className="flex-1 p-4">
                    {<LoginForm />}
                </div>
            </div>
        </div>
    )
}
export default MainPageForm;