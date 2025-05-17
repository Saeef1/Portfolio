"use client";

import { Download } from "lucide-react";

interface DownloadButtonProps {
  onClick: () => void;
  className?: string;
}

export default function DownloadButton({ onClick, className = "" }: DownloadButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`fixed bottom-6 right-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-3 shadow-lg z-10 print:hidden flex items-center gap-2 ${className}`}
      aria-label="Download as PDF"
    >
      <Download size={20} />
      <span className="font-medium">Download PDF</span>
    </button>
  );
}