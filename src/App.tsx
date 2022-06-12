import { Wrapper, Row, Image, Header} from "./components/styled/index";
 import birdOrg from "./images/birdOrg.png";
 


const App = () => {
  return (
    
    <Wrapper>
       <Row>
      <Header>Spaßvogel</Header>
      <Image src={birdOrg} alt="Spaßvogel bild"/>
      </Row>
    </Wrapper>
  );
};

export default App;
