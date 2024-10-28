import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface SearchContextType {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType>({
    searchValue: '',
    setSearchValue: () => { },
});

const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider >
    )
}

export { SearchContext, SearchProvider };

