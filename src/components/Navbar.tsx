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

    const NavItem = ({ item }: { item: NavItem }) => {
        return (
            <li key={item.name}>
                <a href={item.href} className={`text-xl 
            -tracking-[0.2] ${item.href === '/' ? 'font-bold text-[#3063E6] decoration-inherit underline underline-offset-4' : 'font-normal'}`}>
                    {item.name}
                </a>
            </li>
        )
    }

    return (
        <nav className="max-w-full mx-auto py-6 shadow-lg">
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={() => setSearchValue('')}>
                        <img height={62} width={220} src={LOGO} alt="Logo" />
                    </Link>
                    <ul className="flex space-x-4">
                        {
                            isSearchPage ? (
                                <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
                            ) : navItems.map((item) =>
                            (
                                <NavItem item={item} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar