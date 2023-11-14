import { useState } from "react";
import { FC } from 'react';
import "./Search.css";
import SearchResult from "./SearchResult";

export type Photo = {
  title: string;
  thumbnailUrl: string;
};

type SearchResultsListProps = {
  results: Photo[];
  onSelect: (result: Photo) => void;
};

const SearchResultsList: FC<SearchResultsListProps> = ({ results }) => {
  const [selectedPhotos, setSelectedPhotos] = useState<Photo[]>([]);

  const handleSelect = (photo: { title: string; thumbnailUrl: string }) => {
    setSelectedPhotos((prevSelectedPhotos) => [...prevSelectedPhotos, photo]);
  };

  return (
    <div className="results-list">
      {results.map((result, id) => {
        const isSelected = selectedPhotos.some((selectedPhoto) => selectedPhoto.title === result.title);
        return (
          <SearchResult
            key={id}
            photo={result}
            onSelect={() => handleSelect(result)}
            isSelected={isSelected}
          />
        );
      })}
      {selectedPhotos.length > 0 && (
        <div className="selected-photos">
          <h2>Selected Photos:</h2>
          {selectedPhotos.map((selectedPhoto, index) => (
            <div key={index} className="selected-photo">
              <img src={selectedPhoto.thumbnailUrl} alt={selectedPhoto.title} />
              <p>{selectedPhoto.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchResultsList;