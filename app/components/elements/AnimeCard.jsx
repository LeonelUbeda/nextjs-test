import styled from 'styled-components'

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

const AnimeCard = ({img, title, link}) => {
    return (
        <AnimeCardContainer>
            <a href={link}>
                <AnimeImage src={img}/>
            </a>
            <AnimeHeadline>
                <a href={link}>
                    <h3>{title}</h3>
                </a>
            </AnimeHeadline>
        </AnimeCardContainer>
    )
}


export default AnimeCard