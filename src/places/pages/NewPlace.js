import React from 'react';
import Input from '../../shered/components/FormElements/Input'

import './NewPlace.css'

const NewPlace = () => {
  return (
    <form className="place-form">
        <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewPlace;