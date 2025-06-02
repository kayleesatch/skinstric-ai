import React from "react";
import { useNavigate } from "react-router-dom";
import DoubleDiamond from "./DoubleDiamond";
import { cameraIcon, galleryIcon, reverseIconButton, bltrLabelLine, trblLabelLine } from "../../assets/figma";

const PhotoSelect = () => {
    const navigate = useNavigate();

    const openCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            stream.getTracks().forEach(track => track.stop());
            navigate('/photocapture');
        } catch (error) {
            alert('Camera access denied. Please allow access to proceed.', error);
        }
    };

    const openFileDialog = () => {
        document.getElementById('imageUpload').click();
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const base64Image = reader.result;
                console.log("base64Image string starts with:", base64Image.slice(0,30));

                try {
                    const res = await fetch('https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ image: base64Image })
                    });

                    const data = await res.json();
                    console.log("API response:", data);

                    if (data.success) {
                        navigate('/upload', { state: { base64Image: base64Image, predictions: data.data } });
                    } else {
                        alert('Upload failed. Please try again.');
                    }
                } catch (err) {
                    console.error('API error:', err);
                    alert('Something went wrong with the API.');
                }
            };
            reader.readAsDataURL(file)
        }
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