import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./Request";
import Row from "./Row";
import { baseURL } from "./url";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={baseURL + requests.fetchNetflixOriginals} />
      <Row title="NETFLIX ORIGINALS" fetchUrl={baseURL + requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={baseURL + requests.fetchtrending} />
      <Row title="Top Rated" fetchUrl={baseURL + requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={baseURL + requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={baseURL + requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={baseURL + requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={baseURL + requests.fetchRomanceMovies}/>
      <Row title="Documentaries Movies" fetchUrl={baseURL + requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
