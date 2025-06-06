export const uploadToAPI = async (base64Image) => {
    try {
        const res = await fetch("https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image }),
        });

        const data = await res.json();
        if (data.success || data.message?.includes("SUCCESS")) {
            return { success: true, predictions: data.data };
        } else {
            return { success: false, error: "Upload failed" }; 
        }
    } catch (err) {
        return { success: false, error: err.message || "API error" };
    }
};