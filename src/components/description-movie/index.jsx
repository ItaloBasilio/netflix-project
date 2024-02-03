import * as C from './style'
import { MdArrowForwardIos } from "react-icons/md";

export const DescriptionMovie = () => {
    return (
        <C.Container>
           <C.Title>STAR WARS THE RISE OF SKYWALKER</C.Title> 
           <C.Description>The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end</C.Description>
           <C.Button>
            Assistir agora
            <MdArrowForwardIos/>
            </C.Button>
        </C.Container>
    )
}