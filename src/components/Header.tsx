import './componentStyles.css';

import NavigationBar from '../components/NavigationBar';

const Header: React.FC<{ accentColor: string }> = ({ accentColor }) => {

    return (
        <header className="Header">
            <h1>Nicholas Aristizabal</h1>
            <NavigationBar />
        </header>
    );
};

export default Header;