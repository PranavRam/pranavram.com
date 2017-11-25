import React from 'react'
import Portfolio from './PortfolioCard';

const Work = (props) => {
    const data = props.data;
    return (
        <div className="row">
            {data.map(d => {
                return (
                    <div key={d.name} className="column">
                        <Portfolio data={d} />
                    </div>
                )
            })}            
        </div>
    )
}

export default Work;