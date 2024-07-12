import  Bullseye  from "../assets/bulls-eye.webp"
import ThumbsUp  from "../assets/thumbs-up.webp"
import meh from "../assets/meh.webp"
import { Image, ImageProps } from "@chakra-ui/react"
interface Props {
    rating: number
}
const Emoji = ({rating}:Props) => {
    const emojiMap:{[key:number]:ImageProps} = {
      3: { src: meh, alt: "meh", boxSize: "30px" },
      4: { src: ThumbsUp, alt: "recommended", boxSize: "30px" },
      5: { src: Bullseye, alt: "expectional", boxSize: "40px" },
    };
    if(rating < 3) return null
  return <Image {...emojiMap[rating]} marginTop={1} />;
}

export default Emoji