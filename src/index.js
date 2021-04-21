import React from 'react';
import ReactDOM from 'react-dom';

const genres = ['Action', 'Adventure', 'Science Fiction', 'Thriller']

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};
 
class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img src="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt="Mad Max: Fury Road" />
        <h2>Mad Max: Fury Road</h2>
        <small>Genres: {this.props.genres.join(',')}</small>
      </div>
    );
  }
}
 
ReactDOM.render(
  <MovieCard />,
  document.getElementById('root')
);