import { useState } from 'react';
import { UploadButton } from "./UploadButton";
export default function UploaderTest() {
    const [file, setFile] = useState<File | null>(null);

    return (
        <div className="p-2">
        <UploadButton
            size={32}
            onChange={setFile}
        />
        {file && (
            <div className="mt-4 break-all">
                <strong>Selected:</strong> {file.name}
            </div>
        )}
        </div>
    )
}