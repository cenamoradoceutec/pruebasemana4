
import ReadingList from './Component/ListaLectura';
import { ReadingProvider } from './Provider/ReadingProvider';


export default function Home() {
  return (
    
<ReadingProvider>
  <ReadingList />
</ReadingProvider>

  );
}
