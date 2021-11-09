import styled from 'styled-components'


const Container = styled.div`
    margin-right: 50px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.58);
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 4px solid darkslateblue;
    

    @media only screen and (max-width: 1100px){
        padding: 20px;
        margin-bottom: 30px;
    }

    @media only screen and (max-width: 998px){
        padding: 15px;
        margin-right: 0px;
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 598px){
        margin-right: 0px;
        margin-bottom: 10px;
        padding: 10px;
    }

    @media only screen and (max-width: 370px){
        padding: 9px;
        border-top: 3px solid darkslateblue;
    }    

    @media only screen and (max-width: 350px){
        padding: 7px;
    }
`

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`

const Price = styled.span`
    font-weight: bold;
    font-size: 50px;

    @media only screen and (max-width: 898px){
        font-size: 35px;
    }

    @media only screen and (max-width: 598px){
        font-size: 30px;
    }

    @media only screen and (max-width: 400px){
        font-size: 28px;
    }

    @media only screen and (max-width: 370px){
        font-size: 25px;
    }

    @media only screen and (max-width: 350px){
        font-size: 20px;
    }
`

const Type = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 1.5px solid darkolivegreen;
    color: darkolivegreen;
    background-color: #fff;
    border-radius: 20px;
    &:hover {
        background-color: darkolivegreen;
        color: #fff;
        transition: 0.3s ease-in;

    };
    cursor: pointer;

    @media only screen and (max-width: 1100px){
        display: none;
    }
`

const List = styled.ul`
    list-style: none;

`

const ListItem = styled.li`
    margin: 30px 0;

    @media only screen and (max-width: 1100px){
        margin: 25px;
    }

    @media only screen and (max-width: 898px){
        margin: 20px;
    }

    @media only screen and (max-width: 598px){
        margin: 10px;
        font-size: 12px;
    }

    @media only screen and (max-width: 370px){
        font-size: 11px;
    }

`

const Button = styled.button`
    border: none;
    background-color: darkslateblue;
    color: #fff;
    font-size: 16px;
    padding: 15px;
    border-radius: 10px;
    font-weight: bold;
    &:hover {
        background-color: #141412;
        color: #fff;
        transition: 0.3s ease-in;

    };
    cursor: pointer;

    @media only screen and (max-width: 598px){
        font-size: 12px;
        padding: 8px;
    }

    @media only screen and (max-width: 400px){
        padding: 7.5px;
        font-size: 11.5px;
    }

    @media only screen and (max-width: 370px){
        padding: 7px;
        font-size: 11px;
    }

    @media only screen and (max-width: 350px){
        font-size: 11px;
        padding: 5px;
    }
`







const PricingCard = ({price, type, templates, websites}) => {
    return (
        <Container>
            <PriceContainer>
                <Price>₦{price}</Price>/month
            </PriceContainer>
            <Type>{type} Plan</Type>
            <List>
                <ListItem>{templates} Quality Hand-Crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>{websites} PreBuilt Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>
            </List>
            <Button>Join Now</Button>
        </Container>
    )
}

export default PricingCard
