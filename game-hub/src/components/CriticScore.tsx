import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props{
    score: number
}
const CriticScore = ({score}:Props) => {
  return (
    <Badge colorScheme={score > 90 ? 'green' : score > 60 ? 'yellow' : ''} paddingX={2} borderRadius={'4px'}>{score}</Badge>
  )
}

export default CriticScore