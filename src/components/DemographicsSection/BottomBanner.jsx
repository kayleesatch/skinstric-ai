import React from "react"
import { reverseIconButton, resetButton, confirmButton } from "@/assets/figma/"
import { useNavigate } from "react-router-dom"

function BottomBanner() {
    const navigate = useNavigate()
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 px-6 py-4 flex items-center justify-between shadow-md z-50" onClick={() => navigate(-1)}>
            <div className="flex">
            <img 
                src={reverseIconButton} 
                alt="Left Button"
                className="w-6 h-6 hover:scale-180 transition-transform duration-300" 
                />
                <span className="uppercase">Back</span>
            </div>
            

            <p className="text-gray-400 text-center flex-1 mx-6 max-w-lg text-xs">
                If A.I. estimate is wrong please select the correct one.
            </p>

            <div className="flex space-x-4">
                <img src={resetButton} alt="Reset" className="hover:scale-110 border-1 p-3 bg-white" />
                <img src={confirmButton} alt="Confirm" className="hover:scale-110 border-1 p-3 bg-black" />
            </div>
        </div>
    )
}

export default BottomBanner;