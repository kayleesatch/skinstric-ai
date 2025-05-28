import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const PhotoCapture = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [captured, setCaptured] = useState(false);
    const [base64Image, setBase64Image] = useState(null)
    const navigate = useNavigate();
    

    useEffect(() => {
        async function startCamera() {
            try {
                const camStream = await navigator.mediaDevices.getUserMedia({ video: true });
                setStream(camStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = camStream;
                }
            } catch (err) {
                alert("Camera access denied.", err);
                navigate(-1);
            }
        }

        startCamera();
        return () => {
            stream?.getTracks().forEach(track => track.stop());
        };
    }, []);

    const captureImage = async () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        if (!canvas || !video) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const base64Image = canvas.toDataURL("image/jpeg");

        setBase64Image(base64);
        setCaptured(true);

        try {
            const res = await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image: base64Image }),
            });

            const data = await res.json();
            if (data.message.includes("SUCCESS")) {
                navigate("/upload", { state: { base64, predictions: data.data } });
            } else {
                alert("Upload failed. Please try again.");
            }
        } catch (err) {
            console.error("API error:", err);
            alert("Something went wrong with the API.");
        }
    };

    const resetCapture = () => {
        setCaptured(false);
        setBase64Image(null);
    };

    return (
        <section className='relative w-full h-screen bg-white flex items-center justify-center flex-col'>
            <div className='relative w-[90%] max-w-[500px] aspect-video border-4 border-dotted border-gray-400 rounded-lg overflow-hidden'>
                {!captured ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className='w-full h-full object-cover'    
                    />
                ) : (
                    <img 
                        src={base64Image}
                        alt="Captured"
                        className='w-full h-full object-cover'    
                    />
                )}
                <canvas ref={canvasRef} style={{ display: 'none' }} />
            </div>

            <div className='mt-6 flex gap-4'>
                {!captured ? (
                    <button 
                        onClick={captureImage}
                        className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition-transform'
                    >
                        Capture
                    </button>
                ) : (
                    <button
                        onClick={resetCapture}
                        className='px-6 py-2 bg-gray-500 text-white rounded-lg hover:scale-105 transition-transform'
                    >
                        Retake
                    </button>
                )}
            </div>
        </section>
    );
};

export default PhotoCapture;