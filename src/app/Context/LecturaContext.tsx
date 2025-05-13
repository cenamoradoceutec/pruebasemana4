
import { createContext } from "react";
import { Reading } from "../Models/Readins";

interface Reading {
  id: number;
  titulo: string;
  interesante: boolean;
}

interface ReadingContextProps {
  readings: Reading[];
  toggleInteresting: (id: number) => void;
}

export const ReadingContext = createContext<ReadingContextProps | undefined>(undefined);

export const ReadingProvider = ({ children }: { children: ReactNode }) => {
  const [readings, setReadings] = useState<Reading[]>([
    { id: 1, titulo: 'Manga Anime', interesante: false },
    { id: 2, titulo: 'Naruto Manga', interesante: true },
  ]);

  const toggleInteresting = (id: number) => {
    setReadings((prevReadings) =>
      prevReadings.map((reading) =>
        reading.id === id ? { ...reading, interesante: !reading.interesante } : reading
      )
    );
  };

  return (
    <ReadingContext.Provider value={{ readings, toggleInteresting }}>
      {children}
    </ReadingContext.Provider>
  );
};
