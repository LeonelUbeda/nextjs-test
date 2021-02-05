import styled from 'styled-components'
import AnimeCard from '../elements/AnimeCard'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5 ,minmax(0, 1fr));
    row-gap: 20px;
    column-gap: 20px;
    place-items: start center;
    @media (max-width: 1024px){
        grid-template-columns: repeat(4 ,minmax(0, 1fr));
    }
    @media (max-width: 768px){
        grid-template-columns: repeat(3 ,minmax(0, 1fr));
    }
    @media (max-width: 425px){
        grid-template-columns: repeat(2 ,minmax(0, 1fr));
    }
`


const LastestAnime = ({animes = []}) => {
    return (
        <Container>
            {animes.map( anime => <AnimeCard {...anime} key={anime.uid}/>)}
        </Container>
    )
}


export default LastestAnime