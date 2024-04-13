export function fetchSearchData(inputValue) {
  return fetch(
    `https://pixabay.com/api?key=43344666-8172f6ac72992b92fe58b4040&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
