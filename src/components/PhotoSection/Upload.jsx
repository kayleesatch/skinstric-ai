import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { reverseIconButton } from "@/assets/figma";
import LoadingAnalysis from "@/components/LoadingAnalysis";

const Upload = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { base64Image, predictions } = location.state || {};

    if (!base64Image || !predictions) {
        return (
            <div className='flex flex-col items-center justify-center h-screen'>
                <p className='text-red-600 text-xl'>No image or predictions found.</p>
                <button
                    onClick={() => navigate("/analysis-menu", { state: { base64Image, predictions } })}
                    className='hover:scale-105 transition'
                >
                   <img src={reverseIconButton} alt="Back" />
                   <span>Back</span>
                </button>
            </div>
        );
    }

        return  <LoadingAnalysis base64Image={base64Image} predictions={predictions} />
}

export default Upload;