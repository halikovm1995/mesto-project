const formElement = document.querySelector('#popup-profile');
const profileButton = document.querySelector('.profile__edit-button') // переменная кнопки редактировать профиль
const nameInput = document.querySelector('#nameinput'); // 
const jobInput = document.querySelector('#jobinput');// 
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description')
const formAddMesto = document.querySelector('#popup-mesto'); 
const addPhotoButton = document.querySelector('.profile__add-button');
const elementContainer = document.querySelector('.element__list')
const itemTemplate = document.querySelector('#template-item').content;
const popupClose = document.querySelectorAll('#popup-close');
const nameMesto = ducument.querySelector('#name-mesto');
const linkMesto = document.querySelector('#link-mesto');
// popupClose.addEventListener('click', function() {
//     formElement.classList.remove('popup_opened');

// })

for(let i = 0; i < popupClose.length; i++){
  const el = popupClose[i]; 
  el.addEventListener('click', function() {
    formElement.classList.remove('popup_opened');
    formAddMesto.classList.remove('popup_opened');
  })
}
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

 
addPhotoButton.addEventListener('click', function(){ //добавление кнопки открытия попап профиля
  formAddMesto.classList.add('popup_opened')
})




function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    formElement.classList.remove('popup_opened');

}

function createCards(nameCardValue, linkCardValue) {
  const itemElement = itemTemplate.querySelector('.element__item').cloneNode(true);
  itemElement.querySelector('.element__image').src = linkCardValue;
  itemElement.querySelector('.element__title').textContent = nameCardValue;




}
formElement.addEventListener('submit', addCards); 
function addCards(evt) {

  evt.preventDefault(); 

elementContainer.append(itemElement);

}

formElement.addEventListener('submit', handleFormSubmit); 
nameInput.value = profileName.textContent
jobInput.value = profileDescription.textContent 



initialCards.forEach(function (element){
  const itemElement = itemTemplate.querySelector('.element__item').cloneNode(true);
  itemElement.querySelector('.element__image').src = element.link;
  itemElement.querySelector('.element__title').textContent = element.name;
  elementContainer.append(itemElement);
});



