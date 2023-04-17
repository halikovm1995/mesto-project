const popupProfile = document.querySelector('#popup-profile');
const profileButton = document.querySelector('.profile__edit-button')
 profileButton.addEventListener('click', function(){ //добавление кнопки открытия попап профиля
     popupProfile.classList.add('popup_opened')
 })
const popupClose = document.querySelector('.popup__close-icon');
popupClose.addEventListener('click', function() {
      popupProfile.classList.remove('popup_opened');
})
 
// Находим форму в DOM
const formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = // Воспользуйтесь инструментом .querySelector()
const jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 