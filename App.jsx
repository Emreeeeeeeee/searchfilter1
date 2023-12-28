
import './App.css';
import {users} from "./users"

function App() {
  const [query,setQuery] = useState ("");

  const keys = ["fisrt_name","last_name","email"]

   


  const search = (data)=> {
  return data.filter((item)=>
  keys.some((key)=> item[key].toLowerCase().includes(query))
  );
  };


  return (
    <div className="App">
     <input type="text" placeholder='Search...' className='search' onChange = {e=> setQuery(e.target.value)}/>
    
      {users.filter((user)=>
      user.first_name.toLowerCase().includes(query)
      ) map((user)=>(
        <li key = {user.id} className='listItem'>{user.first_name}</li>
        
      ))}
        
     <Table data={search(Users)}>
    </div>
  );
}

export default App;
