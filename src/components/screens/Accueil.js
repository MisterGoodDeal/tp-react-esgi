import "semantic-ui-css/semantic.min.css";
import { Grid, Header, Segment, Image } from "semantic-ui-react";

// Images
import RATPLogo from "../../assets/images/ratp.png";
import IqAirLogo from "../../assets/images/iq_air.png";

const style = {
  h1: {
    marginTop: "2em",
    fontSize: "35px",
  },
  api_title: {
    fontSize: "35px",
  },
  segment: {
    marginLeft: 50,
    marginRight: 50,
  },
};

function Accueil() {
  return (
    <div>
      <Header
        as="h1"
        content="TP React API"
        textAlign="center"
        style={style.h1}
      />
      <Segment raised style={style.segment}>
        <Grid columns={2} stackable>
          <Grid.Row columns={3}>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <Segment>
                Ce TP de React permet de lier deux APIs sur une interface
                graphique et de les mettre en relation. J'ai choisi ici de créer
                une application liant une API de transport en commun et une API
                de qualité de l'air afin de favoriser un trajet en transport en
                commun plutôt qu'en voiture en fonction de la qualité de l'air
              </Segment>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment>
                <Image src={RATPLogo} size="small" circular centered />
                <Header
                  as="h2"
                  content="API RATP"
                  textAlign="center"
                  style={style.api_title}
                />
                Cette API créée par Pierre Grimaud permet de récupérer plusieurs
                informations concernant la RATP tel que la récupération des noms
                des lignes de métro, le nom des stations, les différentes
                destinations possibles, des informations sur les horaires des
                prochains métros/bus/rer selon un certain slug, ainsi que des
                informations sur la perturbation du trafic.
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
                <Image src={IqAirLogo} size="medium" centered />
                <Header
                  as="h2"
                  content="API IqAir"
                  textAlign="center"
                  style={style.api_title}
                />
                Cette API permet de récupérer des informations sur les
                conditions météorologiques ainsi que la qualité de l'air en
                fonction de la position de l'utilisateur.
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default Accueil;
