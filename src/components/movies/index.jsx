
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as C from './style';

import orion from '../../assets/orion.jpg';
import jogosamor from '../../assets/jogosamor.jpg';
import abismo from '../../assets/abismo.jpg';

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
                <C.Movie src={orion} alt='imageMovie' />
                <C.Movie src={jogosamor} alt='imageMovie' />
                <C.Movie src={abismo} alt='imageMovie' />
                <C.Movie src={orion} alt='imageMovie' />
                <C.Movie src={jogosamor} alt='imageMovie' />
                <C.Movie src={abismo} alt='imageMovie' />
                <C.Movie src={orion} alt='imageMovie' />
                <C.Movie src={jogosamor} alt='imageMovie' />
                <C.Movie src={abismo} alt='imageMovie' />
            </Carousel>

            <C.Text>Séries</C.Text>
            <Carousel responsive={responsive}>
                <C.Movie src={orion} alt='imageMovie' />
                <C.Movie src={jogosamor} alt='imageMovie' />
                <C.Movie src={abismo} alt='imageMovie' />
                <C.Movie src={orion} alt='imageMovie' />
                <C.Movie src={jogosamor} alt='imageMovie' />
                <C.Movie src={abismo} alt='imageMovie' />
                <C.Movie src={orion} alt='imageMovie' />
                <C.Movie src={jogosamor} alt='imageMovie' />
                <C.Movie src={abismo} alt='imageMovie' />
            </Carousel>

            <C.Text>Tudo</C.Text>
            <Carousel responsive={responsive}>
                <C.Movie src={orion} alt='imageMovie' />
                <C.Movie src={jogosamor} alt='imageMovie' />
                <C.Movie src={abismo} alt='imageMovie' />
                <C.Movie src={orion} alt='imageMovie' />
                <C.Movie src={jogosamor} alt='imageMovie' />
                <C.Movie src={abismo} alt='imageMovie' />
                <C.Movie src={orion} alt='imageMovie' />
                <C.Movie src={jogosamor} alt='imageMovie' />
                <C.Movie src={abismo} alt='imageMovie' />
            </Carousel>

        </C.Container>
    );
};
