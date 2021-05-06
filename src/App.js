import React, { useState } from "react"; // useEffect
import "./App.css";
import { Typography, Card, CardContent, Grid  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
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
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  }
}); 
const classes = useStyles();



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

          <Card className={classes.root} variant="outlined">
          <CardContent>
          <div className ="container">
          <Typography> 
          <img src={data.sprites["front_default"]} alt="pokemon" />
           </Typography>
           <Typography>
            <div className="divTable">
              <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell">Type</div>
                <div className="divTableCell">{pokemonType}</div>
              </div>
              
              <div className="divTableRow">
                <div className="divTableCell">Height</div>
                <div className="divTableCell">{" "}{Math.round(data.height * 3.9)}"in</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Weight</div>
                <div className="divTableCell">{" "} {Math.round(data.weight / 4.3)} lbs</div>
              </div>
              </div>
              </div>
              </Typography>
           </div>
           
           </CardContent>
           </Card>
        </Grid>
        )
      })}
    </div>
    

  );
};

export default App;
