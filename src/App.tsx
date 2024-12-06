import FlippingCard from './FlippingCard';

export default function App() {
  return (
    <div className="ml-10 mr-10 flex flex-col items-center">
      <h1 className="text-5xl mt-20 font-bold text-center">
        Technical Writing
      </h1>
      <div className="grid grid-cols-7 gap-10 mt-40">
        <div className="relative translate-y-[-40px]"> {/* Slightly above */}
          <FlippingCard frontText="Original Side" backText="Flipped Side" />
        </div>
        <div className="relative translate-y-[40px]"> {/* Slightly below */}
          <FlippingCard frontText="Hello 1" backText="Flipped Side" />
        </div>
        <div className="relative translate-y-[-40px]"> {/* Slightly above */}
          <FlippingCard frontText="Hello 2" backText="Flipped Side" />
        </div>
        <div className="relative translate-y-[40px]"> {/* Slightly below */}
          <FlippingCard frontText="Hello 3" backText="Flipped Side" />
        </div>
        <div className="relative translate-y-[-40px]"> {/* Slightly above */}
          <FlippingCard frontText="Hello 4" backText="Flipped Side" />
        </div>
        <div className="relative translate-y-[40px]"> {/* Slightly below */}
          <FlippingCard frontText="Hello 3" backText="Flipped Side" />
        </div>
        <div className="relative translate-y-[-40px]"> {/* Slightly above */}
          <FlippingCard frontText="Hello 4" backText="Flipped Side" />
        </div>
      </div>
    </div>
  );
}