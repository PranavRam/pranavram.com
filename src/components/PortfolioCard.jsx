import React from 'react'

import styles from './portfolio-card.module.css';
import CapiViz from '../../public/static/img/portfolio/capi-viz.png'
const PortfolioCard = (props) => {
    return (
        <div className="ItemCard">            
            <figure className="ItemCard__thumb">
              <img src={CapiViz} width='100%' alt />
              <span className="shadow cover" />
            </figure>
          </div>
    )
}

export default PortfolioCard;