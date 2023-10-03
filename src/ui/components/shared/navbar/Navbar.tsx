import { useState } from 'react';
import Image from 'next/image';
import { useSelectorState, useUIStore } from '@/src/core/hooks';

export const Navbar = () => {
 const { theme } = useSelectorState((state) => state.ui);
 const { toggleTheme } = useUIStore();
 const [isScrolling, setIsScrolling] = useState(false);

 return (
  <div className={`navbar ${isScrolling ? 'in-scrolling' : ''}`}>
   <div className='logo'>
    <Image
     src={`/images/logo-${theme ? 'dark' : 'light'}.png`}
     width={2560}
     height={2560}
     alt={`Logo de Patitas Urbanas tema ${theme ? 'oscuro' : 'claro'}`}
    />
   </div>

   <div className='hamburger'>
    <div className='bar'></div>
    <div className='bar'></div>
    <div className='bar'></div>
   </div>

   <div className='navigation'>
    <ul>
     <li>Inicio</li>
     <li>Sobre Nosotros</li>
     <li>Adopciones</li>
     <li>Donaciones</li>
     <li>Tienda</li>
     <li>Contacto</li>
     <div className='toggle-theme'>
      <div className={`${!theme ? 'active-theme' : 'inactive-theme'}`} onClick={() => toggleTheme(true)}>
       <Image src={`/images/moon-icon.png`} width={800} height={800} alt={`Icono de la Luna para el tema oscuro`} />
      </div>
      <div className={`${theme ? 'active-theme' : 'inactive-theme'}`} onClick={() => toggleTheme(false)}>
       <Image src={`/images/sun-icon.png`} width={360} height={360} alt={`Icono del Sol para el tema claro`} />
      </div>
     </div>
    </ul>
   </div>
  </div>
 );
};
