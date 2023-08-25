import './FeaturesSection.scss';

import Wrapper from '../wrapper/Wrapper';
import fu1 from '../../assets/fu1.svg';
import fu2 from '../../assets/fu2.svg';
import fu3 from '../../assets/fu3.svg';
import fu4 from '../../assets/fu4.svg';
import fu5 from '../../assets/fu5.svg';
import fu6 from '../../assets/fu6.svg';

const FeaturesSection = () => {
  return (
    <section className="features">
      <Wrapper>
        <div className="features__text">
          <h3>Explore our amazing features</h3>
          <p>
            s an innovative problem solver experienced in full-stack
            web development, desktop applications, and mobile app
            development. He built educational games, video content
            delivery platforms, and user management systems for one
            client, resulting in over two million user sessions in
            less than 12 months and reaching 100+ countries. his
            insight has expanded and greatly enhanced many programs
            and processes, enabling clients to further their reach and
            increase revenue.
          </p>
        </div>

        <div className="features__container">
          <div className="features__feature dark-feature">
            <img src={fu1} alt="" />
            <h4 className="dark-feature-title">Free Enrollment</h4>
            <p>
              his insight has expanded and greatly enhanced many
              programs and processes, enabling clients to further
              their reach and increase revenue.
            </p>
          </div>
          <div className="features__feature white-feature">
            <img src={fu2} alt="" />
            <h4 className="white-feature-title">
              Fast and easy registration
            </h4>
            <p>
              his insight has expanded and greatly enhanced many
              programs and processes, enabling clients to further
              their reach and increase revenue.
            </p>
          </div>
          <div className="features__feature dark-feature">
            <img src={fu3} alt="" />
            <h4 className="dark-feature-title">Crypto Support</h4>
            <p>
              his insight has expanded and greatly enhanced many
              programs and processes, enabling clients to further
              their reach and increase revenue.
            </p>
          </div>
          <div className="features__feature white-feature">
            <img src={fu4} alt="" />
            <h4 className="white-feature-title">No Hidden Fees</h4>
            <p>
              his insight has expanded and greatly enhanced many
              programs and processes, enabling clients to further
              their reach and increase revenue.
            </p>
          </div>
          <div className="features__feature dark-feature">
            <img src={fu5} alt="" />
            <h4 className="dark-feature-title">
              Automatic card lock/unlock
            </h4>
            <p>
              his insight has expanded and greatly enhanced many
              programs and processes, enabling clients to further
              their reach and increase revenue.
            </p>
          </div>
          <div className="features__feature white-feature">
            <img src={fu6} alt="" />
            <h4 className="white -feature-title">
              24/7 Customer support
            </h4>
            <p>
              his insight has expanded and greatly enhanced many
              programs and processes, enabling clients to further
              their reach and increase revenue.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default FeaturesSection;
