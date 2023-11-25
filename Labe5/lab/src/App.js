
import Exo1 from './Exo1';
import Exo2 from './Exo2';
import Exo3 from './Exo3';
function App() {
  

  return (
    <div className="App" style={{display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"20"}}>
        <div>
          <Exo1/>
        </div>
        <div>
          <Exo2/>
          <Exo3/>

        </div>
        
    </div>
  );
}

export default App;
