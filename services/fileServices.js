/**
 * Absolute imports
 */
import axios from 'axios';

export const uploadImage = (file, options) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'react-online-store');

  return axios
    .post(
      'https://api.cloudinary.com/v1_1/sir-moustache/image/upload',
      data,
      options,
    )
    .then(response => response.data);
};
