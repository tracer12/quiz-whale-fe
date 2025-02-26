import React from "react";
import PDFInfo from "./PDFInfo";
import PDFViewer from "./PDFViewer";

const PDFUploadModal = ({ pdfFile, closeModal }) => {
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
                {/* PDFViewer 컴포넌트 (왼쪽) */}
                <div className="w-1/2 p-6 overflow-auto">
                    <PDFViewer pdfFile={pdfFile} />
                </div>

                {/* PDFInfo 컴포넌트 (오른쪽) */}
                <div className="w-1/2 p-6 overflow-auto border-l border-gray-300">
                    <PDFInfo pdfFile={pdfFile} />
                </div>
            </div>
        </div>
    );
};

export default PDFUploadModal;
