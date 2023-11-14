import { FC } from 'react';
import './Search.css';

type Photo = {
  title: string;
  thumbnailUrl: string;
};

interface SearchResultProps {
  photo: Photo;
  onSelect: () => void;
  isSelected: boolean;
}

const SearchResult: FC<SearchResultProps> = ({ photo, onSelect, isSelected }) => {
  return (
    <div
      className={`search-result ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  );
};

export default SearchResult;