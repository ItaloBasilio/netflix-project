import { Container } from "./style";
import logoImage from '../../assets/logo.png'


export const Header = () => {
  return (
    <Container>
        
        <img src={logoImage} alt="logo" 
        style={{width:'150px', zIndex:'1'}} />

        <nav style={{zIndex:'1'}}>

        <a href="#">Filmes</a>
        <a href="#">Tv</a>
        <a href="#">Tudo</a>

        </nav>


    </Container>
  )
}
