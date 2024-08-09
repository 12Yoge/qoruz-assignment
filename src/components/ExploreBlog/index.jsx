import { blogCard } from "constants/blogCard";

import rightArrow from "assets/images/rightIcon.svg";

import "components/ExploreBlog/exploreBlog.scss";

const ExploreBlog = () => {
  return (
    <section className="blog">
      <div className="blogData">
        <span> Agency Partnership</span>
        <img src={rightArrow} alt="rightArrow" />
        <span> Public Relations Agencies</span>
        <img src={rightArrow} alt="rightArrow" />
        <span className="blogDataSpecialText">
          Top 100 Public Relations Agencies in India (2024)
        </span>
      </div>

      <p className="blogDataMobile">
        With a user base of around 100M, India stands next to the US in the
        Instagram users count. With the advent of the internet in India, there
        was a huge spike in the total social media users and also the
        Influencers. Among different Social media platforms, Instagram always
        remains a <span className="readMore">read more...</span>
      </p>

      <div className="blogContainer">
        <div className="blogContainerHeaders">
          <h3>Leverage influencer tools</h3>
          <h4>Explore More Top Public Relations Agencies</h4>
          <p>
            Discover more top PR agencies for effective communication that
            elevates your brand. Explore innovation and influence in every
            strategy.
          </p>
        </div>

        <ul className="blogCardList">
          {blogCard.map((item, index) => (
            <li className="blogCard" key={index}>
              <img src={item?.image} alt="blogImg" />

              <div className="blogCardDetails">
                <h3>{item?.title}</h3>
                <span>
                  {item?.explore}
                  <img src={item?.arrow} alt="blackArrow" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExploreBlog;
