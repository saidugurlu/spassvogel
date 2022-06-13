
import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface SearchProps {
  theme: DefaultTheme;
}

const Search = styled.input<SearchProps>`
  margin: 10px 15px 10px 0px;
  padding: 10px;
  width: 25rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors?.secondary};
`;

export default Search;