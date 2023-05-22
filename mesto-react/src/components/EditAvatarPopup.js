import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onLoading }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = '';
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  function handleChangeAvatar() {
    return inputRef.current.value;
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText={onLoading ? `Сохранение` : `Сохранить`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        className="popup__input"
        name="link"
        type="url"
        id="avatar-link-input"
        placeholder="Ссылка на картинку"
        ref={inputRef}
        onChange={handleChangeAvatar}
        required
      />
      <span className="avatar-link-input-error popup__input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;