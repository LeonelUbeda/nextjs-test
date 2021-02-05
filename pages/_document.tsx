import Document, {Html, Head, Main, NextScript} from 'next/document'
import Header from '../app/components/modules/Header'

export default class CustomDocument extends Document{
    render(){
        return <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Header />
                <Main></Main>
            </body>
            <NextScript />
        </Html>
    }
}