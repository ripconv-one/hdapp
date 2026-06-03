import { useState } from 'react';

export default function UploaderTest() {
    const [file, setFile] = useState<File | null>(null);

    return (
        <div className="flex flex-col">
         Drag and drop your files here or click to select files.
        <input 
            type="file" 
            onChange={(e) => setFile(e.target.files?.[0] || null)} 
            className="w-full h-full"
        />
        {file && (
            <div className="mt-4 break-all">
                <strong>Selected:</strong> {file.name}
            </div>
        )}          
        </div>
    )
}