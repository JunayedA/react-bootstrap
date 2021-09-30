import './App.css';
import { Spinner, Row} from 'react-bootstrap';
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

      {news.length === 0 ? 
      <Spinner animation="border" />
      : 
        <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News news={nw}></News>)
        }
      </Row>
      }
    </div>
  );
}

export default App;
