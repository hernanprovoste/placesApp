import React from 'react';
import Input from '../../shered/components/FormElements/Input'

import './NewPlace.css'

const NewPlace = () => {
  return (
    <form className="place-form">
        <Input element="input" type="text" label="Title" validato={[]} errorText="Please enter a real value" />
    </form>
  );
};

export default NewPlace;