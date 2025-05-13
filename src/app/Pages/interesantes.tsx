import InterestingReadings from '../Component/InterestingReadings';
import { ReadingProvider } from '../Context/LecturaContext';  


const Interesantes = () => {
  return (
    <ReadingProvider>
      <InterestingReadings />
    </ReadingProvider>
  );
};

export default Interesantes;
