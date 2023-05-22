import './pages/index.css';


function App() {
    return (
        <div className='App'>
            <div className='page'>
                <header className="header">
                    <div className="header__logo"></div>
                </header>

                <main className="contet">
                    <section className="profile">
                        <div className="profile__avatar">
                            <img className="profile__avatar-image" src="#" alt="#" />
                            <button className="profile__avatar-edit-button"></button>
                        </div>
                        <div className="profile__info">
                            <h1 className="profile__name">Жак-Ив Кусто</h1>
                            <button className="profile__button-edit" type="button"></button>
                            <p className="profile__description">Исследователь океана</p>
                        </div>
                        <button className="profile__button-add" type="button"></button>
                    </section>

                    <section className="elements"></section>

                </main>
1
                <footer className="footer">
                    <p className="footer__copyright"> @ 2023 Mesto Russia</p>
                </footer>

                <template id="element-template">
                    <article className="elements__card">
                        <img className="elements__image" alt="#" />
                        <div className="elements__container">
                            <h2 className="elements__title"></h2>
                            <div className="elements__like-container">
                                <button className="elements__button-like" type="button"></button>
                                <span className="elements__like-counter">0</span>
                            </div>
                        </div>
                        <button className="elements__button-delete" type="button"></button>
                    </article>
                </template>


                <div className="popup popup_edit-form">
                    <div className="popup__container">
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <form className="popup__form" name="popup_edit-form" novalidate>
                            <input className="popup__input popup__input_type_name" id="input-name" name="userName" type="text"
                                placeholder="Имя" minlength="2" maxlength="40" required />
                            <span className="input-name-error"></span>
                            <input className="popup__input popup__input_type_job" id="job-input" name="job" type="text"
                                placeholder="Описание" minlength="2" maxlength="200" required />
                            <span className="job-input-error"></span>
                            <input className="popup__button-submit" type="submit" value="Сохранить" />
                        </form>
                        <button className="popup__button-close" value="Создать" type="button"></button>
                    </div>
                </div>

                <div className="popup popup_add-form">
                    <div className="popup__container">
                        <h2 className="popup__title">Новое место</h2>
                        <form className="popup__form popup__form_new-card" name="popup_add-form" id="card-name" novalidate>
                            <input className="popup__input popup__input_type_title" id="input-title" name="name" type="text"
                                placeholder="Название" minlength="2" maxlength="30" required />
                            <span className="input-title-error"></span>
                            <input className="popup__input popup__input_type_link" id="input-link" name="link" type="url"
                                placeholder="Ссылка на картинку" required />
                            <span className="input-link-error"></span>
                            <input className="popup__button-submit" type="submit" value="Создать" />
                        </form>
                        <button className="popup__button-close" type="button"></button>
                    </div>
                </div>

                <div className="popup popup_edit-avatar">
                    <div className="popup__container">
                        <h2 className="popup__title">Обновить аватар</h2>
                        <form className="popup__form popup__form_avatar-edit" name="popup_edit-avatar-form" action="#" novalidate>
                            <input className="popup__input popup__input_type_link" type="url" name="link"
                                placeholder="Ссылка на картинку" id="avatar-link-input" value="" required />
                            <span className="avatar-link-input-error popup__input-error"></span>
                            <input className="popup__button-submit" type="submit" value="Сохранить" />
                        </form>
                        <button className="popup__button-close" type="button"></button>
                    </div>
                </div>

                <div className="popup popup_image-form">
                    <figure className="popup__image-container">
                        <img className="popup__image-place" src="#" alt="" />
                        <figcaption className="popup__image-title"></figcaption>
                        <button className="popup__button-close" type="button"></button>
                    </figure>
                </div>

                <div className="popup popup_confirm-form">
                    <div className="popup__container">
                        <button className="popup__button-close" type="button"></button>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <input className="popup__button-submit" type="submit" value="Да" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;