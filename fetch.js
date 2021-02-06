async function getGenres() {
    let result;
 
    let response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre');
    result = await response.json();
    
    return result;
 }