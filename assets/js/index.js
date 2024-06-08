document.addEventListener('DOMContentLoaded', () => {
  const imageContainers = document.querySelectorAll('.image-container');
  const modal = document.querySelector('.modal');
  const fullSizePhoto = document.querySelector('.full-size-photo img');
  const closeBtn = document.querySelector('.close-btn');

  const handleMouseEnter = (container, animal, animalDetails, learnMore, image) => {
    animal.style.backdropFilter = 'blur(5px)';
    animalDetails.style.transform = 'translateY(10%)';
    image.style.transform = 'scale(1.1)';
    image.style.filter = 'grayscale(100%) brightness(25%)';
    learnMore.style.opacity = '1';
  };

  const handleMouseLeave = (animal, animalDetails, learnMore, image) => {
    animal.style.backdropFilter = 'none';
    animalDetails.style.transform = 'translateY(40%)';
    image.style.transform = 'scale(1)';
    image.style.filter = 'none';
    learnMore.style.opacity = '0';
  };

  const handleImageHover = () => {
    imageContainers.forEach(container => {
      const animal = container.querySelector('.animal');
      const animalDetails = container.querySelector('.animal-details');
      const learnMore = container.querySelector('.learn-more');
      const image = container.querySelector('img');

      container.addEventListener('mouseenter', () => handleMouseEnter(container, animal, animalDetails, learnMore, image));
      container.addEventListener('mouseleave', () => handleMouseLeave(animal, animalDetails, learnMore, image));
    });
  };

  const handleLearnMoreClick = event => {
    const button = event.target.closest('.learn-more');
    if (!button) return;
    
    const container = button.closest('.image-container');
    const imgSrc = container.querySelector('img').src;
    fullSizePhoto.src = imgSrc;
    modal.style.display = 'block';
  };

  const handleCloseModal = () => {
    modal.style.display = 'none';
  };

  const handleFullSizeView = () => {
    document.addEventListener('click', handleLearnMoreClick);
    closeBtn.addEventListener('click', handleCloseModal);
  };

  handleFullSizeView();
  handleImageHover();
});
