import React from 'react'
import CountStyle from '../../styles/UserCard/CountStyle'

const PlanCount = () => {
    return (
        <CountStyle>
            <div>
                <div className="click">2450</div>
                <div className="clicktext">clicks reviewed</div>
            </div>
            <div className="verticalLine"></div>
            <div>
                <div className="click">5000</div>
                <div className="clicktext">Monthly clicks</div>
            </div>
        </CountStyle>
    )
}

export default PlanCount