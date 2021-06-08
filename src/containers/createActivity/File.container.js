import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFile } from '../../store/modules/activity';
import { setPreviewFile } from '../../store/modules/preview';
import File from '../../components/createActivity/File';

const FileContainer = () => {
  const dispatch = useDispatch();

  const saveFile = data => dispatch(setFile(data));
  const savePreviewFile = data => dispatch(setPreviewFile(data));

  const previewFile = useSelector(state => state.preview.previewFile);

  useEffect(() => {
    savePreviewFile('');
    saveFile('');
  }, []);

  const onChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
      savePreviewFile(file.name);
    } else {
      savePreviewFile(previewFile);
    }

    saveFile(file);
  };

  const onClick = event => {
    event.preventDefault();

    savePreviewFile('');
    saveFile('');
  };

  return (
    <File onChange={onChange} previewFile={previewFile} onClick={onClick} />
  );
};

export default FileContainer;
