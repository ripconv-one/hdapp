export default function LeftContainer() {
    return (
        <div className="min-h-full p-4 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Left Container</h2>
            <div className="bg-gray-700 flex-1 mb-4">
                A
            </div>
            <div className="bg-gray-700 flex-1 mb-4">
                B
            </div>
            
        <div className="bg-gray-700 p-4 mt-auto">
            bottom content
        </div>
        </div>
    )
}