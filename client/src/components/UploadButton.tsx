interface UploadButtonProps {
  onChange: (file: File | null) => void;
  size?: number;
}

export function UploadButton({
  onChange,
  size = 128,
}: UploadButtonProps) {
  return (
    <label className="relative group cursor-pointer">
      <div
        className="relative z-40 cursor-pointer group-hover:translate-x-0.5 group-hover:shadow-2xl group-hover:-translate-y-0.5 transition-all duration-500 bg-neutral-900 flex items-center justify-center mx-auto rounded-xl"
        style={{
          width: size,
          height: size,
        }}
      >
        <svg
          className="h-4 w-4 text-white/60"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
          <path d="M7 9l5 -5l5 5" />
          <path d="M12 4l0 12" />
        </svg>
      </div>

      <div
        className="absolute border opacity-0 group-hover:opacity-80 transition-all duration-200 border-dashed border-blue-400 inset-0 z-30 bg-transparent flex items-center justify-center mx-auto rounded-xl"
        style={{
          width: size,
          height: size,
        }}
      />

      <input
        type="file"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
    </label>
  );
}