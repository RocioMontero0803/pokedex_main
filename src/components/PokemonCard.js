import React from "react";     
import { Typography, Card, CardContent, Grid  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
        
const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    }
  }); 
  

const PokemonCard = (props) => {
    const classes = useStyles();
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
          <img src={props.sprites["front_default"]} alt="pokemon" />
           </Typography>
           <Typography>
            <div className="divTable">
              <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell">Type</div>
                <div className="divTableCell">{props.pokemonType}</div>
              </div>
              
              <div className="divTableRow">
                <div className="divTableCell">Height</div>
                <div className="divTableCell">{" "}{Math.round(props.height * 3.9)}"in</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Weight</div>
                <div className="divTableCell">{" "} {Math.round(props.weight / 4.3)} lbs</div>
              </div>
              </div>
              </div>
              </Typography>
           </div>
           
           </CardContent>
           </Card>
        </Grid>
    );
}

export default PokemonCard