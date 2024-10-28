import './App.css'
import LOGO from './assets/Logo.svg'
import BrandName from './assets/BrandName.svg'
import { Input } from '@/components/ui/input'

function App() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center mt-36">
        <div className="flex flex-none gap-x-6 mb-20">
          <img className='w-full' src={LOGO} alt="Logo" />
          <img className='w-full' src={BrandName} alt="Brand name" />
        </div>
        <Input className="w-1/2 bg-white" type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default App
