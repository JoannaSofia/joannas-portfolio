'use client';
import React, { useState, useEffect } from 'react';
import { DndContext, closestCenter, DragStartEvent, DragEndEvent, DragOverlay } from '@dnd-kit/core';
import styles from './CardSortingSection.module.css';
import { CardDeckCard, initialCards } from './iconmap';
import { DraggableCard } from './DraggableCard';
import { DroppableZone } from './DroppableZone';
import { moveCardBetweenZones } from './logic';
import { div } from 'framer-motion/client';

export default function CardSortingSection() {
  const [hasMounted, setHasMounted] = useState(false);
  const [deck, setDeck] = useState(initialCards);
  const [activeCard, setActiveCard] = useState<CardDeckCard | null>(null);
  const [zones, setZones] = useState<Record<string, CardDeckCard[]>>({
    Me: [],
    Future: [],
    Maybe: [],
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // When dragging starts
  const handleDragStart = (event: DragStartEvent) => {
    const draggedId = event.active.id as string;

    // Look for the card in all locations
    let foundCard = deck.find((c) => c.id === draggedId);
    if (!foundCard) {
      for (const cards of Object.values(zones)) {
        const match = cards.find((c) => c.id === draggedId);
        if (match) {
          foundCard = match;
          break;
        }
      }
    }

    if (foundCard) {
      setActiveCard(foundCard);
    }
  };
      const isDeckEmpty = deck.length === 0;
  const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;

  setActiveCard(null);

  if (!over) return;

    const draggedId = active.id as string;
    const zoneId = over.id as keyof typeof zones;


    // Look in deck
    let draggedCard = deck.find((card) => card.id === draggedId);

    // If not in deck, look in zones
    if (!draggedCard) {
      for (const cards of Object.values(zones)) {
        const found = cards.find((c) => c.id === draggedId);
        if (found) {
          draggedCard = found;
          break;
        }
      }
    }

    if (!draggedCard) return;

    // Remove from wherever it was
    setDeck((prev) => prev.filter((c) => c.id !== draggedId));
    setZones((prevZones) => {
      const updatedZones = { ...prevZones };

      for (const zone in updatedZones) {
        updatedZones[zone] = updatedZones[zone].filter((c) => c.id !== draggedId);
      }

      return moveCardBetweenZones(draggedCard!, zoneId, updatedZones);
    });
  };


  if (!hasMounted) return null;

  
return (
  <div id="cardsorting" className={styles.container}>
    <div className={`sectionDivider ${styles.cardSortingDivider}`}>
    {/* Card sorting content */}
    <div className={styles.cardSortingContent}>
  
    <h2 className={styles.heading}>Card Sorting</h2>

    <div className={styles.instruction}>
      <p>Pick the cards that resonate with you.</p>
      <p>Drag them into the category that best describes you.</p>
      <p>You can always change your mind.</p>
    </div>

    <div className={styles.cardSortingContainer}>
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        autoScroll={false}
      >
        <DragOverlay>
          {activeCard ? (
            <DraggableCard card={activeCard} />
          ) : null}
        </DragOverlay>

        <div className={styles.sortingLayout}>
          <div className={styles.cardDeck}>
  {!isDeckEmpty ? (
    deck.slice(0, 3).map((cardObj, index) => {
      const rotations = [-3, 2, -1];
      const offsets = [2, 4, 6];

      return (
        <div
          key={cardObj.id}
          className={styles.cardStack}
          style={{
            transform: `rotate(${rotations[index]}deg) translateX(${offsets[index]}px)`,
            zIndex: 20 - index,
          }}
        >
          <DraggableCard card={cardObj} />
        </div>
      );
    })
  ) : (
    <div className={styles.completionMessage}>
      <h3>That's a wrap!</h3>
      <p>
        You've sorted all the cards. Take a moment
        to look at your choices.
      </p>
      <span>20 cards sorted</span>
    </div>
  )}
</div>

          <div className={styles.dropZoneWrapper}>
            {Object.entries(zones).map(([zone, cards]) => (
              <DroppableZone key={zone} id={zone}>
                {cards.map((card) => (
                  <DraggableCard key={card.id} card={card} />
                ))}
              </DroppableZone>
            ))}
          </div>
        </div>
      </DndContext>
    </div>
  </div>
  </div>
  </div>
);
}
