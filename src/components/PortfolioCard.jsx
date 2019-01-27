import React from 'react';

import styles from './portfolio-card.module.css';

const PortfolioCard = props => {
  const { name, description, coverImage, video, link } = props.data;
  console.log(props.data);
  const img = require(`${coverImage}`);
  let media = <img src={img} width="100%" alt />;
  if (video) {
    let videoSrc = require(`${video}`);
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
          <a target="_blank" href={link}>
            {media}
          </a>
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
