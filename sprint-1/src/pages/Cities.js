import CallToAction from '../componentes/CallToAction';
import EventCarousel from '../componentes/EventCarousel';
import '../styles/carousel.css'

export default function Cities () {
    return (
        /* ARMAR UN COMPONENTE
        //buscador
        let [keyword,setkeyword]=useState()

        <inp TEXT onchange={setkeyword{e.target.value}} >< inp>

        return(
            <showCities data={keyword} cities=de momento vacio hasta que le pasemos las cards>
        )
        
        */
        
      <>    

                <EventCarousel />
                <CallToAction linkTo="/showcities" TextButon='See Cities' Clases ="button" ides='buttonShow'/>
            
        </>
    )
}