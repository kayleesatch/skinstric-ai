import React, { useEffect } from "react";
import SpinningDiamond from "@/components/SpinningDiamond";
import { useNavigate, useLocation } from "react-router-dom";
import { uploadToAPI } from "@/helpers/UploadToAPI.js";


const LoadingAnalysis = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { base64Image, predictions, nextRoute = "/analysis-menu" } = location.state || {};

    useEffect(() => {
        const runUpload = async () => {
            if (!base64Image) {
                console.error("missing image");
                navigate("/photo-select");
                return;
            }

            const result = await uploadToAPI(base64Image);

            if (result.success) {
                navigate(nextRoute, { state: { predictions: result.predictions } });
            } else {
                console.error("API error:", result.error);
                navigate("/error", { state: { message: result.error } });
            }
        };
        runUpload();
    }, [navigate, base64Image, predictions]);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
            <div className="relative w-64 h-64">
                <SpinningDiamond reverse={false} zIndex="z-0" />
                <SpinningDiamond reverse={true} zIndex="z-10" />
            </div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-xl font-semibold text-gray-700 whitespace-nowrap">
                Preparing your analysis...
            </p>
        </div>
    );
};
export default LoadingAnalysis;