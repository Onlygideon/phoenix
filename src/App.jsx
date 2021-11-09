import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import Feature from './Components/Feature'
import Service from './Components/Service'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'
import InTouch from './Components/InTouch'


const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const IntroShape = styled.div`
  ${Shape}
  background-color: #9AA4EC;
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
`

const PhoneShape = styled.div`
  ${Shape}
  background-color: #9AA4EC;
  clip-path: polygon(55% 0%, 100% 0%, 100% 100%, 55% 100%);
`

const FeatureShape = styled.div`
  ${Shape}
  background-color: #85DCB0;
  clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
`

const ServiceShape = styled.div`
  ${Shape}
  background-color: pink;
  clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
`

const PricingShape = styled.div`
  ${Shape}
  background-color: crimson;
  clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
`
/*
const PricingPhoneShape = styled.div`
  ${Shape}
  background-color: crimson;
  clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 33% 100%);
`*/





const App = () => {

  const deviceScreen = window.screen.width <= 1100 ? true : false

  return (
    <Router>
          < Route path='/' exact render={(props) => (
            <>
              <Container>
                <Navbar />
                <Intro />
                {!deviceScreen && <IntroShape />}
                {deviceScreen && <PhoneShape />}
              </Container>

              <Container>
                <Feature />
                <FeatureShape />
              </Container>

              <Container>
                <Service />
                <ServiceShape />
              </Container>
        
              <Container>
                <Pricing />
                <PricingShape />
              </Container>

              <Contact />
            </>
          )}/>
          
          <Route path='/contact' component={InTouch}/>
    </Router>
  );
};

export default App;