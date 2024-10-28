import LOGO from '../assets/navbarLogo.svg'
import navItems from '@/constant/navItems'

const Navbar = () => {
    return (
        <nav className="max-w-full mx-auto py-6 shadow-lg">
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-center ma">
                    <img height={62} width={220} src={LOGO} alt="" />

                    <ul className="flex space-x-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href="{item.href}" className={`text-xl 
                            -tracking-[0.2] ${item.href === '/' ? 'font-bold text-[#3063E6] decoration-inherit underline underline-offset-4' : 'font-normal'}`}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar