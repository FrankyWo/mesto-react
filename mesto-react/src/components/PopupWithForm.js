import React from "react";

function PopupWithForm({ name, title, children, buttonText, isOpen, onClose, onSubmit }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button
                    className="popup__button-close"
                    onClick={onClose}
                    type="button"
                />
                <form
                    className="popup__form"
                    onSubmit={onSubmit}
                    name={name}
                    noValidate
                >
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button className="popup__button-submit" type="submit">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;