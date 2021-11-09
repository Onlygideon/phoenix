import styled from 'styled-components'
import Search from './images/search.png'

const Container = styled.div`
    width: 100px;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    -webkit-box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.58);

    @media only screen and (max-width: 1100px){
        background: #fff;
    }

    @media only screen and (max-width: 698px){
        width: 80px;
    }

    @media only screen and (max-width: 480px){
        width: 50px;
        background: #fff;
    }

    @media only screen and (max-width: 370px){
        padding: 18px;
        margin-bottom: 8px;
    }

    @media only screen and (max-width: 350px){
        width: 45px;
        padding: 15px;
        margin-bottom: 4px;
    }
`

const Image = styled.img`
    width: 20px;
`

const Text = styled.span`
    margin-top: 10px;
    text-align: center;

    @media only screen and (max-width: 480px){
        font-size: 14px;
    }

    @media only screen and (max-width: 350px){
        font-size: 12px;
    }
`



const Card = ({text}) => {
    return (
        <Container>
            <Image src={Search}/>
            <Text>{text}</Text>
        </Container>
    )
}

export default Card
