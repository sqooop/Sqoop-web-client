import React from 'react';
import styled from 'styled-components';
import PostImageIcon from '../../assets/icons/PostImageIcon.svg';

const PhotoUpload = props => {
  const { onChange, image } = props;
  return (
    <>
      <StyledPhotoInput
        type="file"
        id="ImageUpload"
        name="ImageUpload"
        accept="image/*"
        onChange={onChange}
      />
      <StyledPhotoPreview>
        <label htmlFor="ImageUpload">
          {!image ? (
            <StyledNoPhoto>
              <img src={PostImageIcon} alt="userImage"></img>
            </StyledNoPhoto>
          ) : (
            <img className="imgExist" src={image} alt="previewImage"></img>
          )}
        </label>
      </StyledPhotoPreview>
    </>
  );
};

const StyledPhotoInput = styled.input`
  border: 0.1rem solid #000000;
  width: 0.01rem;
  height: 0.01rem;
  opacity: 0;
  z-index: -1;

  &:focus {
    outline: none;
    cursor: pointer;
  }

  & + label {
    outline: none;
  }
`;

const StyledPhotoPreview = styled.div`
  &:hover {
    background-color: #eeeeee, 90%;
  }
  .imgExist {
    border-style: 'none';
    width: 35.15625vw;
    height: 19.765625vw;
    object-fit: cover;
  }
`;

const StyledNoPhoto = styled.div`
  border: 0.1rem solid #000000;
  width: 35.15625vw;
  height: 19.765625vw;
  cursor: pointer;
  img {
    display: block;
    border-style: 'none';
    width: 6.3281vw;
    margin: 0 auto;
    margin-top: 17%;
  }
`;

export default PhotoUpload;
