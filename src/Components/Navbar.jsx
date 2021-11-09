import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 50px;
`;

const Wrapper = styled.div`
    padding: 18px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Color = styled.span`
    color: #fff;
    border-radius: 10px;
    padding: 0px 3px;
    background-color: crimson;
`

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;

    @media only screen and (max-width: 1100px){
        font-size: 40px;
      }

    @media only screen and (max-width: 898px){
        font-size: 36px;
    }

    @media only screen and (max-width: 480px){
        font-size: 28px;
    }

    @media only screen and (max-width: 370px){
        font-size: 25px;
      }

    @media only screen and (max-width: 350px){
        font-size: 21px;
      }
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;


    @media only screen and (max-width: 1100px){
        display: none;
    }
`;

const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.2);
        transition: 0.2s ease-in;
        border-bottom: 2px solid crimson;
    };
`;


const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: #9AA4EC;
    &:hover {
        background-color: #fff;
        color: black;
        transition: 0.3s eaase-in;
    };
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    animation: scale 1.5s linear infinite alternate;


    @keyframes scale {
        0% {
          transform: scale(0.9);
        }
      
        100% {
          transform: scale(1);
        }
      }



      @media only screen and (max-width: 480px){
        padding: 10px 10px;
      }

      @media only screen and (max-width: 400px){
        font-size: 11.5px;
        padding: 8px 8px;
      }

      @media only screen and (max-width: 370px){
        font-size: 11px;
        padding: 7px 7px;
      }

      @media only screen and (max-width: 350px){
        padding: 5px 5px;
        font-size: 10px;
      }

      @media only screen and (max-width: 280px){
        font-size: 8px;
      }
`;





const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        PHOEN<Color>IX</Color>
                    </Logo>

                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact Us</MenuItem>
                    </Menu>
                </Left>

                <Link to="/contact">
                <Button>
                    GET IN TOUCH
                </Button>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Navbar
