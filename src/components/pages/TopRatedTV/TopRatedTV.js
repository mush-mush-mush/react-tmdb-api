import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopRatedTV } from '../../../actions';
import { List, ListHeader } from '../../List/Lists';
import MovieListItem from '../../List/MovieListItem';
import Loading from '../../Loading/Loading';

class MostPopularTV extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchTopRatedTV();
  }

  renderContent() {
    return this.props.topRatedTV.map((movie, index) => <MovieListItem movie={movie} index={index} key={index}></MovieListItem>);
  }

  render() {
    return (
      <section className="section top-list">
        <List>
          <ListHeader>Top Rated TVs</ListHeader>
          {this.props.topRatedTV ? this.renderContent() : <Loading />}
        </List>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topRatedTV: state.tv.topRatedTV,
  };
};

export default connect(mapStateToProps, { fetchTopRatedTV })(MostPopularTV);