import axios from "axios";
import { useState } from "react";
import JokeItem from "./components/JokeItem";
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
import { Joke } from "./common/types";

const baseURL = "https://v2.jokeapi.dev/joke/Any";
const App = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // Can i use too this: const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    setSearch(event.target.value);
  };

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    // Can i use too this: const getJokes: React.FormEventHandler<HTMLFormElement> = async (event) => {

    event.preventDefault();
    const endPoint = `${baseURL}?contains=${search}&amount=20`;
    const { data } = await axios.get(endPoint);

    if (data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes);
    }

    setSearch("");
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

      {/* Jokes */}
      <div>
        {error && <p>Sorry, no jokes found.</p>}
        {jokes.length > 0 &&
          jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)}
      </div>
    </Wrapper>
  );
};

export default App;
