import styled from 'styled-components'
import PricingCard from './PricingCard'


const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


    @media only screen and (max-width: 1100px){
        flex-direction: column;
    }
`

const Pricing = () => {
    return (
        <Container>
            <PricingCard price="2000" type="Basic" templates="10" websites="10+"/>
            <PricingCard price="5000" type="Premium" templates="25" websites="20+"/>
            <PricingCard price="10000" type="Advanced" templates="50" websites="40+"/>
        </Container>
    )
}

export default Pricing
