"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";
import cover from "../../public/assets/latent-cover-image.png";
import lock from "../../public/assets/Lock.png";

type Card = {
  id: number;
  image: StaticImageData;
  description: string;
};

const PremiumEpisodesList: React.FC = () => {
  const cards: Card[] = [
    { id: 1, image: cover, description: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @Rebel Kid" },
    { id: 2, image: cover, description: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @Rebel Kid" },
    { id: 3, image: cover, description: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @Rebel Kid" },
    { id: 4, image: cover, description: "India's Got Latent ft. @Ravi Gupta, @Beer Biceps, @Rebel Kid" },
    { id: 5, image: cover, description: "India's Got Latent ft. @Ravi Gupta, @Beer Biceps, @Rebel Kid" },
    { id: 6, image: cover, description: "India's Got Latent ft. @Tanmay Bhatt, @Nishant Tanwar, @Zakin Khan" },
    { id: 7, image: cover, description: "India's Got Latent ft. @Tanmay Bhatt, @Nishant Tanwar, @Zakin Khan" },
    { id: 8, image: cover, description: "India's Got Latent ft. @Ravi Gupta, @Beer Biceps, @Rebel Kid" },
    { id: 9, image: cover, description: "India's Got Latent ft. @Ravi Gupta, @Beer Biceps, @Rebel Kid" },
    { id: 10, image: cover, description: "India's Got Latent ft. @Ashish Chanchalani, @Beer Biceps, @Rebel Kid" },
    { id: 11, image: cover, description: "India's Got Latent ft. @Tanmay Bhatt, @Nishant Tanwar, @Zakin Khan" },
    { id: 12, image: cover, description: "India's Got Latent ft. @Tanmay Bhatt, @Nishant Tanwar, @Zakin Khan" },
  ];

  const [visibleCards, setVisibleCards] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSet = 4;

  useEffect(() => {
    // Initialize visible cards
    updateVisibleCards(0);
  }, []);

  const updateVisibleCards = (startIndex: number) => {
    const wrappedIndex = startIndex % cards.length;
    const newVisibleCards: Card[] | any = [];

    for (let i = 0; i < cardsPerSet; i++) {
      const index = (wrappedIndex + i) % cards.length;
      newVisibleCards.push(cards[index]);
    }

    setVisibleCards(newVisibleCards);
  };

  const moveSlider = () => {
    const nextIndex = (currentIndex + cardsPerSet) % cards.length;
    setCurrentIndex(nextIndex);
    updateVisibleCards(nextIndex);
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden mt-16 px-14">
      <div className="flex justify-between items-center mb-6">
        <div className="text-2xl font-bold text-yellow-100">Latent+ Episodes</div>
        <button
          onClick={moveSlider}
          className="text-yellow-100 hover:text-gray-300 transition duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleCards.map((card) => (
          <div
            key={`${card.id}-${currentIndex}`}
            className="flex flex-col bg-black shadow-lg rounded-lg transition-all duration-300 opacity-0 animate-fadeIn"
          >
            <div className="relative">
              <Image
                src={card.image}
                alt={`Card Image ${card.id}`}
                width={320}
                height={200}
                className="rounded-lg w-full"
              />
              {/* Overlay with lock icon */}
              <div className="absolute inset-0 bg-black bg-opacity-65 flex items-center justify-center">
                <Image src={lock} alt="Lock Icon" />
              </div>
            </div>
            <p className="mt-4 pb-4 text-gray-300 text-[14px]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumEpisodesList;
