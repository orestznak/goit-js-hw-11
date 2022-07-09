export function scrollBy() {
    const { height: cardHeight } = document
    .querySelector('#search-form')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
  });

}