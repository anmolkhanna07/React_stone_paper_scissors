
import './App.css';
import paper from './Added/paper.png';

import Scoreboard from './Scoreboard';

import rock from './Added/rock.png';
import scissors from './Added/scissors.png';
import './Styling.css';

function App() {
  return (

    <>
      <div className="Apps">
        <h1>Rock Papers Scissors Game</h1>

        <div className="Choices" >
        
          <div className="choice" id="Paper">
            <img src={paper} alt="" />
          </div>

          <div className="choice" id="Rock">
            <img src={rock} alt="" />
          </div>

          <div className="choice" id="scissors">
            <img src={scissors} alt="" />
          </div>
        </div>
      </div>
      
    
      




  

      <Scoreboard />
      </>


    


  );
}

export default App;
