import React, { useState } from "react";
import axios from "axios";

const PDFInfo = ({ file }) => {
    const [problemType, setProblemType] = useState(""); // 문제 유형 상태

    const [pageRange, setPageRange] = useState({ start: "", end: "" }); // 페이지 범위 상태
    const [keywords, setKeywords] = useState(""); // 핵심 키워드 상태

    // 문제 유형 선택 처리
    const handleProblemTypeChange = (event) => {
        const value = event.target.name; // 객관식 또는 주관식
        setProblemType(value); // 선택된 문제 유형 저장
    };

    // 페이지 범위 입력 처리
    const handlePageRangeChange = (event) => {
        const { name, value } = event.target;
        setPageRange((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // 핵심 키워드 입력 처리
    const handleKeywordsChange = (event) => {
        setKeywords(event.target.value);
    };

    // 전송 버튼 처리
    const handleSubmit = async () => {
        // 파일과 데이터를 FormData에 추가
        const formData = new FormData();
        console.log(pageRange.start, pageRange.end, keywords, problemType);
        if (file) {
            formData.append("file", file);
        }
        formData.append("start", pageRange.start);
        formData.append("end", pageRange.end);
        formData.append("keywords", keywords);
        formData.append("type", problemType); // 선택된 문제 유형 추가

        // 로컬 스토리지에서 accessToken 가져오기
        const userData = JSON.parse(localStorage.getItem("userData"));
        const accessToken = userData ? userData.accessToken : null;

        const header = {
            headers: {
                "Content-Type": "multipart/form-data", // 파일 전송을 위한 설정
                "Authorization": `Bearer ${accessToken}`
            }
        }

        try {
            const response = await axios.post("http://qw-api-env.eba-h52e7pma.ap-northeast-2.elasticbeanstalk.com/api/quizzes", formData, header);

            if (response.status === 200) {
                // 서버 응답이 성공적이라면 데이터를 로컬 스토리지에 저장
                localStorage.setItem("problemData", JSON.stringify(response.data));
                alert("데이터가 성공적으로 제출되었습니다.");
            }
        } catch (error) {
            console.error("서버에 전송 중 오류 발생:", error);
            alert("서버에 전송 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="flex flex-col items-start h-full p-4 space-y-6">
            {/* 파일 이름 출력 */}
            <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">
                    {file ? `파일 이름: ${file.name}` : "파일을 업로드 해주세요"}
                </h3>
            </div>

            {/* 문제유형선택 텍스트 추가 */}
            <div className="mb-4 w-full">
                <h4 className="text-lg font-medium mb-2">문제 유형 선택</h4>
                <div className="flex space-x-4">
                    <label>
                        <input
                            type="radio"
                            name="CHOICE"
                            checked={problemType === "CHOICE"}
                            onChange={handleProblemTypeChange}
                            className="mr-2"
                        />
                        객관식
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="SUBJECT"
                            checked={problemType === "SUBJECT"}
                            onChange={handleProblemTypeChange}
                            className="mr-2"
                        />
                        주관식
                    </label>
                </div>
            </div>

            {/* 페이지 범위 입력 */}
            <div className="mb-4 w-full">
                <label className="block mb-2">페이지 범위:</label>
                <div className="flex space-x-4">
                    <input
                        type="number"
                        name="start"
                        value={pageRange.start}
                        onChange={handlePageRangeChange}
                        placeholder="시작 페이지"
                        className="border border-gray-300 p-2"
                    />
                    <input
                        type="number"
                        name="end"
                        value={pageRange.end}
                        onChange={handlePageRangeChange}
                        placeholder="끝 페이지"
                        className="border border-gray-300 p-2"
                    />
                </div>
            </div>

            {/* 핵심 키워드 입력 */}
            <div className="mb-4 w-full">
                <label className="block mb-2">핵심 키워드:</label>
                <textarea
                    value={keywords}
                    onChange={handleKeywordsChange}
                    placeholder="핵심 키워드 입력"
                    className="border border-gray-300 p-2 w-full h-32 resize-none"
                />
            </div>

            {/* 전송 버튼 */}
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-6 py-3 rounded mt-4"
            >
                전송
            </button>
        </div>
    );
};

export default PDFInfo;
