import styled from 'styled-components'
import Link from 'next/link'
const AnimeImage = styled.img`
    width: 100%;
    max-width: 270px;
    height: auto;
    border-radius: 8px;
`

const AnimeHeadline = styled.div`
    padding: 10px 8px 5px 8px;
    color: #33475B;
    margin: 0;
    font-size: 16px !important;
`


const AnimeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const AnimeCard = ({img, title, uid}) => {
    return (
        <AnimeCardContainer>
            <h1>Hey <Link href="/contact">clic aqui</Link></h1>
            <Link href='/animes/[uid]' as={`/animes/${uid}`}>
                <AnimeImage src={img}/>
            </Link>
            <AnimeHeadline>
                <Link  href='/animes/[uid]' as={`/animes/${uid}`}>
                    <h3>{title}</h3>
                </Link>
            </AnimeHeadline>
        </AnimeCardContainer>
    )
}


export default AnimeCard