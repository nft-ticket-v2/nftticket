window.addEventListener('load', () => {
  const eventDescription = document.querySelector('.event-description');
  let eventDescriptionSeeMoreButtonShowed = false;
  
  document.addEventListener('click', event => {
    if (event.target.classList.contains('event-description-see-more-button')) {
      if (eventDescriptionSeeMoreButtonShowed)  {
        eventDescription.style.display = '-webkit-box';
        eventDescription.style.overflow = 'hidden';
        event.target.innerHTML = 'Daha çok göster';
      } else {
        eventDescription.style.display = 'unset';
        eventDescription.style.overflow = 'unset';
        event.target.innerHTML = 'Daha az göster';
      }
      eventDescriptionSeeMoreButtonShowed = !eventDescriptionSeeMoreButtonShowed;
    }
  });
});