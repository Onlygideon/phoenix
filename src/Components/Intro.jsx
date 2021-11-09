import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes';
import Woman from './images/10.png'



const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;


    @media only screen and (max-width: 1100px){
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    @media only screen and (max-width: 1100px){
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.h1`
    font-size: 56px;    
    width: 60%;

    @media only screen and (max-width: 1100px){
        width: 100%;
    }

    @media only screen and (max-width: 480px){
        font-size: 43px; 
    }

    @media only screen and (max-width: 400px){
        font-size: 40px;
    }

    @media only screen and (max-width: 370px){
        font-size: 37px;
    }

    @media only screen and (max-width: 350px){
        font-size: 33px;
    }

    @media only screen and (max-width: 280px){
        font-size: 27.5px;
      }
`;

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 25px;

    @media only screen and (max-width: 1100px){
        width: 100%;
        line-height: 1.7rem;
    }

    @media only screen and (max-width: 480px){
        line-height: 1.5rem;
    }

    @media only screen and (max-width: 400px){
        font-size: 17.5px;
    }

    @media only screen and (max-width: 370px){
        font-size: 16px;
      }

    @media only screen and (max-width: 350px){
        font-size: 14px;
        line-height: 1.3rem;
    }
`

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 1100px){
        width: 100%;
        flex-direction: column;
    }
`

const Button = styled.button`
    padding: 15px;
    background-color: darkslateblue;
    &:hover {
        background-color: #141412;
        color: #fff;
        transition: 0.3s ease-in;

    };
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;


    @media only screen and (max-width: 1100px){
        margin-bottom: 25px;
    }

    @media only screen and (max-width: 480px){
        margin-bottom: 20px;
    }
    
    @media only screen and (max-width: 350px){
        margin-bottom: 15px;
    }
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

const Phone = styled.span`
    color: #F0667d;
    font-weight: bold;
`

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`

const Right = styled.div`
    width: 40%;


    @media only screen and (max-width: 1100px){
        display:none;
    }
`;

const Image = styled.img`
    width: 95%;   
    margin-top: 30%;
`




const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Creativity and Efficiency Always</Title>
                
                <Desc>
                    Our goal is to work in close partnership with our clients, design and build the best web projects 
                    with maximum creativity mixed with efficiency in order to have real impacts on our clients business.
                </Desc>

                <Info>
                    <Button>START A PROJECT</Button>
                    <Contact>
                        <Phone>Call Us (+234) 70 - 1234 - 5678</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>
            </Left>

            <Right>
                <Image src={Woman}/>
            </Right>

            <AnimatedShapes />
        </Container>
    )
}

export default Intro
