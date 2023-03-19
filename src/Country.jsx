import React from "react";
import styled from "styled-components";

const Country = ({ country, isLoading }) => {
  console.log(country);
  return (
    <CountryWrapper>
      <CountryDetails>
        <CountryTitle>{country?.location?.name}</CountryTitle>
        <CountryTime>
          {new Date(country?.location?.localtime).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </CountryTime>
      </CountryDetails>
      <WeatherIcon>
        <Icon src={country?.current?.condition.icon} />
        <IconTitle>{country?.current?.condition.text}</IconTitle>
      </WeatherIcon>
      <WeatherInfo>
        <WeatherInfoDetails>
          <WeatherInfoDetail>
            <WeatherInfoIcon src="images/wind.png" />
            <WeatherInfoTitle>{country?.current?.vis_km} Km/h</WeatherInfoTitle>
          </WeatherInfoDetail>
          <WeatherInfoDetail>
            <WeatherInfoIcon src="images/humidity.png" />
            <WeatherInfoTitle>{country?.current?.humidity}%</WeatherInfoTitle>
          </WeatherInfoDetail>
          <WeatherInfoDetail>
            <WeatherInfoIcon src="images/sun.png" />
            <WeatherInfoTitle> {country?.current?.uv}h</WeatherInfoTitle>
          </WeatherInfoDetail>
        </WeatherInfoDetails>
        <WeatherInfoTemp>
          {country?.current?.temp_c}
          <sup>o</sup>
        </WeatherInfoTemp>
      </WeatherInfo>
    </CountryWrapper>
  );
};

const CountryWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border-radius: 4px;
  padding: 5px 15px;
  background: linear-gradient(to right top, #101010, #272526);
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

const CountryDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  align-items: center;
`;
const CountryTitle = styled.div`
  background-color: #171616;
  box-shadow: 0px 1px 10px #fff;
  color: #fff;
  width: 80px;
  padding: 4px 0;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #fff;
`;
const CountryTime = styled.div`
  font-size: 20px;
  color: #fff;
`;
const WeatherIcon = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.img``;
const IconTitle = styled.span`
  color: #767676;
  font-size: 15px;
  font-weight: 500;
`;
const WeatherInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;
const WeatherInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const WeatherInfoDetail = styled.div`
  margin-bottom: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 15px;
`;
const WeatherInfoIcon = styled.img`
  width: 15px;
  height: 15px;
  object-fit: cover;
  margin-right: 5px;
`;
const WeatherInfoTitle = styled.span``;
const WeatherInfoTemp = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;

export default Country;
