import CallToAction from "../componentes/CallToAction"
import {useState} from "react"
export default function InputSearch(prop){
    //variables///////////////////////////////////////////////////////////////////
    let arr = prop.datas
    const [keyword,setKeyword]=useState('')
    const [show,setShow]=useState('')           
    console.log(show)
    let Mayuscula = (keyword.charAt(0).toUpperCase())       /////////////////////////////////
    let Minuscula = (keyword.substring(1,keyword.length))   //ARREGLAR////////////////////////
    let Combinacion = Mayuscula.concat(Minuscula)           ///////////////////////////////////
    //funciones//////////////////////////////////////////////////////////////////
    let change =(e)=>{
        setKeyword(e.target.value)
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        setShow(Combinacion)
    
    
    }
   
    //funcion para render con map/////////////////////////////////////////////////
    let cityShow =(city)=>(
        <div className="card">
        <div className="imgCard">
        <img className="imgCard1" src={city.img}></img>

        </div>
        <div className="bodyCard">
            <h4 className="titleCard">{city.city}</h4>
            <p className="pCard">its a good idea</p>
            <p className="priceCard">$500</p>
                 <CallToAction linkTo='/notfound' TextButon="Buy" Clases="buttonBuy"/>
        </div>
    </div>

    )
    let error = <div className="ErrorCities">//////////////////////page notfound ///////////////////////////
        <h4>Im sorry , we dont have that city</h4>
        <img src="https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?compress=1&resize=400x300"/> 
        <p>please write us for more information over other destinies</p>

    </div>

    
        console.log(Combinacion)
    return(
        
        <div className="ContainerElem">

        
        <form  className="inpF" onSubmit={handleSubmit} >
        <input type="text" onChange={change} placeholder="Write a city" value={keyword}  className="inputsearch"></input>
        <button  className="buttonSearch"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/></svg></button>
        </form>
        <div className="ContainerCard">
        { show!='' ?arr.filter((e) => e.city.includes(show)).map(cityShow):''}
        {show!='' && arr.filter((e)=>e.city.includes(show))==false?error:''}
        </div>
        </div>
        

    )

}