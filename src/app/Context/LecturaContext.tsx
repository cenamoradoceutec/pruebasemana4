"use client";

import { createContext } from 'react';
import { Reading } from '../Models/Readins';

interface ReadingContextProps {
  readings: Reading[];
  setReadings: (readings: Reading[]) => void;
  toggleInteresting: (id: number) => void;
}

export const ReadingContext = createContext<ReadingContextProps>({
  readings: [],
  setReadings: () => {},
  toggleInteresting: () => {},
});
