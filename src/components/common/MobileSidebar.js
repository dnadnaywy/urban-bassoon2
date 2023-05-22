import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../../styles/components/common/mobileSidebar.css';

function MobileSidebar(props) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    const scroll2El = elId => {
        const el = document.getElementById(elId);
        if (el) {
            setIsMenuOpen(false);
            window.scrollTo({
                top: el.offsetTop,
                behavior: 'smooth',
            });
        } else {
            setIsMenuOpen(false);
        }
    };

    return (
        <Menu isOpen={isMenuOpen} onStateChange={(state) => setIsMenuOpen(state.isOpen)} crossButton={true}>
            <div className='navigationList'>
                <div className='navigationListButton' onClick={handleMenuClose}>Close</div>
                <div className='navigationListButton'>Home</div>
                <div className='navigationListButton' goto="browsehere" onClick={scroll2El}>Browse</div>
                <div className='navigationListButton'>Favorites</div>
                <div className='navigationListButton'>About Us</div>
            </div>
            <div className='mobileSearchBar' >
                <input type='text' placeholder='Search' />
            </div>
            <div className='mobileLoginButtons'>
                {props.loginStatus ? props.profile : props.login}
            </div>
        </Menu>
    );
}

export default MobileSidebar;