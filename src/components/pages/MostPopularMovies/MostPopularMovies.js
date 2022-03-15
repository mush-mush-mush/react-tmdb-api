import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularMovies } from '../../../actions';
import { List, ListHeader } from '../../List/Lists';
import MovieListItem from '../../List/MovieListItem';
import Loading from '../../Loading/Loading';

class MostPopularMovies extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPopularMovies();
  }

  renderContent() {
    return this.props.popularMovies.map((movie, index) => <MovieListItem movie={movie} index={index} key={index}></MovieListItem>);
  }

  render() {
    return (
      <section className="section">
        <List>
          <ListHeader>Most Popular Movies</ListHeader>
          {this.props.popularMovies ? this.renderContent() : <Loading />}
        </List>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularMovies: state.movies.popularMovies,
  };
};

export default connect(mapStateToProps, { fetchPopularMovies })(MostPopularMovies);