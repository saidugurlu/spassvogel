import { useState } from "react";
import {
  Wrapper,
  Row,
  Image,
  Header,
  Search,
  Form,
  Button,
} from "./components/styled/index";
import birdOrg from "./images/birdOrg.png";

const App = () => {
  const [search, setSearch] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // Can i use too this: const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    setSearch(event.target.value);
  };

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    // Can i use too this: const getJokes: React.FormEventHandler<HTMLFormElement> = async (event) => {
  };

  return (
    <Wrapper>
      <Row>
        <Header>Spaßvogel</Header>
        <Image src={birdOrg} alt="Spaßvogel bild" />
      </Row>
      <Form onSubmit={getJokes}>
        <Search
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default App;
