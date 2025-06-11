import React from "react"
import { reverseIconButton, resetButton, confirmButton } from "@/assets/figma/"
import { useNavigate } from "react-router-dom"

function BottomBanner() {
    const navigate = useNavigate()
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-100 border-t border-gray-300 px-4 sm:px-6 py-4 flex items-center justify-between shadow-md z-50" onClick={() => navigate(-1)}>
            <div className="flex items-center space-x-1 sm:space-x-2">
            <img 
                src={reverseIconButton} 
                alt="Left Button"
                className="w-4 h-4 sm:w-6 sm:h-6 hover:scale-150 transition-transform duration-300" 
                />
                <span className="uppercase font-sans text-xs sm:text-sm">Back</span>
            </div>
            

            <p className="text-gray-400 text-center flex-1 mx-2 sm:mx-6 max-w-sm text-[10px] sm:text-xs">
                If A.I. estimate is wrong please select the correct one.
            </p>

            <div className="flex space-x-2 sm:space-x-4">
                <img src={resetButton} alt="Reset" className="hover:scale-110 border-1 p-2 sm:p-3 bg-white w-12 h-6 lg:w-14 sm:h-8" />
                <img src={confirmButton} alt="Confirm" className="hover:scale-110 border-1 p-2 sm:p-3 bg-black w-14 h-6 lg:w-16 sm:h-8" />
            </div>
        </div>
    )
}

export default BottomBanner;