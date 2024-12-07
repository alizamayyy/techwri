import React from "react";
import "./FlippingCard.css";

interface FlippingCardProps {
  frontText: string;
  backText: string;
  imageSrc?: string; // Optional image source
  flipped: boolean; // Flipped state
  onClick: () => void; // Click handler
}

const FlippingCard: React.FC<FlippingCardProps> = ({
  frontText,
  backText,
  imageSrc,
  flipped,
  onClick,
}) => {
  return (
    <div
      onClick={onClick} // Use the onClick handler passed from the parent
      className={`relative w-56 h-80 ${
        flipped ? "bg-white" : "bg-[#0e1117]"
      } cursor-pointer perspective rounded-xl transition-colors duration-300 hover:bg-[#FFD1DC] bounce-on-hover shadow-[0_1px_10px_#FFD1DC] hover:shadow-[0_2px_20px_#FFD1DC]`}
    >
      <div
        className={`transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        } absolute w-full h-full`}
      >
        <div className="w-full h-full flex items-center justify-center">
          {flipped ? (
            <div className="flex flex-col font-opensans1 text-xs text-justify m-6 leading-none items-center text-black font-bold transform rotate-y-180">
              {imageSrc && (
                <img src={imageSrc} alt={backText} className="w-32 h-32 mb-2" />
              )}
              <div>{backText}</div> {/* Back text */}
            </div>
          ) : (
            <div className="text-white m-2 font-bold text-xs text-center italic font-opensans">
              {frontText}
            </div> // Front text
          )}
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
