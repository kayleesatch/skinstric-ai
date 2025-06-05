import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SpinningDiamond from "@/components/SpinningDiamond";
import { blackBullet } from "@/assets/figma";

const CameraPrep = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/photo-capture");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    const tips = [
        "Neutral expression",
        "Frontal pose",
        "Adequate lighting"
    ];

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-transparent">
            <div className="relative w-64 h-64">
                <SpinningDiamond reverse={false} zIndex="z-0" />
                <SpinningDiamond reverse={true} zIndex="z-10" />
                <p className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-xl font-semibold text-gray-700 whitespace-nowrap text-center">
                    To Get Better Results, make sure to have:
                </p>
            </div>
            <ul className='text-gray-400 font-semibold text-xs uppercase mt-6 z-40 flex flex-row gap-x-6'>
                {tips.map((tips, i) => (
                    <li key={i} className='flex items-center gap-2'>
                        <img src={blackBullet} alt="Bullet" className='w-3 h-3' />
                        {tips}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CameraPrep;