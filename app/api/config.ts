import {PRISMIC_TOKEN} from '../env'
import { GraphQLClient } from 'graphql-request';


export const graphcms = new GraphQLClient(
    'https://api-ca-central-1.graphcms.com/v2/ckkx7qhpqp0dl01ywfajg8j30/master', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MTI4MzIyMjAsImF1ZCI6WyJodHRwczovL2FwaS1jYS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2Nra3g3cWhwcXAwZGwwMXl3ZmFqZzhqMzAvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNTdlODczMjAtZDYzYS00MTc2LTg5ZWItMmUzMGRjNDBmNTBiIiwianRpIjoiY2treGFudWEycTg1MTAxejBkY3B5Z3JjMyJ9.Nc7u0uMCbMJ2lAUxUK7IUuZ65-PpYaAbXGQQ8OcLUja5IVB8r1VgwBC-9TkeEtyx196lgXa27gQpC_QlpgdkZ41ew5euZ0qAr4U5BtC-7NWQ84NZ3aXyilCiKsr3h2dIk7iNvGVBHgcSjrj1TB0Z31HHM50ltPDEG5jzv3SvQ-fD5iv9eegGTgYAr_eUZo8qc6oT3OOU4-00AEVcZPYyc51TrB_uglzThJW-iWVnUsLdJ2sAsdjYNd2RHMeGQwOaxM87b96hD6DYy_NMNAGq1ylBQ1BQ12h-iWoLol1VGO5Ikb4vKF5trGZRXDnHSn8QDROUYoESkD0994Xi8l0XWc8FO6VGR8XMr73yAT2w5T0PZGVP113Zf7J2UFaEK6Thtq9bhyufyyWrxY12sTnnh94FcVsQmrVGBf3FKnwyACftlyG-zjtYW-0F5RhAFgO-Uw8busNRdsT1-28lkHpLVh0yPi8UQJ2_6tupgLkDGHHL2dy9zE5XVeQsuTxS6XhHQsqWdXfofFXJpYJG0lcxEJ_iQ1if9N1RLriN34Hzq5KPlj75qnp5IM8E3q-ngG0H_TvGi0KoCJI4C1LaMCLP6p16bYUFIT6X-zJF3sQ_4oFFZNjAP3kr3LA0_cp4esoXkWrQgjuLtPhbzhqSqmeAiZtyOFB4QNjv5MxH8gypVA8'
        }
    }
)



const BASE_URL = 'https://amimir-blog.cdn.prismic.io/api/v2'

export async function getMasterRef(){
    let response = await fetch(`${BASE_URL}?access_token=${PRISMIC_TOKEN}`) // 
    const {refs} = await response.json()
    return refs.find(element => element.id === 'master')?.ref 
}


export const getBaseQuery = async () => {
    return `${BASE_URL}/documents/search?ref=${await getMasterRef()}&access_token=${PRISMIC_TOKEN}`
}



