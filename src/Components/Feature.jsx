import styled from 'styled-components'
import Phone from './images/9.png'
import Laptop from './images/2.png'


const Container = styled.div`
    display: flex;

    @media only screen and (max-width: 1100px){
        flex-direction: column;
        padding: 40px 20px;
    }

    @media only screen and (max-width: 400px){
        padding: 30px 20px;
    }
`

const Left = styled.div`
    width: 50%;

    @media only screen and (max-width: 1100px){
        width: 100%
    }

    @media only screen and (max-width: 598px){
        display: none;
    }

`

const Image = styled.img`
    width: 87%;   
    height: 77%;
    margin-top: 70px;

    @media only screen and (max-width: 1100px){
        display: none;
    }
`

const Image2 = styled.img`
    display: none;

    @media only screen and (max-width: 1100px){
        width: 80%;
        top: 0;
        left: 0;
        right: 10px;
        margin-bottom: 5px;
        display: flex;
    }

    @media only screen and (max-width: 898px){
        margin-top: 15px;
        margin-bottom: 10px;
        left: 0;
        right: 10px;
        display: flex;
    }

    @media only screen and (max-width: 698px){
        margin-bottom: 5%;
    }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 1100px){
        width: 100%;
    }
`

const Title = styled.span`
    font-size: 70px;

    @media only screen and (max-width: 480px){
        font-size: 50px;
    }

    @media only screen and (max-width: 370px){
        font-size: 45px;
      }

    @media only screen and (max-width: 350px){
        font-size: 41px;
    }

    @media only screen and (max-width: 280px){
        font-size: 36px;
      }
`

const Title2 = styled.span`
   font-size: 24px; 
   font-style: italic;
   color: #333;
   margin-top: 30px;

   @media only screen and (max-width: 480px){
    font-size: 20px;
   }

   @media only screen and (max-width: 350px){
    font-size: 16px;
   }
   
`

const Description = styled.p`
   margin-top: 30px;
   font-size: 20px;
   color: #777;
   
   @media only screen and (max-width: 1100px){
    line-height: 1.8em; 
    color: black;
   }

   @media only screen and (max-width: 480px){
    font-size: 17.8px;
    line-height: 1.4em;
   }

   @media only screen and (max-width: 370px){
    font-size: 17px;
   }

   @media only screen and (max-width: 350px){
    color: black;
    font-size: 14.8px;
   }
`

const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: darkslateblue;
    color: #fff;
    border-radius: 20px;
    font-size: 20px;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        background-color: #141412;
        color: #fff;
        transition: 0.3s ease-in;

    };

    @media only screen and (max-width: 400px){
        padding: 12px 15px;
    }

    @media only screen and (max-width: 350px){
        padding: 12px 12px;
    }
`

const Shape = styled.div`
    width: 60px;
    height: 60px;
    background-color: darkslateblue;
    opacity: 0.5;
    position: absolute;
    top: -70px;
    right: 540px;
    z-index: -1;
    animation: move 20s linear alternate infinite;


    @keyframes move {
        to{
            transform: translate(39.8vw, 80vh);
        }
    }
`

const Shape2 = styled.div`
    width: 60px;
    height: 60px;
    background-color: brown;
    opacity: 0.5;
    position: absolute;
    top: -70px;
    right: 130px;
    z-index: -1;
    animation: direct 15s linear alternate infinite;


    @keyframes direct {
        to{
            transform: translate(-48.3vw, 90vh);
        }
    }
`




const Feature = () => {
    return (
        <Container>
            <Left>
                <Image src={Phone}/>
                <Image2 src={Laptop}/>
            </Left>
            <Right>
                <Title>
                    <b>Great</b> design<br/>
                    <b>Good</b> business
                </Title>
                <Title2>We all Know that great design means good business.</Title2>
                <Description>
                    We help our clients succeed by creating brand identities, quality digital experiences,
                    and print materials that communicate clearly, achieve marketing goals, and look fantastic.
                </Description>
                <Description>
                    Boosting your business online presence becomes our top priority and we guarantee you a
                    better outcome.
                </Description>
                <Button>Learn More</Button>
            </Right>

            <Shape />
            <Shape2 />
        </Container>
    )
}

export default Feature
