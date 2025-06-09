import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { iconButton, reverseIconButton } from "@/assets/figma";

export default function AnalysisMenu() {
    const location = useLocation();
    const { base64Image, predictions } = location.state || {};

    const navigate = useNavigate();

    return (
        <div className="w-full h-screen bg-white relative flex flex-col items-center justify-center">
            <div className="absolute top-6 left-6 text-sm">
                <p className="font-semibold uppercase">A.I. Analysis</p>
                <p className="uppercase text-xs">A.I. has estimated the following.</p>
                <p className="uppercase text-xs">Fix estimated information if needed.</p>
            </div>

                <div className="relative w-[300px] h-[300px] group">
                    <div className="absolute inset-0 border border-dotted border-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-0 rotate-45"></div>

                        <div
                            onClick={() => {
                                console.log("Navigating to /demographics with:", { base64Image, predictions });
                                navigate("/demographics", { state: { base64Image, predictions } })
                            }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 transition-transform duration-200 hover:scale-110 w-[120px] h-[120px] border border-gray-400 flex items-center justify-center hover:bg-gray-200 rotate-45 cursor-pointer"
                            >
                            <p className="-rotate-45 font-semibold text-xs uppercase text-center">Demographics</p>
                        </div>
                        <div
                            onClick={() => navigate("/skin-type")}
                            className="absolute top-1/2 left-0 -translate-y-1/2 transition-transform duration-200 hover:scale-110 w-[120px] h-[120px] border border-gray-400 flex items-center justify-center hover:bg-gray-200 rotate-45 cursor-pointer"
                            >
                            <p className="-rotate-45 font-semibold text-xs text-center">Skin Type</p>
                        </div>
                        <div
                            onClick={() => navigate("/cosmetic-concerns")}
                            className="absolute top-1/2 right-0 -translate-y-1/2 transition-transform duration-200 hover:scale-110 w-[120px] h-[120px] border border-gray-400 flex items-center justify-center hover:bg-gray-200 rotate-45 cursor-pointer"
                            >
                            <p className="-rotate-45 font-semibold text-xs text-center">Cosmetic<br />Concerns</p>
                        </div>

                        <div
                            onClick={() => navigate("/weather")}
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 transition-transform duration-200 hover:scale-110 w-[120px] h-[120px] border border-gray-400 flex items-center justify-center hover:bg-gray-200 rotate-45 cursor-pointer"
                            >
                            <p className="-rotate-45 font-semibold text-xs text-center">Weather</p>
                        </div>
                </div>
            
            <div className="absolute bottom-20 left-6 cursor-pointer flex items-center space-x-2" onClick={() => navigate(-1)}>
                    <img src={reverseIconButton} alt="Back" />
                    <span className="uppercase">Back</span>
            </div>
            <div className="absolute bottom-20 right-6 cursor-pointer flex items-center space-x-2" onClick={() => navigate("/demographics", { state: { base64Image, predictions } })}>
                    <span className="uppercase">Get Summary</span>
                    <img src={iconButton} alt="Get Summary" />
            </div>
        </div>
    );
}