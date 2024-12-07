import { useState } from 'react';
import './FlippingCard.css';


interface FlippingCardProps {
  frontText: string;
  backText: string;
}

const FlippingCard: React.FC<FlippingCardProps> = ({ frontText, backText }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div 
        onClick={handleClick} 
        className={`relative w-56 h-80 ${flipped ? 'bg-white' : 'bg-[#0e1117]'} cursor-pointer perspective rounded-xl transition-colors duration-300 hover:bg-[#FFD1DC] bounce-on-hover shadow-[0_1px_10px_#FFD1DC] hover:shadow-[0_2px_20px_#FFD1DC]`} // Changed background color based on flipped state
    >
      <div className={`transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''} absolute w-full h-full`}>
      <div className="w-full h-full flex items-center justify-center">
        {flipped ? (
            <div className="text-black font-bold transform rotate-y-180">{backText}</div> // Made text bold
          ) : (
            <div className="text-white font-bold">{frontText}</div> // Made text bold
          )}
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;