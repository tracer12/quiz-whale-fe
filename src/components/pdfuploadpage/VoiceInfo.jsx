import React, { useState } from "react";

const VoiceInfo = ({ file }) => {
    const [isObjective, setIsObjective] = useState(false); // 객관식 체크 상태
    const [isSubjective, setIsSubjective] = useState(false); // 주관식 체크 상태
    const [pageRange, setPageRange] = useState({ start: "0", end: "0" }); // 페이지 범위 상태
    const [keywords, setKeywords] = useState(""); // 핵심 키워드 상태

    // 객관식 선택 처리
    const handleObjectiveChange = (event) => {
        setIsObjective(event.target.checked);
    };

    // 주관식 선택 처리
    const handleSubjectiveChange = (event) => {
        setIsSubjective(event.target.checked);
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
    const handleSubmit = () => {
        console.log("PDF Info Submitted");
        console.log("Objective:", isObjective);
        console.log("Subjective:", isSubjective);
        console.log("Page Range:", pageRange);
        console.log("Keywords:", keywords);
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
                            type="checkbox"
                            checked={isObjective}
                            onChange={handleObjectiveChange}
                            className="mr-2"
                        />
                        객관식
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={isSubjective}
                            onChange={handleSubjectiveChange}
                            className="mr-2"
                        />
                        주관식
                    </label>
                </div>
            </div>

            {/* 페이지 범위 입력 */}
            {/* <div className="mb-4 w-full">
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
            </div> */}

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

export default VoiceInfo;
