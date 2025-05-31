import React from "react";
import { useNavigate } from "react-router-dom";
import { iconButton, reverseIconButton } from "../assets/figma";

export default function AnalysisMenu() {
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
                            onClick={() => navigate("/demographics")}
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

            <div className="absolute bottom-6 left-6 cursor-pointer flex items-center space-x-2" onClick={() => navigate(-1)}>
                    <img src={reverseIconButton} alt="Back" className="w-5 h-5" />
                    <span>Back</span>
            </div>
            <div className="absolute bottom-6 right-6 cursor-pointer flex items-center space-x-2" onClick={() => navigate("/summary")}>
                    <img src={iconButton} alt="Get Summary" />
                    <span>Get Summary</span>
            </div>
        </div>
    );
}