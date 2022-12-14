import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import Login from './Login'
import '../styles/header.css'


const pages = [
    {name: 'Home', to: '/home'},
    {name: 'Cities', to: '/cities'},
    {name: 'New Cities', to: '/newcities'},
    /* {name: 'Contact', to: '/contact'}, */ // pagina de contaacto suma?
]

const link = (page) => <LinkRouter className='Header-link' to={page.to} key={page.name}>{page.name}</LinkRouter>

export default function Header() {
    const [open, setOpen] = useState(false)

    const handleOpenMenu = () => {
        if(open == true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className="Header">
            <div>
              <img className = "logoViaje" src="http://localhost:3000/logosinfondo.png" alt="Logo"></img>
              {/* <h2>JONAS</h2> */}
            </div>
            <div className='Maping'>
            {pages.map(link)}
            </div>



            {/* menu hamburguesa */}
            <div className="Burger">
            <button className='ButtonBurger' onClick={handleOpenMenu}>☰</button>
             <div className='ContenedorBurger'> 
                {
                    open
                        ? <ul className='LinkBurger'>
                             <li>{pages.map(link)}</li>
                        </ul>
                        : null
                }
            </div>
        </div>
        </div>
    )
}