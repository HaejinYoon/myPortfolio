import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function HoverImagePortal({ src, visible }) {
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    if (!visible) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLandscape(img.naturalWidth >= img.naturalHeight);
    };
  }, [src, visible]);

  return createPortal(
    <div
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        pointer-events-none
        transition-opacity duration-200
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <img
        src={src}
        alt="preview-large"
        className={`
          rounded-xl
          shadow-2xl
          border border-border
          bg-white
          transition-all duration-200 ease-out
          ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          ${
            isLandscape
              ? "w-[80vw] max-w-[1280px] h-auto"
              : "h-[80vh] max-h-[920px] w-auto"
          }
        `}
      />
    </div>,
    document.body
  );
}
