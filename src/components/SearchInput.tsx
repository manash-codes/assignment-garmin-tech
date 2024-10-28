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
                className="h-14 px-4 py-2 text-xl bg-white rounded-xl border border-[#D7D7EA] pl-10 max-sm:h-10 max-sm:text-sm"
                type="text"
                name="search"
                value={searchValue}
                onKeyDown={handleSearchSubmit}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Type and click enter to search" />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <img className='w-6 h-6 max-sm:w-5 max-sm:h-5' src={GLASS} alt="Glass" />
            </div>
        </div>
    )
}

export default SearchInput
