import React, { useEffect, useState } from "react";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    CircularProgress,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import axios from "axios";
  
  const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
      paddingTop: "20px",
      paddingLeft: "50px",
      paddingRight: "50px",
    },
    cardMedia: {
      margin: "auto",
    },
    cardContent: {
      textAlign: "center",
    }
  }));
  
  const CardsContainer = (props) => {
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState({});
    //const [filter] = useState("");
  
    useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
        .then(function (response) {
          const { data } = response;
          const { results } = data;
          const newPokemonData = {};
          results.forEach((pokemon, index) => {
            newPokemonData[index + 1] = {
              id: index + 1,
              sprite:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`,
              name: pokemon.name,
            };
          });
          setPokemonData(newPokemonData);
        });
    }, []);
  
    const getPokemonCard = (pokemonId) => {
      const { sprite } = pokemonData[pokemonId];
      return (
        <Grid item xs={3} key={pokemonId}>
          <Card >
            <CardMedia
              className={classes.cardMedia}
              image={sprite}
              style={{ width: "130px", height: "130px" }}
            />
            <CardContent className={classes.cardContent}>
              
            </CardContent>
          </Card>
        </Grid>
      );
    };
  
    return (
      <>
        
        {pokemonData ? (
          <Grid container spacing={2} className={classes.pokedexContainer}>
            {Object.keys(pokemonData).map(
              (pokemonId) =>
                pokemonData[pokemonId].name &&
                getPokemonCard(pokemonId)
            )}
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </> 
    ); 
  };
  
  export default CardsContainer;