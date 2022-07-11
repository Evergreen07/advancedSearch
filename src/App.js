import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Display from './components/Display';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    async function firstDisplay() {
      //setLoading();
      
      const res = await axios.get(`https://api.github.com/users`);
      const data = res.data;

      setUsers(data);
    }

    firstDisplay();
  }, [])

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = () => {
    setCurrentPage(prevPage => (prevPage % 6) + 1);
  }

  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <Search setUsers={setUsers}/>

        <Display users={currentUsers}/>

        <button className="loader" onClick={paginate}> Show More </button>
      </div>
    </div>
  );
}

export default App;
