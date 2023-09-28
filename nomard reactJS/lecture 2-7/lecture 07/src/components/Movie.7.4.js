import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({id,rank, name, date}) {
    console.log();
    return (
    <div>
        <li><Link to={`/detail/${id}/${date}`}>{rank} {name} </Link></li>
        <p>{name} : Movie infromation </p>
    </div>
    );
}

Movie.propType ={
    rank: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
 export default Movie;