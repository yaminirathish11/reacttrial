
import './App.css';

function App() {
  function changeOnReload(){
    
      const change = ["Good","Wonderful","Great","Awesome"];
      const int = Math.floor(Math.random() *4);
      return(change[int])
  }
  return (
   <div>
    Hi Welcome 
    <p>Have a {changeOnReload()} day </p>
   </div>
    
  );
}

export default App;
