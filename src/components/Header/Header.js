import './Header.css'

const Header = ({ }) => {
    return ( 
    <div className='header'>
        <div className='inner_header'></div>
        <div className='logo_container'>
        <h1><img src='./logo.png' alt='hui'/></h1>
        <div className='location'></div>
        <h2><a>United Kingdom</a></h2>
        </div>
    </div>
    ) }
    
    export default Header
