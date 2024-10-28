import LOGO from '@/assets/navbarLogo.svg'
import navItems from '@/constant/navItems'
import NavItem from '@/types/NavItem'
import { Link, useLocation } from 'react-router-dom'
import SearchInput from './SearchInput'
import { useContext } from 'react'
import { SearchContext } from '@/context/searchContext'


const Navbar = () => {
    const location = useLocation();
    const { searchValue, setSearchValue } = useContext(SearchContext)
    const isSearchPage = location.pathname === '/search'

    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Renders a single navigation item as a list element.
     * 
     * @param {{ item: NavItem }} props The item to render.
     * @returns {JSX.Element} The rendered list item.
     */
    /******  143aba23-c0b2-4f69-b512-4d65d08e6c64  *******/
    const NavItem = ({ item }: { item: NavItem }) => {
        return (
            <li key={item.name}>
                <a href={item.href} className={`md:text-xl text-xs 
            -tracking-[0.2] 
            ${item.href === '/' ?
                        'font-bold text-[#3063E6] decoration-inherit underline underline-offset-4'
                        : 'font-normal'}`}>
                    {item.name}
                </a>
            </li>
        )
    }

    return (
        <nav className="max-w-full mx-auto md:py-6 py-4 shadow-lg">
            <div className="container mx-auto px-4 lg:w-3/4 w-full overflow-hidden">
                <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
                    <Link to="/" onClick={() => setSearchValue('')}>
                        <img className='md:max-w-[220px] sm:max-w-[150px] max-w-[120px]'
                            src={LOGO} alt="Logo" />
                    </Link>
                    <ul className="space-x-4 flex max-sm:mt-2">
                        {
                            isSearchPage ? (
                                <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
                            ) : navItems.map((item) =>
                            (
                                <NavItem key={item.name} item={item} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar