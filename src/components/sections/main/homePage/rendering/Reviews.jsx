'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { dataReviews } from '../../../../../data/reviews';

function ReviewCard({ review }) {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="select flex size-80 select-none flex-col justify-between gap-4 rounded-lg border-2 border-primary/30 bg-primary p-4 py-6 text-left shadow-md shadow-primary/40 transition-all duration-300 hover:border-secondary/30 hover:bg-secondary hover:text-textColor hover:shadow-lg hover:shadow-secondary/40 dark:hover:text-black md:h-64 md:w-[30rem] ">
      <div className="flex items-center gap-2 pb-4 hover ">
        <Image
          src={review.googleImage}
          alt={review.name}
          width={35}
          height={35}
          quality={50}
          loading="lazy"
        />
        <h3 className="font-bold text-textColor">{review.name}</h3>
      </div>
      <p className="text-sm text-white">{review.reviewDescription}</p>
      <div className="mt-auto flex gap-4">
        <div>{review.scoreReview}</div>
        <p className="text-sm text-textColor">{review.timeReview}</p>
      </div>
    </div>
  );
}

export function Reviews() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      const updateCardWidth = () => {
        const cardElement = containerRef.current.querySelector('.select');
        if (cardElement) {
          setCardWidth(cardElement.offsetWidth + 8); // 8px de gap
        }
      };

      updateCardWidth();
      window.addEventListener('resize', updateCardWidth);

      return () => window.removeEventListener('resize', updateCardWidth);
    }
  }, [containerRef]);

  const totalWidth = dataReviews.length * cardWidth;

  useEffect(() => {
    if (!isHovered && !isDragging) {
      const scrollInterval = setInterval(() => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 1;
          return newPosition >= totalWidth ? 0 : newPosition;
        });
      }, 50);

      return () => clearInterval(scrollInterval);
    }
  }, [totalWidth, isHovered, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = scrollPosition;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // multiplier pour la vitesse de défilement
    setScrollPosition(scrollLeft.current - walk);
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const reviews = [...dataReviews, ...dataReviews];

  return (
    <div
      className="cursor-grab overflow-hidden"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onTouchStart={(e) => handleMouseDown(e.touches[0])}
      onTouchMove={(e) => handleMouseMove(e.touches[0])}
      onTouchEnd={handleMouseUpOrLeave}
    >
      <div className="container mx-auto pb-20 lg:py-24">
        <div
          className="flex gap-6 transition-transform duration-1000 ease-linear"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-80 shrink-0 md:w-[30rem]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
