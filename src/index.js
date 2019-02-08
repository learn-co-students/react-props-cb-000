class MovieCard extends React.Component {
  render() {
    <MovieCard
      title="Jurassic World"
      poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
      genres={jurassicWorldGenres}
    />,
    document.getElementById('root')
  );
  }
}

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    genres={jurassicWorldGenres}
  />,
  document.getElementById('root')
);
