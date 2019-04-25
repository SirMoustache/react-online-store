/**
 * Absolute imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

/**
 * Theme
 */
import { GUTTER } from '../../../theme/sizes';
import { COLOR_BORDER } from '../../../theme/colors';

const Root = styled.div`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 'initial')};
  outline: 2px dashed ${COLOR_BORDER};
  outline-offset: -${GUTTER}px;
  padding: ${GUTTER * 4}px;
  text-align: center;
  font-size: 20px;
  transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;

  ${({ isDragActive }) => isDragActive && `outline-offset: 0;`}
`;

const FileDropZone = ({ onDrop, disabled }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled,
  });

  return (
    <Root {...getRootProps()} isDragActive={isDragActive} disabled={disabled}>
      <input {...getInputProps()} />
      Drop it!
    </Root>
  );
};

FileDropZone.propTypes = {
  onDrop: PropTypes.func,
  disabled: PropTypes.bool,
};

export default FileDropZone;
