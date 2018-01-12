import React, { Component } from 'react';
import { Header, Card, Grid, Image } from 'semantic-ui-react';
import getCharacters from '../actions/character';
import { connect } from 'react-redux';

class Home extends Component {

  componentWillMount() {
    this.props.dispatch(getCharacters())
  }

  displayCharacters = () => {
    const { characters } = this.props;
    return characters.map( character => {
      return(
        <Grid.Column
          key={character.id}
          computer={4}
          tablet={6}
          phone={12}
        >
          <Card centered raised fluid style={box}>
            <Image src={'https://api.got.show' + character.imageLink} />
          <Card.Content>
            <Card.Header>Character Name: {character.name}</Card.Header>
            <Card.Meta>House: {character.house}</Card.Meta>
          </Card.Content>
          </Card>
        </Grid.Column>
      )
    })
  }
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Game of Thrones Characters</Header>
        <Grid columns={12}>
          <Grid.Row centered>
            {this.displayCharacters()}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const box = {
  margin: '6px',
}

const mapStateToProps = (state) => {
  return { characters: state.characters }
}
export default connect(mapStateToProps)(Home);
