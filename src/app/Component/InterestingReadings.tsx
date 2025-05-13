import { useContext } from 'react';
import { ReadingContext } from '../Context/LecturaContext';

const InterestingReadings = () => {
  const context = useContext(ReadingContext);

  if (!context) {
    return <div>Error: ReadingContext not found</div>;
  }

  const { readings } = context;

  return (
    <div>
      <h1>Temas Interesantes</h1>
      <ul>
        {readings.filter((reading) => reading.interesante).map((reading) => (
          <li key={reading.id}>{reading.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default InterestingReadings;
