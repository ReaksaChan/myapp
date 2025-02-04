
import { useEffect } from "react";

const API_URL = 'http://www.omdbapi.com?apikey=87c55bb2'
function App() {

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovie('Spiderman');
  }, []);

  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App;
