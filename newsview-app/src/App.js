import React from 'react'; 
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  // const [data, setData] = useState(null); 
  // const onClick = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
  //     setData(res.data);
  //   });
  // };

  // const onClick = async () => {
  //   try {
  //     const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=ff71ddf5e1a84820bb8c8631b9215584', );
  //     setData(response.data); 
  //   } catch (e) {
  //     console.log(e); 
  //   }
  // }
  

  return (

    <>
      <Categories />
      <NewsList />
    </>
  )
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> }
    // </div>
    
  
}

export default App; 