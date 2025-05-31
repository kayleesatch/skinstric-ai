import React, { useEffect } from "react";
import SpinningDiamond from "./SpinningDiamond";
import { useNavigate } from "react-router-dom";


const LoadingScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/analysis-menu")
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
            <div className="relative w-64 h-64">
                <SpinningDiamond reverse={false} zIndex="z-0" />
                <SpinningDiamond reverse={true} zIndex="z-10" />
            </div>
        </div>
    );
};

export default LoadingScreen;