const petHeaders = document.querySelectorAll('.hide');

petHeaders.forEach(petHeader => {
    console.log('Attaching event listener to:', petHeader);
    petHeader.addEventListener('click', () => {
        const petImages = document.querySelectorAll('.gallery-item');
        petImages.forEach(image => {
            image.classList.toggle('hidden');
        });
    });
});

const selectedTab = document.querySelector('.selected-tab');
const subtabs = document.querySelectorAll('.subtabs');

selectedTab.addEventListener('focus', () => {
    subtabs.forEach(subtab => {
        subtab.style.display = 'block';
    });
});

selectedTab.addEventListener('blur', () => {
    subtabs.forEach(subtab => {
        subtab.style.display = 'none';
    });
});