import React from 'react'
import  {Row,Col} from 'reactstrap'

const Explain = (
    {
        ask, explain1 , explain2 , bgColor
    }
) => (
            <Row className="embol-explain embol-explain-content">
                <Col xs={6} md={4} className={'embol-ask'+ bgColor}>
                    <h4>{ask}</h4>
                    <div className="arrow"></div>
                </Col>
                <Col xs={6} md={explain2 ?4:8} className="primary-explain">
                    <p>{explain1}</p>
                </Col>
                {explain2&&(<Col xs={{size: 6, offset: 6 }} md={{size: 4, offset: 0 }} className="secondary-explain">
                    <p>{explain2}</p>
                </Col>)}

            </Row>
)


export default Explain
