import React from "react";
import PDFInfo from "./PDFInfo";
import PDFViewer from "./PDFViewer";
import VoiceInfo from "./VoiceInfo";
import VoicePlayer from "./VoicePlayer";

const FileUploadModal = ({ file, closeModal }) => {
    // 파일 타입에 따라 다른 컴포넌트 렌더링
    const renderFileContent = () => {
        // PDF 파일인 경우
        if (file && file.type === 'application/pdf') {
            return (
                <>
                    <div className="w-1/2 p-6 overflow-auto">
                        <PDFViewer file={file} />
                    </div>
                    <div className="w-1/2 p-6 overflow-auto border-l border-gray-300">
                        <PDFInfo file={file} />
                    </div>
                </>
            );
        }

        // MP3 또는 음성 파일인 경우
        else if (file && (file.type === 'audio/mpeg' || file.type.startsWith('audio/'))) {
            return (
                <>
                    <div className="w-full p-6 overflow-auto">
                        <VoicePlayer file={file} />
                    </div>
                    <div className="w-full p-6 overflow-auto border-l border-gray-300">
                        <VoiceInfo file={file} />
                    </div>
                </>
            );
        }

        return null; // 다른 파일 형식일 경우 아무것도 렌더링하지 않음
    };

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50"
            onClick={() => closeModal()} // 배경 클릭 시 모달 닫기
        >
            {/* 모달 백그라운드 */}
            <div
                className="w-full h-[90vh] sm:w-5/6 md:w-5/6 lg:w-5/6 xl:w-5/6 bg-white rounded-lg flex overflow-hidden shadow-xl"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 차단
            >
                {/* 렌더링할 파일 형식에 맞는 내용 표시 */}
                {renderFileContent()}
            </div>
        </div>
    );
};

export default FileUploadModal;
