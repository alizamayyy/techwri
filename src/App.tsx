import { useEffect, useState } from "react";
import FlippingCard from "./FlippingCard";
import "./index.css"; // Ensure your CSS file is imported

export default function App() {
  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    Array(7).fill(false)
  ); // Initialize an array for 7 cards

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const createFallingPetal = (x: number, y: number) => {
      const petal = document.createElement("div");
      petal.classList.add("flower-petal");

      // Add a random horizontal offset to create a gap effect
      const offsetX = (Math.random() - 0.5) * 30; // Random offset between -15px and 15px
      petal.style.left = `${x + offsetX}px`;
      petal.style.top = `${y}px`;
      document.body.appendChild(petal);

      // Trigger the falling animation
      petal.style.animation = "fall 2s forwards"; // Adjust duration to 2 seconds for slower fall

      // Remove the petal after the animation ends
      petal.addEventListener("animationend", () => {
        petal.remove();
      });
    };

    const updateCursorPosition = (e: MouseEvent) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;

      // Create a new petal at the cursor position
      createFallingPetal(e.pageX, e.pageY);
    };

    document.addEventListener("mousemove", updateCursorPosition);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.body.removeChild(cursor);
    };
  }, []);

  const handleFlipAll = () => {
    const newFlippedState = flippedCards.map((flipped) => !flipped); // Flip all cards
    setFlippedCards(newFlippedState);
  };

  const handleFlipSingle = (index: number) => {
    const newFlippedState = [...flippedCards];
    newFlippedState[index] = !newFlippedState[index]; // Flip the specific card
    setFlippedCards(newFlippedState);
  };

  return (
    <div className="ml-10 mr-10 flex flex-col items-center">
      <h1
        className="text-8xl mt-20 font-bold text-center font-precious cursor-effect"
        onClick={handleFlipAll}
      >
        A journey
      </h1>
      <p className="mt-2 text-center italic font-tomatoes cursor-effect">
        and a few realizations along the way
      </p>{" "}
      {/* Using custom font here */}
      <div className="grid grid-cols-7 gap-10 mt-40">
        <div className="relative translate-y-[-40px]">
          {" "}
          {/* Slightly above */}
          <FlippingCard
            frontText="To write not for myself, but also for others."
            backText="Understanding oneself, the topic, and the audience in order to deliver through writing what they need to understand. Learning and applying the process of breaking down complex ideas into simple and easily understandable parts. Technical writing is about bridging the gap between complexity and comprehension."
            imageSrc="/techwri.png"
            flipped={flippedCards[0]} // Pass the flipped state
            onClick={() => handleFlipSingle(0)} // Pass the click handler for individual card flipping
          />
        </div>
        <div className="relative translate-y-[40px]">
          {" "}
          {/* Slightly below */}
          <FlippingCard
            frontText="To understand myself, first and most of all."
            backText="Understanding who I am, what I want, and what's not good for me. Discovering my strengths, weaknesses, opportunities, and threats, so that I know myself deeper. Expressing myself through writing with realizations I wouldn't admit vocally."
            imageSrc="/selfreflection.png"
            flipped={flippedCards[1]} // Pass the flipped state
            onClick={() => handleFlipSingle(1)} // Pass the click handler for individual card flipping
          />
        </div>
        <div className="relative translate-y-[-40px]">
          {" "}
          {/* Slightly above */}
          <FlippingCard
            frontText="No matter the given situation, I am able to write."
            backText="Expressing myself is one thing, and expressing my thoughts about something else is another. Being able to write about a topic given to me is a skill I have developed, and will continuously develop. As long as I have the knowledge, tools for research, and understanding, I can write."
            imageSrc="/writing.png"
            flipped={flippedCards[2]} // Pass the flipped state
            onClick={() => handleFlipSingle(2)} // Pass the click handler for individual card flipping
          />
        </div>
        <div className="relative translate-y-[40px]">
          {" "}
          {/* Slightly below */}
          <FlippingCard
            frontText="To communicate is to traverse the boundaries of society."
            backText="Hierarchies are common as long as there is a system. To establish clear communication boundaries diminishes difficulties of interactions between the different levels of the hierarchy. As long as it's systematic and organized, data can travel smoothly and is received appropriately."
            imageSrc="/communication.png"
            flipped={flippedCards[3]} // Pass the flipped state
            onClick={() => handleFlipSingle(3)} // Pass the click handler for individual card flipping
          />
        </div>
        <div className="relative translate-y-[-40px]">
          {" "}
          {/* Slightly above */}
          <FlippingCard
            frontText="To know how to write is to know how to speak."
            backText="Writing is one thing, and speaking is another. Being confident in what you know will make it easier for you to relay it. It is my greatest pleasure to be able to make others understand an idea I am passionate about. For me, it is programming. Hence this creative synthesis."
            imageSrc="/video.png"
            flipped={flippedCards[4]} // Pass the flipped state
            onClick={() => handleFlipSingle(4)} // Pass the click handler for individual card flipping
          />
        </div>
        <div className="relative translate-y-[40px]">
          {" "}
          {/* Slightly below */}
          <FlippingCard
            frontText="The real world is just at an arm's reach."
            backText="As a 4th year student about to undergo my first internship, this has been the most helpful part of the course. I was able to polish my cv and application letter which I am sure will be beneficial when I face the real world. I hope my fellow 4th year students learned a lot from this like me and I hope they can apply it."
            imageSrc="/letter.png"
            flipped={flippedCards[5]} // Pass the flipped state
            onClick={() => handleFlipSingle(5)} // Pass the click handler for individual card flipping
          />
        </div>
        <div className="relative translate-y-[-40px]">
          {" "}
          {/* Slightly above */}
          <FlippingCard
            frontText="To know is the first step, to improve is the next."
            backText="At the start of the course, discovering myself was one of my goals. Now that it's ended, the journey has left me more room to get to know myself more and to develop what I already know and understand. Learning is a continuous process and I am in the ride for it."
            imageSrc="/selfassessment.png"
            flipped={flippedCards[6]} // Pass the flipped state
            onClick={() => handleFlipSingle(6)} // Pass the click handler for individual card flipping
          />
        </div>
      </div>
      <a
        href="https://github.com/alizamayyy/techwri"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-5 right-5 flex items-center" // Use flex to align text and icon
      >
        <p className="mr-2 text-white text-bold font-opensans1 text-sm">
          Bataluna, Aliza May
        </p>{" "}
        {/* Text before the icon */}
        <img
          src="/github-mark-white.svg" // Path to your SVG file
          alt="GitHub"
          className="w-5 h-5 hover:opacity-80 transition-opacity" // Adjust size and hover effect
        />
      </a>
    </div>
  );
}
