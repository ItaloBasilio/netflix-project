import * as C from './style'
import { MdArrowForwardIos } from "react-icons/md";

export const DescriptionMovie = () => {
    return (
        <C.Container>
           <C.Title>STAR WARS THE RISE OF SKYWALKER</C.Title> 
           <C.Description>loren ipsun</C.Description>
           <C.Button>
            Assistir Agora
            <MdArrowForwardIos/>
            </C.Button>
        </C.Container>
    )
}