import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardPreview(props) {
  return (
    <Card className="mb-3 preview-card" style={{ backgroundColor: props.bgColor }}>
      <Card.Body className='d-flex align-items-center'> 
        <div className="p-2 rounded prevIcon ">
          <FontAwesomeIcon icon={props.icon} size="xl" />
        </div>
        <div className="d-flex flex-column ms-3">
          <h3>{props.value}</h3>
          <h6 className="">{props.title}</h6>
        </div>
      </Card.Body>
    </Card>
  )
}
