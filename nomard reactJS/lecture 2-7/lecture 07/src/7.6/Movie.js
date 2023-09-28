import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Movie.css';
// {id,rank, name, date}
function Movie(prop) {

    return (
    <div className="movieBox">
        <Link to={`/detail/${prop.id}/${prop.date}`}>{prop.rank} {prop.name} </Link>
        <p>{prop.name} : </p>
    </div>
    );
}

Movie.propType ={
    rank: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
 export default Movie;