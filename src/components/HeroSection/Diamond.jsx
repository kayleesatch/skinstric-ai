import React from "react";

const Diamond = ({ forceVisible = false }) => {
    const visibilityClasses = forceVisible ? 'flex' : 'lg:hidden';
    
    return (
    <div className={`absolute inset-0 flex top-[-12%] items-center justify-center ${visibilityClasses} z-0`} >

        <div className="w-[420px] h-[420px] border border-dotted border-[#A0A4AB] rotate-45 flex items-center justify-center">
        
            <div className="w-[350px] h-[350px] border border-dotted border-[#A0A4AB]" />
        </div>
    </div>
  )
}
export default Diamond;