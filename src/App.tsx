import FlippingCard from "./FlippingCard";

export default function App() {
  return (
    <div className="ml-10 mr-10 flex flex-col items-center">
      <h1 className="text-5xl mt-20 font-bold text-center">A journey</h1>
      <p className="mt-2 text-center">and a few realizations along the way</p>
      <div className="grid grid-cols-7 gap-10 mt-40">
        <div className="relative translate-y-[-40px]">
          {" "}
          {/* Slightly above */}
          <FlippingCard
            frontText="To write not for myself, but also for others."
            backText="Understanding oneself, the topic, and the audience in order to deliver through writing what they need to understand. Learning and applying the process of breaking down complex ideas into simple and easily understandable parts. Technical writing is about bridging the gap between complexity and comprehension."
            imageSrc="/techwri.png"
          />
        </div>
        <div className="relative translate-y-[40px]">
          {" "}
          {/* Slightly below */}
          <FlippingCard
            frontText="To understand myself, first and most of all."
            backText="Understanding who I am, what I want, and what's not good for me. Discovering my strengths, weaknesses, opportunities, and threats, so that I know myself deeper. Expressing myself through writing with realizations I wouldn't admit vocally."
            imageSrc="/selfreflection.png"
          />
        </div>
        <div className="relative translate-y-[-40px]">
          {" "}
          {/* Slightly above */}
          <FlippingCard
            frontText="No matter the given situation, I am able to write."
            backText="Expressing myself is one thing, and expressing my thoughts about something else is another. Being able to write about a topic given to me is a skill I have developed, and will continuously develop. As long as I have the knowledge, tools for research, and understanding, I can write."
            imageSrc="/writing.png"
          />
        </div>
        <div className="relative translate-y-[40px]">
          {" "}
          {/* Slightly below */}
          <FlippingCard
            frontText="To communicate is to traverse the boundaries of society."
            backText="Hierarchies are common as long as there is a system. To establish clear communication boundaries diminishes difficulties of interactions between the different levels of the hierarchy. As long as it's systematic and organized, data can travel smoothly and is received appropriately."
            imageSrc="/communication.png"
          />
        </div>
        <div className="relative translate-y-[-40px]">
          {" "}
          {/* Slightly above */}
          <FlippingCard
            frontText="To know how to write is to know how to speak."
            backText="Writing is one thing, and speaking is another. Being confident in what you know will make it easier for you to relay it. It is my greatest pleasure to be able to make others understand an idea I am passionate about. For me, it is programming. Hence this creative synthesis."
            imageSrc="/video.png"
          />
        </div>
        <div className="relative translate-y-[40px]">
          {" "}
          {/* Slightly below */}
          <FlippingCard
            frontText="The real world is just at an arm's reach."
            backText="As a 4th year student about to undergo my first internship, this has been the most helpful part of the course. I was able to polish my cv and application letter which I am sure will be beneficial when I face the real world. I hope my fellow 4th year students learned a lot from this like me and I hope they can apply it."
            imageSrc="/letter.png"
          />
        </div>
        <div className="relative translate-y-[-40px]">
          {" "}
          {/* Slightly above */}
          <FlippingCard
            frontText="To know is the first step, to improve is the next."
            backText="At the start of the course, discovering myself was one of my goals. Now that it's ended, the journey has left me more room to get to know myself more and to develop what I already know and understand. Learning is a continuous process and I am in the ride for it."
            imageSrc="/selfassessment.png"
          />
        </div>
      </div>
    </div>
  );
}
