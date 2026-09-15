import {Link} from 'react-router-dom'
import {Home,Info,Package,Mail} from 'lucide-react'

const NavBar = () => {
  return (
    <nav className='bg-blue-400 text-white shadow-xl'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between h-16 items-center'>
            <div className='flex items-center space-x-2'>
                <span className='text-2xl font-bold'>Projeto</span>
            </div>

            <div className='hidden md:flex space-x-2 items-center'>
                <Link to="/" className='flex items-center gap-2 px-3 py-2 font-medium hover:text-amber-300'><Home/>Home</Link>
                <Link to="/sobre" className='flex items-center gap-2 px-3 py-2 font-medium hover:text-amber-300'><Info/>Sobre</Link>
                <Link to="/produtos" className='flex items-center gap-2 px-3 py-2 font-medium hover:text-amber-300'><Package/>Produtos</Link>
                <Link to="/contato" className='flex items-center gap-2 px-3 py-2 font-medium hover:text-amber-300'><Mail/>Contato</Link>            
            </div>
        </div>
      </div>

    </nav>
  )
}

export default NavBar
