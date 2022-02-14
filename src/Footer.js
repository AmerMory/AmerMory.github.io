import twitter from './images/Twitter Icon.svg';
import facebook from './images/Facebook Icon.svg';
import instagram from './images/Instagram Icon.svg';
import gitHub from './images/GitHub Icon.svg';

export default function Footer() {
    return (
        <footer>
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="https://www.facebook.com/mohamed.amer2266/" target='_blank' rel="noreferrer"><img src={facebook} alt="" /></a>
            <a href="https://www.instagram.com/mohamed_amer00" target='_blank' rel="noreferrer"><img src={instagram} alt="" /></a>
            <a href="https://github.com/AmerMory" target='_blank' rel="noreferrer"><img src={gitHub} alt="" /></a>
        </footer>
    )
}