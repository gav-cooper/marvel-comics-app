Creating a search system for Marvel Comics

(First project using React)

The contents of the .env.local file are shown below. Be sure you remove the curly braces and add your API key and hash.

.env {

VITE_API_KEY="?ts=1&apikey={YOUR_API_KEY}&hash={YOUR_HASH}"
VITE_CHARACTERS="http://gateway.marvel.com/v1/public/characters"
VITE_SINGLE_CHARACTER="http://gateway.marvel.com/v1/public/characters/"
VITE_COMICS="http://gateway.marvel.com/v1/public/comics"

VITE_SERIES="https://gateway.marvel.com:443/v1/public/series/"

}
