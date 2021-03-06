import React, { useState } from 'react';

const SaveNewBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  return (
    <>
      <input
        required='required'
        type='number'
        className='form-control mr-3'
        id='name'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button 
      type="button"
      className='btn btn-outline-success'
      onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default SaveNewBudget;