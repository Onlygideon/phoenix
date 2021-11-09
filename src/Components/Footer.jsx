import styled from 'styled-components'

const Container =  styled.div`
    height: 15vh;
    background-color: #111;
    color: lightgray;
`;

const Wrapper =  styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1100px){
        flex-direction: column;
        align-items: center;
      }

    @media only screen and (max-width: 598px){
        padding: 10px;
    }
`;

const List =  styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`;

const ListItem =  styled.li`
    margin-right: 20px;

    @media only screen and (max-width: 1100px){
        font-size: 20px;
        margin-right: 15px;
        margin-top: 15px;
      }

    @media only screen and (max-width: 598px){
        margin-right: 10px;
        font-size: 14px;
        margin-top: 10px;
      }

      @media only screen and (max-width: 400px){
        font-size: 11px;
        margin-top: 2x;
      }
`;

const Copyright =  styled.span`
    align-item: center;

    @media only screen and (max-width: 1100px){
        font-size: 20px;
        margin-top: 50px;
    }

    @media only screen and (max-width: 598px){
        font-size: 12px;
        margin-top: 35px;
      }

      @media only screen and (max-width: 350px){
        font-size: 10px;
        margin-top: 25px;
      }
`;



const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>Help</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>Blog</ListItem>
                    <ListItem>Community</ListItem>
                </List>

                <Copyright>Copyright &copy; 2021, Phoenix. All rights reserved. </Copyright>
            </Wrapper>
        </Container>
    )
}

export default Footer
