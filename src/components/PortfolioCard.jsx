import React from 'react';

import styles from './portfolio-card.module.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const PortfolioCard = props => {
  const { name, description, coverImage, video, link } = props.data;

  const img = require(`${coverImage}`);
  let media = <img src={img} width="100%" alt />;
  if (video) {
    // let videoSrc = require(`${video}`);
    let videoSrc = video;

    media = (
      <video controls poster={img} style={{ maxWidth: '100%' }}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  return (
    <div className={styles.itemCard}>
      <figure className="ItemCard__thumb">
        {link ? (
          <OutboundLink target="_blank" href={link}>
            {media}
          </OutboundLink>
        ) : (
          media
        )}
        <h5>{name}</h5>
        <span>{description}</span>
      </figure>
    </div>
  );
};

export default PortfolioCard;
