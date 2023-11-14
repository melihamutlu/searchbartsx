import { useState } from 'react'
import "./App.css";
import { SearchBar } from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList"; // SearchResultsListProps'i import et

function App() {
  const [results, setResults] = useState<any[]>([]);

  return (
    <div>
      <h2>Photo Search App</h2>
      <SearchBar setResults={setResults} />
      <SearchResultsList results={results} onSelect={function (_result: any): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}


export default App
