import React, { useState } from 'react'
import { Button, ButtonGroup, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenre';
import PlatformSelecter from './components/PlatformSelecter';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery{
  genre:Genre | null;
  platform:Platform | null;
}
export default function App() {
  const [gameQuery, setGameQuery]=useState<GameQuery>({} as GameQuery)

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} //setGameQuery(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={10} marginBottom={5}>
          <PlatformSelecter onSelectedPlatform={(platform)=>setGameQuery({...gameQuery,platform})} />
            <SortSelector/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
