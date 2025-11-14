import { Icon } from '../svg';
import Button from './Button';
import avatarImg from '../images/avatar-lisa.jpg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <h1 className='sr-only'>Mood Tracker</h1>
        <Icon name='logo' />
      </div>

      <Button type='button' className='btn btn-profile'>
        <img src={avatarImg} alt='User Avatar' className='header__avatar' />
        <Icon name='chevron' />
      </Button>
    </header>
  );
};
export default Header;
