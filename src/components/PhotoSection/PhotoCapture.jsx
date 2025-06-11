import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { iconButton, reverseIconButton, whiteBullet } from "@/assets/figma";


const PhotoCapture = () => {
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [base64Image, setBase64Image] = useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const navigate = useNavigate();

    const tips = [
        "Neutral expression",
        "Frontal pose",
        "Adequate lighting"
    ];

useEffect(() => {
    const getCamera = async () => {
       try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(stream);
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
        }
       } catch (err) {
        console.error("Camera error:", err);
        navigate('/photo-select')
       }
    };

    getCamera();

    return () => {
        if(stream) {
            stream.getTracks().forEach(track => track.stop());
        }
    };
}, [navigate]);
    
    const captureImage = () => {
        const canvas = document.createElement("canvas");
        const video = videoRef.current;
        if (!video) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
       
        const base64Image = canvas.toDataURL("base64Image/png");
        setBase64Image(base64Image);
        setShowPreview(true);
    };

    const handleRetake = () => {
        setBase64Image(null);
        setShowPreview(false);
    };

    const handleContinue = () => {
        navigate("/loading-analysis", {
            state: { base64Image, predictions: [], nextRoute: "/analysis-menu" }
        })
    }


    return (
        <section className='relative w-full h-screen bg-black overflow-hidden'>

            {!showPreview ? (
                <>
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className='absolute top-0 left-0 w-full h-full object-cover z-0'    
                    />


                    <button 
                        onClick={captureImage}
                        className='absolute right-8 top-1/2 transform -translate-y-1/2 w-20 h-20 rounded-full bg-white shadow-lg z-20'
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-300" />
                    </button>

                    <div className="absolute bottom-30 w-full flex flex-col items-center text-white opacity-90 z-30">
                        <p className="uppercase font-semibold tracking-widest text-[10px]">
                            To Get Better Results, make sure to have:
                        </p>
                        <ul className="flex flex-row gap-x-4 mt-1">
                            {tips.map((tip, i) => (
                                <li key={i} className="flex items-center gap-1">
                                    <img src={whiteBullet} alt="Bullet" className="w-2 h-2" />
                                    <span className="text-[10px]">{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <>
                <img 
                    src={base64Image} 
                    alt="Captured" 
                    className='absolute top-0 left-0 w-full h-full object-cover z-10' 
                />

                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'>
                    <p className='text-white text-xs bg-transparent px-4 py-2'>
                        Great Shot!
                    </p>
                </div>

                <div className='absolute bottom-20 w-full px-6 flex justify-between z-30'>
                    <button
                        onClick={handleRetake}
                        className="flex items-center gap-2 text-white text-sm"
                    >
                        <img src={reverseIconButton} alt="Retake" className='w-8 h-8 filter invert' />
                        <span className="font-sans">RETURN</span>
                    </button>
                    <button
                        onClick={handleContinue}
                        className="flex items-center gap-2 text-white text-sm"
                    >
                        <img src={iconButton} alt="Continue" className='w-8 h-8 filter invert' />
                        <span className="font-sans">CONTINUE</span>
                    </button>
                </div>
            </>
            )}
        </section>
    );
};

export default PhotoCapture;