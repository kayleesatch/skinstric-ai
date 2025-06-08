import React from "react";

const SmallDiamond = ({ 
    children, 
    className = "", 
    onClick, 
    label, 
    labelPosition,
    bltrLabelLine,
    trblLabelLine  
}) => {
    
    const getLabelLineStyle = (position) => {
        switch (position) {
            case 'topRight':
                return {
                    image: bltrLabelLine,
                    className: 'absolute bottom-[85%] left-[25%] sm:bottom-50 sm:left-30 flex items-center rotate-[-45deg] w-20',
                }
            case 'bottomLeft':
                return {
                    image: trblLabelLine,
                    className: 'absolute bottom-[-25px] left-[60px] sm:bottom-[-18px] sm:left-[70px] flex items-center w-20 rotate-[-45deg]',
                }
            default:
                return {};
        }
    }

    const getLabelTextStyle = (position) => {
        switch (position) {
            case 'topRight':
                return 'absolute -top-22 right-[16px] text-xs uppercase text-gray-600 whitespace-nowrap rotate-[-45deg]';
            case 'bottomLeft':
                return 'absolute -bottom-20 left-[30px] text-xs uppercase text-gray-600 whitespace-nowrap rotate-[-45deg]';
            default:
                return '';
        }
    }

    const labelLine = getLabelLineStyle(labelPosition);
    const labelTextClass = getLabelTextStyle(labelPosition);

    return (
        <div
            onClick={onClick}
            className={`relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] rotate-45 flex items-center justify-center cursor-pointer ${className}`}
        >
            <div className="absolute inset-0 border border-dotted border-gray-400" />

            <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[210px] md:h-[210px] border border-dotted border-gray-400" />
            <div className="absolute transform -rotate-45">
                <div className="transition-transform duration-500 ease-in-out hover:scale-110">
                    {children}
                </div>
            </div>

        {label && labelPosition && (
            <>
                <img 
                    src={labelLine.image} 
                    alt="Label Line" 
                    className={labelLine.className} 
                />
                <span className={labelTextClass}>
                    {label}
                </span>
            </>
        )}
      </div>
    );
};

export default SmallDiamond;