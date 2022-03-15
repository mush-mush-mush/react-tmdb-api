import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieCredits, fetchTVCredits, fetchPersonCredits } from '../../../actions';
import PersonListItem from '../../List/PersonListItem';
import CreditListItem from '../../List/CreditListItem';
import Loading from '../../Loading/Loading';

import './credits.scss';

class Credits extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.match.params.category === 'tv') {
      this.props.fetchTVCredits(this.props.match.params.id);
    } else if (this.props.match.params.category === 'persons') {
      this.props.fetchPersonCredits(this.props.match.params.id);
    } else {
      this.props.fetchMovieCredits(this.props.match.params.id);
    }
  }

  renderContent(credits) {
    if (this.props.match.params.category === 'persons') {
      return credits.map((credit, index) => <CreditListItem credits={credit} key={index} />);
    } else {
      return credits.map((person, index) => <PersonListItem person={person} key={index} />);
    }
  }

  render() {
    console.log(this.props.match.params.category);
    return (
      <section className="section person-list">
        <div className="row">
          <div className="col-1">
            <h1>Casts</h1>
            {this.props.credits ? this.renderContent(this.props.credits.cast) : <Loading />}
          </div>
          <div className="col-2">
            <h1>Crews</h1>
            {this.props.credits ? this.renderContent(this.props.credits.crew) : <Loading />}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    credits: state[ownProps.match.params.category].credits,
  };
};

export default connect(mapStateToProps, { fetchMovieCredits, fetchTVCredits, fetchPersonCredits })(Credits);