import xleft from './images/x-men.jpg';
import xright from './images/x-men3.jpg';

const Header = () => {
    return (
        <header>
            <img src={xleft} alt={"xmen"} /><img className='floor-pic' src={xright} alt={"xmen"} />
        </header>
    )
}

export default Header