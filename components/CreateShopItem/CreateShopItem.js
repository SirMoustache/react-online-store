/**
 * Absolute imports
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 *
 */
import FileDropZone from '../Forms/FileDropZone';

/**
 * Services
 */
import { uploadImage } from '../../services/fileServices';

const CreateShopItem = ({ onSubmit }) => {
  const [shopItem, setShopItem] = useState({ title: '' });
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = event => {
    const { target } = event;
    const { name, value } = target;
    setShopItem(currentState => ({ ...currentState, [name]: value }));
  };

  const handeSubmit = event => {
    event.preventDefault();
    console.log(shopItem);
    onSubmit({ variables: shopItem });
  };

  const handeFileChange = async acceptedFiles => {
    setIsUploading(true);

    await Promise.all(
      acceptedFiles.map(async file => {
        const uploadResult = await uploadImage(file);
        const preview = uploadResult.secure_url;
        const largePreview = uploadResult.eager[0].secure_url;

        setShopItem(currentState => ({
          ...currentState,
          preview,
          largePreview,
        }));
      }),
    );

    setIsUploading(false);
  };

  return (
    <form onSubmit={handeSubmit}>
      <h4>Create Shop Item</h4>
      <FileDropZone onDrop={handeFileChange} disabled={isUploading} />
      <input
        type="text"
        name="title"
        value={shopItem.title}
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
