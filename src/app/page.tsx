
import ReadingList from './Component/ListaLectura';
import { ReadingProvider } from './Context/LecturaContext';


export default function Home() {
  return (
    
<ReadingProvider>
  <ReadingList />
</ReadingProvider>

  );
}
