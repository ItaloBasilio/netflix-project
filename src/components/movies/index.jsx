import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as C from './style';
import spiderman from '../../assets/spiderman3.jpg';
import lord1 from '../../assets/lordoftherings.png';
import avengers from '../../assets/vingadores.png';

export const Movies = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (

        <C.Container>
            <C.Text>Filmes</C.Text>

            <Carousel responsive={responsive}>
                <C.Movie src={spiderman} alt='imageMovie' />
                <C.Movie src={lord1} alt='imageMovie' />
                <C.Movie src={avengers} alt='imageMovie' />
                <C.Movie src={spiderman} alt='imageMovie' />
                <C.Movie src={lord1} alt='imageMovie' />
                <C.Movie src={avengers} alt='imageMovie' />
                <C.Movie src={spiderman} alt='imageMovie' />
                <C.Movie src={lord1} alt='imageMovie' />
                <C.Movie src={avengers} alt='imageMovie' />
            </Carousel>

            <C.Text>Tv</C.Text>

            <Carousel responsive={responsive}>
                <C.Movie src={spiderman} alt='imageMovie' />
                <C.Movie src={lord1} alt='imageMovie' />
                <C.Movie src={avengers} alt='imageMovie' />
                <C.Movie src={spiderman} alt='imageMovie' />
                <C.Movie src={lord1} alt='imageMovie' />
                <C.Movie src={avengers} alt='imageMovie' />
                <C.Movie src={spiderman} alt='imageMovie' />
                <C.Movie src={lord1} alt='imageMovie' />
                <C.Movie src={avengers} alt='imageMovie' />
            </Carousel>

            <C.Text>Tudo</C.Text>

            <Carousel responsive={responsive}>
                <C.Movie src={spiderman} alt='imageMovie' />
                <C.Movie src={lord1} alt='imageMovie' />
                <C.Movie src={avengers} alt='imageMovie' />
                <C.Movie src={spiderman} alt='imageMovie' />
                <C.Movie src={lord1} alt='imageMovie' />
                <C.Movie src={avengers} alt='imageMovie' />
                <C.Movie src={spiderman} alt='imageMovie' />
                <C.Movie src={lord1} alt='imageMovie' />
                <C.Movie src={avengers} alt='imageMovie' />
            </Carousel>
        </C.Container>
    );
};