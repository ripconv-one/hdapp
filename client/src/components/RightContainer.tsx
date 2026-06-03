import Uploader from "./Uploader";
export default function RightContainer() {
    return (
        <div className="min-h-full p-4 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Right Container</h2>
            <div className="bg-gray-700  mb-4 min-w-0 break-words">
                < Uploader />
            </div>
            <div className="bg-gray-700 mb-4">
                D
            </div>
            <div className="bg-gray-700 flex-1">
                E
            </div>
        </div>
    )
    }