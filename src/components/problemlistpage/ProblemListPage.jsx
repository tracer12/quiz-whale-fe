import React, { useState } from "react";
import Problem from "./Problem";
import ProblemList from "./ProblemList";
import Header from "../header/Header.jsx";

const ProblemListPage = () => {
    const [selectedProblem, setSelectedProblem] = useState(null); // 선택된 문제 상태

    return (
        <div>
            <Header />
            <div className="flex h-[80vh]">
                {/* 왼쪽 문제 리스트 */}
                <div className="flex-1 overflow-y-auto p-4">
                    <ProblemList setSelectedProblem={setSelectedProblem} />
                </div>

                {/* 오른쪽 문제 상세 정보 */}
                <div className="flex-1 overflow-y-auto p-4">
                    {selectedProblem && <Problem problem={selectedProblem} />}
                </div>
            </div>
        </div>
    );
}

export default ProblemListPage;
