import React from 'react'

import styles from './portfolio-card.module.css';

const PortfolioCard = (props) => {
    const img = require(`./work/${props.data.name}/cover.png`);
    let media = <img src={img} width='100%' alt />
    if (props.data.fields.work.video) {
        let video = require(`./work/${props.data.name}/video.mp4`);
        media = (
            <video controls poster={img} style={{maxWidth: '100%'}}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }
    return (
        <div className={styles.itemCard}>            
            <figure className="ItemCard__thumb">
              {media}
              <h5>{props.data.name}</h5>
            </figure>
          </div>
    )
}

export default PortfolioCard;