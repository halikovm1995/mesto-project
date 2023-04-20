const formElement = document.querySelector('#popup-profile');
const profileButton = document.querySelector('.profile__edit-button')
const nameInput = document.querySelector('#nameinput'); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('#jobinput');// Воспользуйтесь инструментом .querySelector()
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description')

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

profileButton.addEventListener('click', function(){ //добавление кнопки открытия попап профиля
    formElement.classList.add('popup_opened')
 })
const popupClose = document.querySelector('.popup__close-icon');
popupClose.addEventListener('click', function() {
    formElement.classList.remove('popup_opened');

})
 

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    formElement.classList.remove('popup_opened');

}

formElement.addEventListener('submit', handleFormSubmit); 
nameInput.value = profileName.textContent
jobInput.value = profileDescription.textContent 

function addItem(linkValue, nameValue){
    const itemTemplate = document.querySelector('#template-element').textContent;
    const itemElement = itemTemplate.querySelector('.element__item').cloneNode(true);
    itemElement.querySelector('.element__image').src = linkValue;
    itemElement.querySelector('.element__title').textContent = nameValue;
    elementContainer.append(itemElement);
}



