import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({rank, name}) {
    console.log();
    return (
    <div>
        <li><Link to="/detail">{rank} {name} </Link></li>
        <p>{name} : Movie infromation </p>
    </div>
    );
}

Movie.propType ={
    rank: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
 export default Movie;