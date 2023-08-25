import './Footer.scss';
import Wrapper from '../wrapper/Wrapper';
import motkhsss from '../../assets/motkhss.svg';
import Appstore from '../../assets/footer-appstore.png';
import PlayStore from '../../assets/footer-playstore.png';

const Footer = () => {
  return (
    <section className="footer">
      <Wrapper>
        <div className="footer__text">
          <h3>The feature of freelance</h3>
          <p>
            built educational games, video content delivery platforms,
            and user management systems for one client, resulting in
            over two million user sessions in less than 12 months and
            reaching 100+ countries. his insight has expanded and
            greatly enhanced many programs and processes, enabling
            clients to further their reach and increase revenue.
          </p>
        </div>

        <div className="footer__stores">
          <img src={Appstore} alt="" />
          <img src={PlayStore} alt="" />
        </div>

        <div className="footer__logo">
          <img src={motkhsss} alt="" />
        </div>

        <ul className="footer__links">
          <li>Services</li>
          <li>Pricing</li>
          <li>Carrers</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>
      </Wrapper>
    </section>
  );
};

export default Footer;
