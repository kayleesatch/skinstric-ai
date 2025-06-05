import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DoubleDiamond from "@/components/PhotoSection/DoubleDiamond";
import { cameraIcon, galleryIcon, reverseIconButton, bltrLabelLine, trblLabelLine } from "@/assets/figma";
import PermissionModal from "@/components/PhotoSection/PermissionModal";
import { uploadToAPI } from "@/utilities/UploadToAPI.js";

const PhotoSelect = () => {
    const navigate = useNavigate();
    const [showPermissionModal, setShowPermissionModal] = useState(false);

    const openCamera = () => {
        setShowPermissionModal(true);
    };

    const handleAllow = () => {
        setShowPermissionModal(false);
        navigate('/camera-prep');
    };

    const handleDeny = () => {
        setShowPermissionModal(false);
    };

    const openFileDialog = () => {
        document.getElementById('imageUpload').click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;


            const reader = new FileReader();
            reader.onloadend = async () => {
                const base64Image = reader.result;

                const { success, predictions, error } = await uploadToAPI(base64Image);
                if (success) {
                    navigate('/loading-analysis', { state: { base64Image, predictions, nextRoute: '/analysis-menu' } });
                } else {
                    alert(error || "Upload failed. Please try again.");
                }
            };        
            reader.readAsDataURL(file);
    };
    
    return (
        <section className="relative w-full h-screen bg-white overflow-hidden flex flex-col items-center justify-center">
            <input 
                type="file"
                accept="image/*"
                id="imageUpload"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            <DoubleDiamond
                leftContent={
                    <div className="flex flex-col items-center text-center">
                        <img src={cameraIcon} alt="Camera" className="w-35 h-35" />
                    </div>
                }
                rightContent={
                    <div className="flex flex-col items-center text-center">
                        <img src={galleryIcon} alt="Upload" className="w-35 h-35" />
                    </div>
                }
                onLeftClick={openCamera}
                onRightClick={openFileDialog}
                leftLabel='Allow A.I. To Scan Your Face'
                rightLabel="Allow A.I. Access To Gallery"
                leftLabelPosition='topRight'
                rightLabelPosition='bottomLeft'
                leftLabelImage={bltrLabelLine}
                rightLabelImage={trblLabelLine}
            />

            {showPermissionModal && (
                <PermissionModal
                    onAllow={handleAllow}
                    onDeny={handleDeny}
                />
            )}

            <button 
                className="absolute bottom-6 left-6 flex items-center gap-2 text-sm uppercase"
                onClick={() => navigate(-1)}
            >
                <img 
                    src={reverseIconButton} 
                    alt="Back"
                    className="w-6 h-6 hover:scale-180 transition-transform duration-300"
                />
                <span>Back</span>
            </button>
        </section>
    );
};

export default PhotoSelect;