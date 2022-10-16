import './App.css';
import {useState} from 'react';

function App() {
  const [Recup,setRecup] = useState()
  const [Task,setTask] = useState([{Task:'la premiere tache', status : false}]);
  let barre = 'barre'
  let nonBarre = 'nonBarre'
  let tache = 'tache'
 

  return (
    <div className="App">
      <div>
        <input type = 'text' placeholder = 'ecrire une tâche a effectuer' onChange={(e) => {setRecup(e.target.value)}}/>
        <button onClick={()=>{setTask([...Task,{Task:Recup , status : false}])
        console.log(Task)}}>Ajouter</button>
      </div>
      <div >
        {
          Task.map(el =>(
              <div className={tache}  >
                  <input type = 'checkbox'  onChange={()=> {
                    setTask([...Task.map(num =>
                      num.Task === el.Task ? {...num, status : !num.status} : num)])    
                    console.log(Task)
                  }}/>
                  <p className={el.status === true ?  barre :  nonBarre}>{el.Task}</p>
                  <button onClick={()=> {
                    setTask([...Task.filter(x => (x.Task !== el.Task))])
                  }}>*</button>
              </div>
          ))
          }
      </div>
      
    </div>
  );
}
export default App;
