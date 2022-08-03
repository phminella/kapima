import { HeaderStyle } from './styles/HeaderStyle'
import { HeaderMobileStyle } from './styles/mobile/HeaderMobileStyle';
import Nav from './Nav';
import Link from '../node_modules/next/link.js';

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <div className='header-wrapper'>
                    <div className='header-logo'>
                        <Link href='/'><img width={160} src="../img/logo.png" alt='logo' /></Link>
                    </div>
                    <Nav></Nav>
                    <div className='header-icons'>
                        <ul>
                            <li><img src="/img/icon-react.svg" alt="" /></li>
                            <li><img src="/img/icon-next.svg" alt="" /></li>
                            <li><img src="/img/icon-keystonejs.svg" alt="" /></li>
                            <li><img src="/img/icon-apollo.svg" alt="" /></li>
                            <li><img src="/img/icon-graphql.svg" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </HeaderStyle>
            <HeaderMobileStyle>
               <Nav></Nav>
            </HeaderMobileStyle>
        </>
    )
}
export default Header;