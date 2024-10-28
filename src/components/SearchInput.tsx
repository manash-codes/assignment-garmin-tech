import GLASS from '@/assets/glass.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './ui/input';

interface SearchInputProps {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ searchValue, setSearchValue }: SearchInputProps) => {
    const navigate = useNavigate();

    const handleSearchSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && searchValue.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchValue)}`);
        }
    };

    return (
        <div className="relative w-full">
            <Input
                className="p-3 bg-white rounded-xl border border-[#D7D7EA] pl-10"
                type="text"
                name="search"
                value={searchValue}
                onKeyDown={handleSearchSubmit}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search" />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <img src={GLASS} alt="Glass" />
            </div>
        </div>
    )
}

export default SearchInput
