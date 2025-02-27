import React, { useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const [email, setEmail] = useState(""); // 이메일 상태
    const [password, setPassword] = useState(""); // 비밀번호 상태
    const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인 상태
    const [nickname, setNickname] = useState(""); // 닉네임 상태
    const navigate = useNavigate();

    const handleLogoClick = () => {
        // 홈페이지로 돌아가는 로직
        window.location.href = "/"; // 도메인 루트로 이동
    };

    // 회원가입 처리 함수
    const handleSignup = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        const header = {
            headers: {
                "Content-Type": "application/json", // JSON 형식으로 보내기
            }
        }

        const form = new FormData();
        form.append('email', email);
        form.append('password', password);
        form.append('nickname', nickname);
        form.append('role', "USER");


        try {
            const res = await axios.post("http://qw-api-env.eba-h52e7pma.ap-northeast-2.elasticbeanstalk.com/api/member/", form, header);
            console.log(res);
            alert("회원가입이 완료되었습니다.");
            if (res.status === 200) {
                // 응답이 성공적이면 로컬스토리지에 데이터 저장
                // localStorage.setItem("data", JSON.stringify(res.data));

                // /upload로 리다이렉션
                navigate("/");
            }
        } catch (error) {
            console.error("회원가입 중 오류 발생:", error);
        }
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center px-6 mx-auto lg:py-0 mt-12">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            회원가입
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    비밀번호
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    비밀번호 확인
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="nickname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    닉네임
                                </label>
                                <input
                                    type="text"
                                    name="nickname"
                                    id="nickname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="닉네임"
                                    required
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                회원가입
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                이미 계정이 있나요?{" "}
                                <a className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                                    onClick={() => handleLogoClick()}>
                                    로그인하기
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
