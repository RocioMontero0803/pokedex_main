import React, { useState } from "react"; // useEffect
import "./App.css";
import { Grid } from "@material-ui/core";
import PokemonCard from "./components/PokemonCard"
import CardsContainer from "./components/CardsContainer"
import axios from "axios";



const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = []; //array
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;//get indivdual pokemon from api
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray);
      console.log(res);
    }catch (e) { //error
      console.log(e);
    }
  };

 /* useEffect(() => {
    getPokemon();
  }, [])
*/
  /*useEffect (() => {
    axios.get('http://pokeapi.co/api/v2/pokemon')
      .then((response) => {
      })
      .catch((err) => {
        console.log(err)
      })
  }) */

const handleChange = (e) => {
  setPokemon(e.target.value.toLowerCase())
}

const handleSubmit = (e) => {
  e.preventDefault();
  getPokemon();
}


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} placeholder = "Enter Pokemon Name"/>
        </label>
      </form>

      {pokemonData.map((data) => {
        return(
          
         
          <Grid
           container
           spacing={0}
           alignItems="center"
           justify="center"
           style={{ minHeight: "25vh" }}>
          <PokemonCard sprite={data.sprite} pokemonType={pokemonType} weight={data.weight} height={data.height} name={data.name}  >
            <p><img src={data.sprite} alt=" "/></p>  
          </PokemonCard>
     </Grid>
        )
        
      })}
      <CardsContainer></CardsContainer>
    </div>
    

  );
};

export default App;
