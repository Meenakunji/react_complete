import './App.css';

import Video from './Componants/Video';


function App() {

const obj = {
  title : "learn Mongo",
  channelname: "kunj",
  view: "3M",
  likes : "4k",
  verified : true,
}

const check = true;

  return(
    <>
      
      <div className='box'>
      <Video {...obj}/>
      <  Video title = "Database"  value = '2002' channelname='codemohit'/>
      <Video title = "React" value = '2002' channelname='coderdost' verified = {check}/>
      </div>
  </>

     
  
   );
}



export default App;
