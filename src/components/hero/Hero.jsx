import './Hero.scss';

import Wrapper from '../wrapper/Wrapper';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.svg';
import hero3 from '../../assets/hero3.svg';

const Hero = () => {
  return (
    <section className="hero">
      <Wrapper className="hero__container">
        <div className="hero__left">
          <h1>A Global Community of Experts</h1>
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

          <div className="hero__btn-container">
            <a href="" className="button-primary">
              Get Started
            </a>
            <a href="#" className="button-outline">
              How it's works
            </a>
          </div>
        </div>
        <div className="hero__right">
          <img src={hero1} alt="" className="img-1" />
          <img src={hero2} alt="" className="img-2" />
          <img src={hero3} alt="" className="img-3" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
