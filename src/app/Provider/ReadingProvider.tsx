"use client";

import { useState, ReactNode } from 'react';
import { ReadingContext } from '../Context/LecturaContext';
import { Reading } from '../Models/Readins';

export const ReadingProvider = ({ children }: { children: ReactNode }) => {
  const [readings, setReadings] = useState<Reading[]>([
    { id: 1, titulo: 'Manga Naruto', interesante: false },
    { id: 2, titulo: 'Manga DANDAN', interesante: true },
    { id: 3, titulo: 'Manga Jujutsu', interesante: true },
  ]);

  const toggleInteresting = (id: number) => {
    setReadings((prevReadings) =>
      prevReadings.map((reading) =>
        reading.id === id ? { ...reading, interesante: !reading.interesante } : reading
      )
    );
  };

  return (
    <ReadingContext.Provider value={{ readings, setReadings, toggleInteresting }}>
      {children}
    </ReadingContext.Provider>
  );
};
