import { FC, useState, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';
import React from 'react';

interface SearchBarProps {
    setResults: React.Dispatch<React.SetStateAction<any[]>>;
}

export const SearchBar: FC<SearchBarProps> = ({ setResults }) => {
  const [input, setInput] = useState<string>('');

  const fetchData = (value: string) => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((photo: any) => {
          return (
          value &&
          photo &&
          photo.title &&
          photo.title.toLowerCase().includes(value)
          );
        });
        console.log(results);
        setResults(results);
      })
      .catch((error) => {
        console.error('Error fatching data:', error);
      });
  };

  const handleChange = (value: string) => {
    console.log('Selected value:', value);
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      />
    </div>
  );
};