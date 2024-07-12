import React, { useState } from 'react'
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenre';
export default function App() {
  const [selectedGenre, setSelectedGenre]=useState<Genre|null>(null)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024 px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
      <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5} >
         <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area={"main"} >
          <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}