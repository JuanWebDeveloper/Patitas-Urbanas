import { Fragment } from 'react';
import Image from 'next/image';
import { useSelectorState, useUIStore } from '@/src/core/hooks';

const HomePage = () => {
 const { theme } = useSelectorState((state) => state.ui);
 const { toggleTheme } = useUIStore();

 return (
  <Fragment>
   <section>
    <Image
     src={`/images/logo-${theme ? 'dark' : 'light'}.png`}
     width={512}
     height={512}
     alt={`Logo for the ${theme ? 'dark' : 'light'} theme`}
    />
    <div>
     <button onClick={() => toggleTheme(true)}>Dark</button>
     <button onClick={() => toggleTheme(false)}>Light</button>
    </div>
   </section>

   <div className='bg-secondary'>
    <h2>
     Patitas <span>Urbanas</span>
    </h2>
    <h3>
     Patitas <span>Urbanas</span>
    </h3>
    <p>
     <span>Patitas Urbanas:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum adipisci ducimus
     cupiditate. Similique, exercitationem reprehenderit libero mollitia modi recusandae quam sapiente inventore, in nihil omnis
     labore rerum, ratione voluptates reiciendis soluta deserunt qui obcaecati beatae error necessitatibus accusantium iure
     temporibus. Magnam earum recusandae, amet libero fugiat dolores sit alias adipisci.
    </p>
   </div>
   <div className='bg-tertiary'>
    <h2>
     Patitas <span>Urbanas</span>
    </h2>
    <h3>
     Patitas <span>Urbanas</span>
    </h3>
    <p>
     <span>Patitas Urbanas:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum adipisci ducimus
     cupiditate. Similique, exercitationem reprehenderit libero mollitia modi recusandae quam sapiente inventore, in nihil omnis
     labore rerum, ratione voluptates reiciendis soluta deserunt qui obcaecati beatae error necessitatibus accusantium iure
     temporibus. Magnam earum recusandae, amet libero fugiat dolores sit alias adipisci.
    </p>
   </div>
   <div className='bg-fourth'>
    <h2>
     Patitas <span>Urbanas</span>
    </h2>
    <h3>
     Patitas <span>Urbanas</span>
    </h3>
    <p>
     <span>Patitas Urbanas:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum adipisci ducimus
     cupiditate. Similique, exercitationem reprehenderit libero mollitia modi recusandae quam sapiente inventore, in nihil omnis
     labore rerum, ratione voluptates reiciendis soluta deserunt qui obcaecati beatae error necessitatibus accusantium iure
     temporibus. Magnam earum recusandae, amet libero fugiat dolores sit alias adipisci.
    </p>
   </div>
  </Fragment>
 );
};

export default HomePage;
