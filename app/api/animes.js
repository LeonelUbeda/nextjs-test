import {getBaseQuery} from './config'

export const getAnimes = async () => {
    const response = await fetch(`${await getBaseQuery()}&q=[[at(document.type, "anime")]]`)
    const { results } = await response.json()
    return results.map( element => ({ 
        title: element.data.name, 
        uid: element.uid,
        img: element.data.cover.url
    }))
}