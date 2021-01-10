import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Grid, Header, Segment, Table } from "semantic-ui-react";
import ApiCall from "../api/ApiCall";

const style = {
  h1: {
    fontSize: "35px",
  },
  h2: {
    fontSize: "25px",
  },
  container: {
    marginLeft: 50,
    marginRight: 50,
  },
};

function RATP() {
  const [listeLignes, setListeLigne] = useState({});
  const [listeTraffic, setListeTraffic] = useState({});

  return (
    <div>
      <ApiCall setData={setListeLigne}>
        https://api-ratp.pierre-grimaud.fr/v4/lines/metros
      </ApiCall>
      <ApiCall setData={setListeTraffic}>
        https://api-ratp.pierre-grimaud.fr/v4/traffic
      </ApiCall>
      <Header
        as="h1"
        content="API RATP (quelques exemples)"
        textAlign="center"
        style={style.h1}
      />
      <Grid columns={2} stackable style={style.container}>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Segment>
              <Header as="h2" content="Liste des lignes" style={style.h2} />
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Code</Table.HeaderCell>
                    <Table.HeaderCell>Nom ligne</Table.HeaderCell>
                    <Table.HeaderCell>Directions</Table.HeaderCell>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>{displayLignes(listeLignes)}</Table.Body>
              </Table>
              <Header as="h2" content="Infos traffic" style={style.h2} />
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Ligne</Table.HeaderCell>
                    <Table.HeaderCell>Slug</Table.HeaderCell>
                    <Table.HeaderCell>Titre</Table.HeaderCell>
                    <Table.HeaderCell>Message</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>{displayTraffic(listeTraffic)}</Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default RATP;

function displayLignes(lignes) {
  if (typeof lignes.result != "undefined") {
    return lignes.result.metros.map((data) => (
      <Table.Row>
        <Table.Cell>{data.code}</Table.Cell>
        <Table.Cell>{data.name}</Table.Cell>
        <Table.Cell>{data.directions}</Table.Cell>
        <Table.Cell>{data.id}</Table.Cell>
      </Table.Row>
    ));
  }
}

function displayTraffic(traffic) {
  if (typeof traffic.result != "undefined") {
    return traffic.result.metros.map((data) => (
      <Table.Row>
        <Table.Cell>{data.line}</Table.Cell>
        <Table.Cell>{data.slug}</Table.Cell>
        <Table.Cell>{data.title}</Table.Cell>
        <Table.Cell>{data.message}</Table.Cell>
      </Table.Row>
    ));
  }
}
