const formElementProfile = document.querySelector('#popup-profile');
const profileButton = document.querySelector('.profile__edit-button') // переменная кнопки редактировать профиль
const nameInput = document.querySelector('#nameinput'); // 
const jobInput = document.querySelector('#jobinput');// 
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description')
const formAddMesto = document.querySelector('#popup-mesto'); 
const addPhotoButton = document.querySelector('.profile__add-button');
const elementContainer = document.querySelector('.element__list')
const itemTemplate = document.querySelector('#template-item').content;
const popupCloseList = document.querySelectorAll('.popup__close-icon');
const nameMesto = document.querySelector('#name-mesto');
const linkMesto = document.querySelector('#link-mesto');
const elementBigImage = document.querySelector('.popup__image_big');
const elementBigText = document.querySelector('.popup__image_text');
const popupImage = document.querySelector('#popup-image')
const formMesto = document.querySelector('#form-mesto');
const formName = document.querySelector('#form-name')
const popupList = document.querySelectorAll('.popup');
//Массив с картинками
const initalCardsList = [
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

function closePopup(popup){
  popup.classList.remove('popup_opened');
};
function openePopup(popup){
  popup.classList.add('popup_opened');
  
};




  //добавление кнопки открытия попап профиля
profileButton.addEventListener('click', function(){
  openePopup(formElementProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent; 
});



popupCloseList.forEach(function(item){
  item.addEventListener('click', function() {
    popupList.forEach(function(el){
      closePopup(el);
    });
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
  });
});

    //Закрытие Esc
    document.addEventListener("keydown", function(evt) {
      if (evt.key === 'Escape') {
        const activePopup = document.querySelector(".popup_opened")
        closePopup(activePopup);

      }
    })

    document.addEventListener("click", function(evt) {
      if (evt.target.classList.contains('popup')) {
        const activePopup = document.querySelector(".popup_opened")
        closePopup(activePopup);
        
      }
      console.log(privet)
    })
//добавление кнопки открытия попап место
addPhotoButton.addEventListener('click', function(){
  openePopup(formAddMesto);
  linkCardValue = '';
  nameCardValue ='';
})

// Функция изменения данных в профиле
function editPopupProfile(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value
  profileDescription.textContent = jobInput.value
  closePopup(formElementProfile);
}

//слушатель события рекдактировать профиль
formName.addEventListener('submit', editPopupProfile); 
initalCardsList.forEach(function (el){
  elementContainer.append(createCards(el.name, el.link))
})

//Функция создания карточки место с картиной
function createCards(nameCardValue, linkCardValue) {
  const itemElement = itemTemplate.querySelector('.element__item').cloneNode(true);
  itemElement.querySelector('.element__image').src = linkCardValue;
  itemElement.querySelector('.element__image').alt = nameCardValue;
  itemElement.querySelector('.element__title').textContent = nameCardValue;
//обработчик лайков карточек
itemElement.querySelector('.element__like').addEventListener('click', function(evt){
  evt.target.classList.toggle('element__like_active')
})

//обработчик удаления карточек
itemElement.querySelector('.element__delete').addEventListener('click', function(evt){
  evt.target.closest('.element__item').remove()
})

//обработчик увеличения картинок
itemElement.querySelector('.element__image').addEventListener('click', function(evt){
  const imgSrc = evt.target.getAttribute('src');
  const nameNe = evt.target.alt;
  const imageAlt = evt.target.getAttribute('alt');
  elementBigText.textContent = nameNe;
  elementBigImage.setAttribute('src', imgSrc)
  elementBigImage.setAttribute('alt', nameNe)
  // popupImage.classList.add("popup_opened");
  openePopup(popupImage)
})
return itemElement
}
 
//Функция добавления карточки место
function addCards(evt) {
  evt.preventDefault(); 
  elementContainer.prepend(createCards(nameMesto.value, linkMesto.value)); 
  // formAddMesto.classList.remove('popup_opened');
  closePopup(formAddMesto)
  nameMesto.value = '';
  linkMesto.value = '';
}

//слушатель события формы место
formMesto.addEventListener('submit', addCards);