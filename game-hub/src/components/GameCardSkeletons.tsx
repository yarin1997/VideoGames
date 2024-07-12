import{Card,Skeleton, CardBody, SkeletonText} from '@chakra-ui/react'
import GameCardContainer from './GameCardContainer';
const GameCardSkeletons = () => {
  return (
    <Card >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeletons