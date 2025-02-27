import React, { useState, useRef, useEffect } from "react";

const VoicePlayer = ({ file }) => {
    const audioRef = useRef(null);  // 오디오 요소의 참조를 저장

    const [isPlaying, setIsPlaying] = useState(false);  // 오디오 재생 여부 상태
    const [audioUrl, setAudioUrl] = useState(""); // 오디오 파일의 URL 상태

    useEffect(() => {
        if (file) {
            // URL.createObjectURL을 통해 파일 URL을 생성하여 오디오 요소에 전달
            const url = URL.createObjectURL(file);
            setAudioUrl(url);

            // 컴포넌트가 언마운트 될 때 URL을 해제하여 메모리 누수를 방지
            return () => URL.revokeObjectURL(url);
        }
    }, [file]); // 파일이 변경될 때마다 오디오 URL을 업데이트

    // 오디오 재생/일시 정지 토글 함수
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();  // 재생 중이라면 일시 정지
        } else {
            audioRef.current.play();   // 재생 중이 아니면 재생 시작
        }
        setIsPlaying(!isPlaying);  // 상태 업데이트
    };

    return (
        <div className="flex justify-center items-center p-4 border border-gray-300 rounded">
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">음성 파일 플레이어</h2>

                {/* 오디오 파일이 있을 때만 오디오 요소 표시 */}
                {file && file.type === 'audio/mpeg' ? (
                    <div className="flex flex-col items-center">
                        <audio ref={audioRef} src={audioUrl} controls className="mb-4" />
                    </div>
                ) : (
                    <p>음성 파일을 업로드해주세요.</p>
                )}
            </div>
        </div>
    );
};

export default VoicePlayer;
