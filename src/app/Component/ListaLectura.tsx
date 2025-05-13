"use client";

import { useContext } from 'react';
import { ReadingContext } from '../Context/LecturaContext';

const ReadingList = () => {
  const context = useContext(ReadingContext);

  if (!context) {
    return <div>Error: ReadingContext not found</div>;
  }

  const { readings, toggleInteresting } = context;

  return (
    <div>
      <h1>Todos los temas</h1>
      <ul>
        {readings.map((reading) => (
          <li key={reading.id}>
            {reading.titulo} - {reading.interesante ? 'Interesante' : 'No interesante'}
            <button onClick={() => toggleInteresting(reading.id)}>
              Alternar Interesante
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingList;
