import './App.css';
import Banner from './components/Banner';
import Nav from "./components/Nav";
import requests from "./api/requests";
import Row from "./components/Row";

function App() {
  return <div className="App">
    <Nav />
    <Banner />
    <Row
      title="NETFLIX ORIGINALS"
      id="NO"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
    />

    <Row 
      title="Trending Nop"
      id="TN"
      fetchUrl={requests.fetchTrending}
    />
        <Row 
      title="Top Rated"
      id="TR"
      fetchUrl={requests.fetchTopRated}
    />
        <Row 
      title="Action Movies"
      id="AM"
      fetchUrl={requests.fetchActionMovies}
    />
        <Row 
      title="Comedy Moveies"
      id="CM"
      fetchUrl={requests.fetchComendyMovies}
    />
  </div>;
};

export default App;
