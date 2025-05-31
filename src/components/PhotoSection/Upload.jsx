import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
import { reverseIconButton } from "../../assets/figma";

const Upload = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { base64, predictions } = location.state || {};

    if (!base64 || !predictions) {
        return (
            <div className='flex flex-col items-center justify-center h-screen'>
                <p className='text-red-600 text-xl'>No image or predictions found.</p>
                <button
                    onClick={() => navigate("/")}
                    className='hover:scale-105 transition'
                >
                   <img src={reverseIconButton} alt="Back" />
                   <span>Back</span>
                </button>
            </div>
        );
    }

        return  <LoadingScreen base64={base64} predictions={predictions} />
}

export default Upload;