import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, title, mediumCoverImage, summary, genres}) {
    return (
        <div>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <img src={mediumCoverImage} alt={title}></img>
        <p>{summary}</p>
        <ul>
          {genres.map((genre) => 
          <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    mediumCoverImage : PropTypes.string,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;