import styled from "styled-components";

import { useState } from "react";
import Country from "./Country";
function App() {
  const [countryName, setCountryName] = useState("");
  const [countryObj, setCountryObj] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchWeatherApi = async () => {
    setIsLoading(true);
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${countryName}&aqi=no`
    );
    if (!response.ok) {
      setIsError(true);
      setIsLoading(false);
      throw new Error("Please Try Again");
    }

    const data = await response.json();
    setIsError(false);
    setCountryObj(data);
    setIsLoading(false);
  };

  const countryNameChangeHandler = (e) => {
    setIsError(false);
    setCountryObj({});
    setCountryName(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          Weather <span>App</span>
        </Title>
        <InputField
          onChange={countryNameChangeHandler}
          placeholder="Enter Your Country"
          value={countryName}
        />
        <SearchBtn onClick={fetchWeatherApi}>Search</SearchBtn>
        {isLoading && !countryObj.error && (
          <Loading>
            <LoadingIcon src="images/loading.png" />{" "}
          </Loading>
        )}
        {!isLoading && countryObj.current && countryName && (
          <Country country={countryObj} isLoading={isLoading} />
        )}
        {!countryName && !isLoading && (
          <Message>please enter your country</Message>
        )}
        {isError && !isLoading && countryName && (
          <Message>Please Try Again</Message>
        )}
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  margin-top: 90px;
  animation: fadeIn 3s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  > span {
    background: linear-gradient(to right top, #eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const InputField = styled.input`
  padding: 8px;
  width: 300px;
  border: 2px solid #272526;
  outline: none;
  background-color: transparent;
  box-shadow: 6px 1px 12px #272526;
  border-radius: 8px;
  color: #fff;
`;
const SearchBtn = styled.button`
  padding: 8px;
  background-color: transparent;
  border: 2px solid #272526;
  outline: none;
  color: #fff;
  margin-left: 5px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
`;
const Wrapper = styled.div``;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
`;
const LoadingIcon = styled.img`
  display: block;
`;
const Message = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 20px;
`;
