import React, { useState, useEffect } from "react";

const Problem = ({ problem }) => {
    const [choiceAnswer, setChoiceAnswer] = useState(""); // 선택된 답안
    const [result, setResult] = useState(""); // 결과 출력 (정답/오답)
    const [isSubmitted, setIsSubmitted] = useState(false); // 제출 여부

    useEffect(() => {
        // 문제 상태가 변경될 때마다 isSubmitted를 false로 초기화
        setIsSubmitted(false);
        setChoiceAnswer("");
    }, [problem]); // problem이 바뀔 때마다 호출

    const handleChoice = (key) => {
        setChoiceAnswer(key); // 선택된 선택지의 key를 저장
    };

    const handleSubmit = () => {
        setIsSubmitted(true); // 제출 버튼 클릭 시 제출 여부 true로 설정

        // 선택된 답안과 정답을 비교하여 결과 설정
        if (choiceAnswer === problem.answer) {
            setResult("정답입니다!"); // 정답일 경우
        } else {
            setResult("오답입니다!"); // 오답일 경우
        }
    };

    return (
        <div className="p-4 border border-gray-300 rounded">
            <div className="p-5">
                <h2 className="text-xl font-semibold mb-4">{problem.title}</h2>
                <p className="mb-4">{problem.problem}</p>

                <div className="space-y-4">
                    <p><strong>Choices:</strong></p>
                    {Object.entries(problem.choices).map(([key, value]) => (
                        <div
                            key={key}
                            onClick={() => handleChoice(key)} // 선택지 클릭 시 handleChoice 호출
                            className={`p-2 cursor-pointer rounded border ${choiceAnswer === key ? "border-green-500 bg-green-100" : "border-gray-300"
                                }`} // 선택된 항목에 초록 테두리 추가
                        >
                            <strong>{key}:</strong> {value}
                        </div>
                    ))}
                </div>

                {isSubmitted && (
                    <div>
                        <div className={`mt-4 text-lg font-semibold ${result === "정답입니다!" ? "text-green-600" : "text-red-600"}`}>
                            {result}
                        </div>
                        <div className="mt-4">
                            <strong>정답:</strong> {problem.answer}
                        </div>
                        {problem.Explanation && (
                            <div className="mt-4">
                                <strong>설명:</strong> {problem.Explanation}
                            </div>
                        )}
                    </div>
                )}

                {/* 제출 버튼 */}
                <div>
                    <button
                        type="button"
                        onClick={handleSubmit} // 제출 버튼 클릭 시 handleSubmit 호출
                        className="w-24 mt-4 text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        제출
                    </button>
                </div>

                {/* 결과 표시 */}
            </div>
        </div>
    );
};

export default Problem;
