import HEROLOGO from '@/assets/heroLogo.svg'
import SearchInput from '@/components/SearchInput'
import { SearchContext } from '@/context/searchContext'
import { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <>
      <Navbar />
      <div className="container mx-auto md:w-1/2 w-full">
        <div className="flex flex-col items-center justify-center mt-36">
          <div className="flex flex-none gap-x-6 md:mb-20">
            <img className='w-full max-sm:p-4 sm:max-md:mb-10' src={HEROLOGO} alt="Hero Logo" />
          </div>
          <div className="w-full max-sm:p-4">
            <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
