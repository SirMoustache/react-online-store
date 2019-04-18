/**
 * Absolute imports
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 *
 */
import FileDropZone from '../Forms/FileDropZone';

const CreateShopItem = ({ onSubmit }) => {
  const [state, setState] = useState({ title: '' });

  const handleChange = event => {
    const { target } = event;
    const { name, value } = target;
    setState(currentState => ({ ...currentState, [name]: value }));
  };

  const handeSubmit = event => {
    event.preventDefault();
    console.log(state);
    onSubmit({ variables: state });
  };

  const handeFileChange = (acceptedFiles, rejectedFiles) => {
    console.log(
      'acceptedFiles: ',
      acceptedFiles,
      'rejectedFiles: ',
      rejectedFiles,
    );
  };

  return (
    <form onSubmit={handeSubmit}>
      <h4>Create Shop Item</h4>
      <FileDropZone onDrop={handeFileChange} />
      <input
        type="text"
        name="title"
        value={state.title}
        placeholder="Title"
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
};

CreateShopItem.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateShopItem;
