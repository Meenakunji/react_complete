import './App.css';

import Video from './Componants/Video';

import vidoes  from './data/Data';


function App() {



// const check = true;

  return(
    <>
      
      

      <div className='box'>
         {/* <h2>vidoes</h2> */}
      {
        vidoes.map((video)=>
            <Video 
              title={video.title}
              channelname={video.channelname}
              view= {video.view}
              likes={video.likes}
              verified = {video.verified}
              id= {video.id}


              
            />
        )
      }
      </div>
  </>

     
  
   );
}



export default App;
