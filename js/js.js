function flipCard(event) {
    event.preventDefault();
    var cardContainer = event.target.closest('.card-container');
    cardContainer.classList.toggle('flip');
}