import { Link } from 'react-router-dom';
import '../App.css';

export default function Header () {
    return (
        <div className='header'>
            <Link to="/" className='title'>
                토익 영단어
            </Link>
                
            <div className='btnBox'>
                <Link to="/wordadd">
                <button style={{"width": 100,}}>Word 추가</button>
                </Link>
                <Link to="/dayadd">
                <button style={{"width": 100,}}>Day 추가</button>
                </Link>
            </div>
        </div>
    );
}