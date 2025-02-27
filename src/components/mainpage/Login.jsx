import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useHistory 대신 useNavigate 사용

const LoginForm = () => {
    const [email, setEmail] = useState(""); // 이메일 상태
    const [password, setPassword] = useState(""); // 비밀번호 상태
    const navigate = useNavigate(); // useNavigate 훅 사용

    // 로그인 처리 함수
    const handleLogin = async (event) => {
        event.preventDefault();

        const header = {
            headers: {
                "Content-Type": "x-www-form-urlencoded"
            }
        };

        const form = new FormData();
        form.append('username', email);
        form.append('password', password);

        try {
            const res = await axios.post(`http://3.34.120.190:8080/api/member/login`, form, header);
            console.log(res);

            if (res.status === 200) {
                // 응답이 성공적이면 로컬스토리지에 데이터 저장
                localStorage.setItem("data", JSON.stringify(res.data));

                // /upload로 리다이렉션
                navigate("/upload");
            }
        } catch (error) {
            console.error("로그인 중 오류 발생:", error);
        }
    };

    return (
        <div className="flex flex-col items-center mt-16 px-6 mx-auto mr-48">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        로그인
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
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
                        <div className="flex items-center justify-between">
                            <a
                                href="#"
                                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                                비밀번호를 잊으셨습니까?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
