const PermissionModal = ({ onAllow, onDeny }) => {

    return (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white p-6 z-50 shadow-xl w-72" >

                <div className="relative z-10 text-white px-6 py-4 shadow-lg w-72 text-center">

                <p className="relative text-white text-center mb-6 text-sm mr-10">
                    Allow Access to the Camera?
                </p>
                <div className="flex gap-4">
                    <button 
                        onClick={onDeny}
                        className="bg-black px-6 py-2 text-white hover:text-gray-500"
                        >
                        DENY
                    </button>
                    <button 
                        onClick={onAllow}
                        className="bg-black px-6 py-2 text-white hover:text-gray-500"
                        >
                        ALLOW
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PermissionModal;