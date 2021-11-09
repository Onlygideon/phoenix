import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Picture from './images/5.png'
import Play from './images/play.png'
import Love from './video/intro.mp4'
import Version from './images/3.png'

const Container = styled.div`
    display: flex;
    height: 100%;
    position: relative;


    @media only screen and (max-width: 1100px){
        flex-direction: column;
    }
`

const Left = styled.div`
    width: 50%;
    position: relative;


    @media only screen and (max-width: 1100px){
        width: 100%
    }

    @media only screen and (max-width: 598px){
        display: none;
    }
`

const Image = styled.img`
   display: ${props => props.show && 'none'};
   margin-top: 20%;
   margin-left: 20px;


   @media only screen and (max-width: 1100px){
    display: none;
   }
`

const Image2 = styled.img`
    display: none;

    @media only screen and (max-width: 1100px){
        margin-top: 10%;
        width: 80%;
        top: 0;
        left: 0;
        right: 10px;
        margin-bottom: 10%;
        display: flex;
    }

    @media only screen and (max-width: 898px){
        margin-top: 5%;
        margin-bottom: 5%;
        left: 0;
        right: 10px;
        display: flex;
    }
`

const Video = styled.video`
    display: ${props => !props.show && 'none'}; 
    height: 300px;
    position: absolute;
    top: 0;
    bottom 0;
    right: 0;
    margin: auto;
    border-radius: 10px;


    @media only screen and (max-width: 1100px){
        width: 100%;
    }
`

const Right = styled.div`
    width: 50%;

    @media only screen and (max-width: 1100px){
        width: 100%;
    }
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    

    @media only screen and (max-width: 998px){
        padding: 20px;
    }
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 3.5rem;

    @media only screen and (max-width: 480px){
        font-size: 3rem;
    }

    @media only screen and (max-width: 400px){
        font-size: 2.8rem;
    }

    @media only screen and (max-width: 370px){
        font-size: 2.7rem;
      }

    @media only screen and (max-width: 350px){
        font-size: 2.5rem;
    }
`

const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #333;
    line-height: 1.8rem;

    @media only screen and (max-width: 480px){
        font-size: 17px;
    }

    @media only screen and (max-width: 400px){
        font-size: 15.5px;
    }

    @media only screen and (max-width: 370px){
        font-size: 14.5px;
    
    }

    @media only screen and (max-width: 350px){
        font-size: 13.5px;
        margin-top: 15px;
        line-height: 1.6rem;
    }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    @media only screen and (max-width: 1100px){
        justify-content: space-around;
    }

    @media only screen and (max-width: 370px){
        margin-top: 30px;
        justify-content: space-between;
    }

    @media only screen and (max-width: 350px){
        margin-top: 25px;
        justify-content: space-between;
    }
`

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkslateblue;
    color: #fff;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #141412;
        color: #fff;
        transition: 0.3s ease-in;

    };

    

    @media only screen and (max-width: 370px){
        padding: 12px;
        margin-top: 30px;
    }
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

const VideoCase = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5)
`

const CLoseButton = styled.button`
    position: absolute;
    background-coloe: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 30%;
    

    @media only screen and (max-width: 350px){
        top: 29.5%;
    }
`



const Service = () => {
    const [open, setOpen] = useState(false);
    const phoneScreen = window.screen.width <= 1024 ? true : false

    return (
        <Container>
            <Left>
                <Image show={open} src={Picture}/>
                {!phoneScreen && <Video show={open} loop controls src={Love}/>}
                <Image2 src={Version}/>
            </Left>
            <Right>
                <Wrapper>
                    <Title>What We Do</Title>

                    <Desc>We build responsive websites templates and top notch quality designed platforms for 
                        startups and both small and large scale businesses. We have an online
                         community for all web developers either noobie, junior or senior developers. 
                    </Desc>
                    <Desc> We also help in the growth of our clients businness online presence through excellent 
                        SEO. We work with you, not for you.
                    </Desc>

                    <CardContainer>
                        <Card text="Design"/>
                        <Card text="Development"/>
                        <Card text="Hosting"/>
                    </CardContainer>

                    <Button onClick={() => setOpen(true)}  onDoubleClick={() => setOpen(false)}><Icon src={Play}/>How we work</Button>
                </Wrapper>
            </Right>

            {phoneScreen && open && (
                <VideoCase>
                    <Video show={open} autoPlay loop controls src={Love}/>

                    <CLoseButton onClick={() => setOpen(false)}>Close</CLoseButton>
                </VideoCase>
            )}
        </Container>
    )
}

export default Service
