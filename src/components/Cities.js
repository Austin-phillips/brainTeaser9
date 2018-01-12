import React, { Component } from 'react';
import { Header, Segment, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getCities } from '../actions/city';

class Cities extends Component {

  componentDidMount() {
    this.props.dispatch(getCities())
  }
  render() {
    return(
      <Segment basic>
        <Header as='h1' textAlign='center'>GOT Cities</Header>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return { cities: state.cities }
}
export default connect(mapStateToProps)(Cities);