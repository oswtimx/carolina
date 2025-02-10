// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search);

const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');

    coverElement.classList.remove('open-cover');

    // animacion de la paloma
    const palomaElement = document.querySelector('.paloma');
    palomaElement.style.display = 'none';
  }, 500);
});
