import React, { useState } from "react";
import Header from "../header/Header";
import PDFUploadModal from "./PDFUploadModal";

const PDFUploadPage = () => {
    const [pdfFile, setPdfFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기 상태

    // 파일 선택 처리
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPdfFile(file);
            setIsModalOpen(true); // 파일을 선택하면 모달 열기
        }
    };

    // 드래그 앤 드롭 처리
    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0]; // 드래그된 파일을 받아옵니다.
        if (file && file.type === 'application/pdf') { // PDF 파일만 처리
            setPdfFile(file);
            setIsModalOpen(true); // PDF 파일 드래그 시 모달 열기
        } else {
            alert('PDF 파일만 업로드 가능합니다.');
        }
    };

    // 드래그 오버 이벤트 방지
    const handleDragOver = (event) => {
        event.preventDefault(); // 드래그된 파일을 놓을 수 있도록 설정
    };

    // 모달 닫기 처리
    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    return (
        <div>
            <Header />
            <div className="flex justify-center mt-20">
                <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 p-6 border-2 border-solid border-white rounded-lg">
                    <div className="text-center mb-4">
                        <h2 className="text-xl font-semibold mb-2">
                            {pdfFile ? pdfFile.name : "PDF 파일을 업로드 하세요"}
                        </h2>
                    </div>

                    <div
                        className="text-center p-6 border-2 border-dashed border-gray-400 rounded-md h-48"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <p className="text-gray-600">파일을 여기로 드래그하거나</p>
                        <p className="text-gray-600">"파일 선택" 버튼을 클릭하세요</p>
                    </div>

                    <div className="flex justify-center mt-4">
                        <input
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            id="fileInput"
                            onChange={handleFileSelect}
                        />
                        <label
                            htmlFor="fileInput"
                            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md cursor-pointer"
                        >
                            파일 선택
                        </label>
                    </div>
                </div>
            </div>
            <p className="text-gray-500 text-sm mt-3 text-center">
                파일 용량 30MB 이하로 올려주세요
            </p>

            {/* 모달창이 열리면 PDFUploadModal을 렌더링 */}
            {isModalOpen && <PDFUploadModal pdfFile={pdfFile} closeModal={closeModal} />}
        </div>
    );
};

export default PDFUploadPage;
