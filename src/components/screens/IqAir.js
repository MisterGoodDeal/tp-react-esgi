import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Grid, Header, Segment, List } from "semantic-ui-react";

import ApiCall from "../api/ApiCall.js";

const style = {
  h1: {
    fontSize: "35px",
  },
  h2: {
    fontSize: "24px",
  },
  container: {
    marginLeft: 50,
    marginRight: 50,
  },
};

function IqAir() {
  const [airQuality, setAirQuality] = useState({});
  return (
    <div>
      <ApiCall setData={setAirQuality}>
        http://api.airvisual.com/v2/nearest_city?key=7b8930b6-8d0c-4fb6-a63b-da7c8e2ed6c7
      </ApiCall>
      {renderPage(airQuality)}
    </div>
  );
}

export default IqAir;

function renderPage(data) {
  if (typeof data.status != "undefined") {
    return (
      <>
        <Header
          as="h1"
          content="API IqAir"
          textAlign="center"
          style={style.h1}
        />
        <Grid columns={1} stackable style={style.container}>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment>
                <List divided relaxed>
                  <List.Item>
                    <List.Icon
                      name="building"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="p">
                        <u>Ville :</u> {data.data.city}
                      </List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="puzzle"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="p">
                        <u>Département :</u> {data.data.state}
                      </List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="map" size="large" verticalAlign="middle" />
                    <List.Content>
                      <List.Header as="p">
                        <u>Pays : </u> {data.data.country}
                      </List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="globe"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="p">
                        <u>Coordonnées GPS : </u>
                        {data.data.location.coordinates[0]}/
                        {data.data.location.coordinates[1]}
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header
                  as="h2"
                  content="Météo"
                  textAlign="center"
                  style={style.h2}
                />
                <List divided relaxed>
                  <List.Item>
                    <List.Icon
                      name="thermometer"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="p">
                        <u>Température :</u> {data.data.current.weather.tp} °C
                      </List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="theme"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="p">
                        <u>Humidité :</u> {data.data.current.weather.hu}%
                      </List.Header>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="compress"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="p">
                        <u>Pression : </u> {data.data.current.weather.pr} MPa
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                <Header
                  as="h2"
                  content="Pollution de l'air"
                  textAlign="center"
                  style={style.h2}
                />
                <List divided relaxed>
                  <List.Item>
                    <List.Icon
                      name="sliders horizontal"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="p">
                        <u>Indice de pollution de l'air : </u>
                        {data.data.current.pollution.aqius} AQI
                      </List.Header>
                      <List.Description as="i">
                        {getQuality(data.data.current.pollution.aqius)}
                      </List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item>
                    <List.Icon
                      name="braille"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <List.Header as="p">
                        <u>Type de pollution : </u>
                        {getPollutionType(data.data.current.pollution.mainus)}
                      </List.Header>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

function getQuality(aqi) {
  if (aqi <= 50) {
    return "Bon";
  } else if (aqi > 50 && aqi <= 100) {
    return "Modéré";
  } else if (aqi > 100 && aqi <= 150) {
    return "Mauvais pour les populations sensibles";
  } else if (aqi > 150 && aqi <= 200) {
    return "Mauvais";
  } else if (aqi > 200 && aqi <= 300) {
    return "Très mauvais";
  } else {
    return "Dangeureux";
  }
}

function getPollutionType(type) {
  switch (type) {
    case "p2":
      return "pm2.5";
    case "p1":
      return "pm10";
    case "o3":
      return "Ozone";
    case "n2":
      return "Dioxyde d'hydrogène";
    case "s2":
      return "Dioxyde de sulfure";
    case "co":
      return "Monoxyde de carbone";
    default:
      return "-Aucune donnée-";
  }
}
