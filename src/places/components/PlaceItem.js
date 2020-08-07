import React, { useState } from 'react'
import Card from '../../shered/components/UIElements/Card'
import Button from '../../shered/components/FormElements/Button'
import Modal from '../../shered/components/UIElements/Modal'

import './PlaceItem.css'

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false)

  const openMapHandle = () => setShowMap(true)

  const closeMapHandle = () => setShowMap(false)

  return (
    <React.Fragment>
      <Modal 
        show={showMap} 
        onCancel={closeMapHandle} 
        header={props.address} 
        contentClass="place-item__modal-content" 
        footerClass="place-item__modal-actions" 
        footer={<Button onClick={closeMapHandle}>CLOSE</Button>}>
        <div className="map-container">
          <h2>THE MAP:</h2>
        </div>  
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandle}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
}

export default PlaceItem
