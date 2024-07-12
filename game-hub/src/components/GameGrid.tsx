
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeletons from './GameCardSkeletons';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenre';


interface Game {
    id:number;
    name:string;
}
interface Props {
    selectedGenre:Genre|null
}

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={10} spacing={4}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeletons key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid