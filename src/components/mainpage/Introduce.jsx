import React from "react";

const Introduce = () => {
    return (
        <div className="text-center py-16 px-10">
            <img
                src="/quizwhale-icon.png"
                className="h-24 w-36 mx-auto mb-6"
                alt="QuizWhale Logo"
            />
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Welcome to QuizWhale</h1>
            <p className="text-lg text-gray-700 mb-4">
                QuizWhale은 업로드된 PDF 또는 오디오 파일을 기반으로<br />문제를 생성하고 관리할 수 있는 서비스 입니다.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                콘텐츠를 업로드하기만 하면 QuizWhale이 관련 문제 리스트를 제공하여 학습 및 테스트 목적으로 자신만의 문제를 쉽게 생성할 수 있습니다.
            </p>
            <p className="text-md text-gray-500">
                해당 서비스를 시작하여 QuizWhale이 학습 경험을 어떻게 향상시킬 수 있는지 확인해 보세요!
            </p>
        </div>
    );
};

export default Introduce;
