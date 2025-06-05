import React from "react";
import SmallDiamond from "@/SmallDiamond";

const DoubleDiamond =({
    leftContent,
    rightContent,
    onLeftClick,
    onRightClick,
    leftLabel,
    rightLabel,
    leftLabelPosition,
    rightLabelPosition,
    leftLabelImage,
    rightLabelImage
}) => {

    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-30 lg:gap-100 mt-[-50px] z-10'>
                <SmallDiamond
                    onClick={onLeftClick} 
                    label={leftLabel} 
                    labelPosition={leftLabelPosition}
                    bltrLabelLine={leftLabelImage}
                    >
                    {leftContent}
                </SmallDiamond>

                <SmallDiamond 
                    onClick={onRightClick} 
                    label={rightLabel} 
                    labelPosition={rightLabelPosition}
                    trblLabelLine={rightLabelImage}
                    >
                    {rightContent}
                </SmallDiamond>
        </div>
    );
} 

export default DoubleDiamond;