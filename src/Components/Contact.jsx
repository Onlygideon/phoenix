import styled from 'styled-components'
import Footer from './Footer';
import Map from './images/map.png'
import Phone from './images/phone.png'
import Send from './images/send.png'

const Container = styled.div`
  height: 85vh;
  background: #B1A6A4;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1100px){
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 1100px){
    width: 100%;
}
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  padding-left: 30px;

  @media only screen and (max-width: 1100px){
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 898px){
    font-size: 35px;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 598px){
    margin: 20px;
    font-size: 25px;
  }

  @media only screen and (max-width: 370px){
    font-size: 24px;
  }

  @media only screen and (max-width: 350px){
    font-size: 20px;
    margin: 10px;
  }

  @media only screen and (max-width: 280px){
    font-size: 18px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 598px){
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 898px){
    height: 80%;
  }
  
  @media only screen and (max-width: 698px){
    height: 70%;
    margin-right: 10px;
  }

  @media only screen and (max-width: 598px){
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 898px){
    height: 80%;
  }

  @media only screen and (max-width: 698px){
    height: 70%;
  }

  @media only screen and (max-width: 598px){
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;

  @media only screen and (max-width: 898px){
    padding: 15px;
  }

  @media only screen and (max-width: 598px){
    padding: 6px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;

  @media only screen and (max-width: 898px){
    padding: 15px;
  }

  @media only screen and (max-width: 598px){
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: darkslateblue;
  color: #fff;
  font-size: 20px;
  padding: 15px;
  margin-top: 20px;
  border-radius: 10px;
  &:hover {
      background-color: #141412;
      color: #fff;
      transition: 0.3s ease-in;

  };
  cursor: pointer;

  @media only screen and (max-width: 898px){
    padding: 12px;
    font-size: 17px;
  }

  @media only screen and (max-width: 598px){
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1100px){
    width: 100%;
    margin-top: 40px;
  }

  @media only screen and (max-width: 598px){
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 1100px){
    margin-bottom: 45px;
  }

  @media only screen and (max-width: 898px){
    margin-bottom: 35px;
  }

  @media only screen and (max-width: 598px){
    margin-bottom: 20px;
  }
  
  @media only screen and (max-width: 350px){
    margin-bottom: 15px;
  }
`

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;

  @media only screen and (max-width: 598px){
    width: 15px;
  }

  
  @media only screen and (max-width: 350px){
    width: 13px;
  }
`

const Text = styled.span`
  font-size: 20px;

  @media only screen and (max-width: 598px){
    font-size: 14px;
  }

  @media only screen and (max-width: 370px){
    font-size: 12px;
  }
  
  @media only screen and (max-width: 350px){
    font-size: 10px;
  }
`



const Contact = () => {
    return (
      <>
        <Container>
            <Wrapper>
                <FormContainer>
                  <Title>Contact Us <br/> For More Information</Title>
                  <Form>
                      <LeftForm>
                        <Input placeholder='Your Name'/>
                        <Input placeholder='Your Email'/>
                        <Input placeholder='Subject'/>
                      </LeftForm>

                      <RightForm>
                          <TextArea placeholder='Your Message'/>
                          <Button onClick={(e) => e.preventDefault()}>Send</Button>
                      </RightForm>
                    </Form> 
                </FormContainer>

                <AddressContainer>
                    <AddressItem>
                        <Icon src={Map}/>
                        <Text>69 Fela Kuti St., Lagos, Nigeria</Text>
                    </AddressItem>

                    <AddressItem>
                        <Icon src={Phone}/>
                        <Text>+234 70 1111 0000</Text>
                    </AddressItem>

                    <AddressItem>
                        <Icon src={Send}/>
                        <Text>phoenix@gmail.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>

        <Footer />
        </>
    )
}

export default Contact
