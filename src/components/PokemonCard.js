import React, { useState } from "react";     
import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
        
const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    }
  }); 
  

const PokemonCard = (props) => {
    const classes = useStyles();
   
    const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
    const getPokemon = async () => {
        const toArray = []; //array
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${props.name}`;//get indivdual pokemon from api
          const res = await axios.get(url);
          toArray.push(res.data);
          setPokemonType(res.data.types[0].type.name)
          setPokemonData(res.data);
          console.log(toArray);
          console.log(res);
        }catch (e) { //error
          console.log(e);
        }
      };
    return(
        //<Grid
           /* container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: "25vh" }}>*/

          <Card className={classes.root} variant="outlined" onClick={getPokemon}>
          <CardContent>
          <div className ="container">
          <Typography> 
          <img src={props.sprite} alt="pokemon" /> 
           </Typography>
           <Typography>
            <div className="divTable">
              <div className="divTableBody">
              <h2>{props.name}</h2>
              <div className="divTableRow">
                <div className="divTableCell">Type</div>
    
                <div className="divTableCell">{pokemonType}</div>
              </div>
              
              <div className="divTableRow">
                <div className="divTableCell">Height</div>
                <div className="divTableCell">{" "}{Math.round(pokemonData.height * 3.9)}"in</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Weight</div>
                <div className="divTableCell">{" "} {Math.round(pokemonData.weight / 4.3)} lbs</div>
              </div>
              </div>
              </div>
              
              </Typography>
           </div>
           
           </CardContent>
           </Card>
       // </Grid>
    );
}

export default PokemonCard