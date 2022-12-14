
import Welcome from '../componentes/Welcome';

import SitioWebLayout from '../layouts/SitioWebLayout';
import HomePage from './HomePage';

import Cities from './Cities';
import '../styles/footer.css'
import '../styles/welcome.css'
import '../styles/header.css'
import '../styles/carousel.css'
import '../styles/home.css'
import '../styles/showcities.css'
import '../styles/newcities.css'
import '../styles/sigleCard.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import UnderConstruction from '../componentes/UnderConstruction';
import ShowCities from '../componentes/ShowCities';
import NewCities from '../componentes/NewCities';
import NotFound from '../componentes/NotFound';
function App() {
  return (
    <div className="App">


      <>
        <BrowserRouter>

          <SitioWebLayout>
          <Routes>

              <Route path='/home' element={<HomePage/>}/>
              <Route path='/' element={<Welcome/>}/>
              <Route path='/cities' element={<Cities/>}/>
              <Route path='/showcities' element={<ShowCities/>}/>
              <Route path='/newcities' element={<NewCities/>}/>
              <Route path='/under' element={<UnderConstruction/>}/>
              <Route path='/*' element={<NotFound/>}/>
        
          </Routes>
          </SitioWebLayout>

        </BrowserRouter>

      </>
      



    </div>
  );
}

export default App;
