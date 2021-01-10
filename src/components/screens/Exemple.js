import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Grid, Header, Segment, Table, Icon } from "semantic-ui-react";

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

function Exemple() {
  const [airQuality, setAirQuality] = useState({});
  const [horaires, setHoraires] = useState({});
  return (
    <div>
      <ApiCall setData={setAirQuality}>
        http://api.airvisual.com/v2/nearest_city?key=7b8930b6-8d0c-4fb6-a63b-da7c8e2ed6c7
      </ApiCall>
      <ApiCall setData={setHoraires}>
        https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/8/daumesnil/R
      </ApiCall>
      {renderPage(airQuality, horaires)}
    </div>
  );
}

export default Exemple;

function renderPage(qa, horaires) {
  if (
    typeof qa.status != "undefined" &&
    typeof horaires.result != "undefined"
  ) {
    return (
      <>
        <Header
          as="h1"
          content="Exemple d'utilisation"
          textAlign="center"
          style={style.h1}
        />
        <Grid columns={1} stackable style={style.container}>
          <Grid.Row columns={3}>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <Segment>
                La qualité de l'air est{" "}
                {getQuality(qa.data.current.pollution.aqius)}. La principale
                source de pollution dans l'air est actuellement le/la{" "}
                <b>{getPollutionType(qa.data.current.pollution.mainus)}</b>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Destination</Table.HeaderCell>
                      <Table.HeaderCell>
                        Temps d'attente restant
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {horaires.result.schedules.map((data, index) => (
                      <Table.Row key={index}>
                        <Table.Cell key={data.destination}>
                          {data.destination}
                        </Table.Cell>
                        <Table.Cell key={data.message}>
                          {data.message}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
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
    return "bonne, vous pouvez utiliser votre véhicule.";
  } else if (aqi > 50 && aqi <= 100) {
    return "modérée, privilégiez les transports en commun pour vos sorties.";
  } else if (aqi > 100 && aqi <= 150) {
    return "mauvaise, nous vous recommandons de ne pas sortir de chez vous si vous être une personne sensible et privilégiez les transports en commun.";
  } else if (aqi > 150 && aqi <= 200) {
    return "Mauvais, nous vous recommandons de  sortir avec précaution et de porter un masque filtrant les particules fines.";
  } else if (aqi > 200 && aqi <= 300) {
    return "très mauvaise, nous vous recommandons de ne pas sortir de chez vous et de porter un masque filtrant les particules fines.";
  } else {
    return "dangeureuse, nous vous recommandons de ne pas sortir de chez vous et de porter un masque filtrant les particules fines.";
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
