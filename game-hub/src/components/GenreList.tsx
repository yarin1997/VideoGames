import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({onSelectGenre}:Props) => {
    const {data, isLoading, error} = useGenres();
    if(error) null;
    if(isLoading) return <Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={2}>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={()=>onSelectGenre(genre)} fontSize={'lg'} variant={"link"}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList