import logo from './logo.svg';
import './App.css';
import { ButtonGroup, Button, Spinner, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {

  const [news, setNews] = useState([]);

  useEffect(() =>{
    fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-09-30&sortBy=popularity&apiKey=50b04dbcdbfe44bda68000bec31d1c21')
    .then(res => res.json())
    .then(data => setNews(data.articles));
  },[])
  return (
    <div className="App">
      <Row xs={1} md={2} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }
      </Row>
    </div>
  );
}

export default App;
