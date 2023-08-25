import './CompanySection.scss';
import Wrapper from '../wrapper/Wrapper';
import com1 from '../../assets/com1.svg';
import com2 from '../../assets/com2.svg';
import com3 from '../../assets/com3.svg';
import com4 from '../../assets/com4.svg';
import companySec from '../../assets/companySec.svg';
import AS from '../../assets/AS.svg';
import GP from '../../assets/GP.svg';
import companySec_background from '../../assets/companySec_background.png';

const Companysection = () => {
  return (
    <section className="company">
      <Wrapper>
        <h4>Trusted by over 0 comapies</h4>
        <div className="company__companies">
          <img src={com2} alt="" />
          <img src={com3} alt="" />
          <img src={com1} alt="" />
          <img src={com4} alt="" />

          <img src={com2} alt="" />
          <img src={com3} alt="" />
        </div>

        <div className="company__container">
          <div className="company__left">
            <img src={companySec} alt="" className="img-1" />
            <div className="img-2">
              <img src={AS} alt="" />
            </div>
            <div className="img-3">
              <img src={GP} alt="" />
            </div>
          </div>

          <div className="company__right">
            <h3>Sass work process </h3>
            <p>
              We so enraties cultivated astonishde is. offeted chiefly
              tarther
            </p>

            <div className="company___points-container">
              <div className="company__point">
                <div className="company__point-icon">
                  <div>1</div>
                </div>
                <div className="company__point-text">
                  Download & Register App
                </div>
              </div>
              <div className="company__point">
                <div className="company__point-icon">
                  <div>2</div>
                </div>
                <div className="company__point-text">
                  Project Information & submit
                </div>
              </div>
              <div className="company__point">
                <div className="company__point-icon">
                  <div>3</div>
                </div>
                <div className="company__point-text">
                  Contribute with talent
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <img
        src={companySec_background}
        alt=""
        className="company__bg"
      />
    </section>
  );
};

export default Companysection;
