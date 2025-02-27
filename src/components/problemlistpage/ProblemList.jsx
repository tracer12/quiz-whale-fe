import React, { useState, useEffect } from "react";

const ProblemList = ({ setSelectedProblem }) => {
    const [problemData, setProblemData] = useState([]); // 문제 데이터 상태
    const [currentPage, setCurrentPage] = useState(1);
    const problemsPerPage = 10;

    useEffect(() => {
        // 로컬스토리지에서 problemData를 가져오고, JSON으로 파싱하여 상태에 저장
        const storedProblemData = JSON.parse(localStorage.getItem("problemData"));
        if (storedProblemData && storedProblemData.quizzes) {
            setProblemData(storedProblemData.quizzes); // quizzes 배열을 problemData 상태에 저장
        }
    }, []); // 컴포넌트가 처음 렌더링될 때만 실행

    const indexOfLastProblem = currentPage * problemsPerPage;
    const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
    const currentProblems = problemData.slice(indexOfFirstProblem, indexOfLastProblem);

    const nextPage = () => {
        if (currentPage < Math.ceil(problemData.length / problemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            {/* 문제 목록을 블록 형식으로 표시 */}
            {currentProblems.map((problem) => (
                <div
                    key={problem.id}
                    className="block mb-2 p-2 border border-gray-300 rounded cursor-pointer"
                    onClick={() => setSelectedProblem(problem)} // 문제 클릭 시 문제 정보 전달
                >
                    <h4 className="font-semibold">ID: {problem.id}</h4>
                    <p>Title: {problem.title}</p>
                </div>
            ))}
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
                >
                    {"<"} Prev
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(problemData.length / problemsPerPage)}
                    className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
                >
                    Next {">"}
                </button>
            </div>
        </div>
    );
};

export default ProblemList;
