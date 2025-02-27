import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "core-js/full/promise/with-resolvers.js";
import "pdfjs-dist/webpack";

// PDF.js Worker 설정
if (typeof Promise.withResolvers === "undefined") {
    if (typeof window !== "undefined") {
        window.Promise.withResolvers = function () {
            let resolve, reject;
            const promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });
            return { promise, resolve, reject };
        };
    } else {
        global.Promise.withResolvers = function () {
            let resolve, reject;
            const promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });
            return { promise, resolve, reject };
        };
    }
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ file }) => {
    const [numPages, setNumPages] = useState(null); // 총 페이지 수

    // PDF 로딩 성공 후 페이지 수 설정
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="pdf-viewer-container w-full h-full relative">
            {/* PDF 파일이 존재하면 Document 컴포넌트로 PDF 표시 */}
            {file && (
                <Document
                    file={file} // 전달받은 pdfFile 사용
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<p>로딩 중...</p>} // 로딩 중 UI
                >
                    {/* 모든 페이지를 표시 */}
                    {Array.from(new Array(numPages), (el, index) => (
                        <div key={index} style={{ marginBottom: "0px" }}>
                            <Page
                                pageNumber={index + 1}
                                renderTextLayer={false} // 텍스트 레이어 숨기기
                                renderAnnotationLayer={false} // 주석 레이어 숨기기
                            />
                        </div>
                    ))}
                </Document>
            )}

            {/* 스크롤바 표시 여부 */}
            <div className="absolute top-0 right-0 bottom-0 left-0">
                <div
                    className={`w-2 bg-gray-500 rounded-full absolute top-0 right-0 bottom-0 transition-opacity opacity-0`}
                    style={{ width: "4px" }}
                />
            </div>
        </div>
    );
};

export default PDFViewer;