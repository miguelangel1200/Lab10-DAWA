import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [number, setNumber] = useState(0)

  return (
    <div className="App">
      <div class="container">
        <Header/>
            <section>
                <div className="left">
                    <div className="content">
                        <h1>miguel angel medina ventura</h1>
                        <h4>You can to create all that you want.</h4>
                        <h2>El valor del número es: {number}</h2>
                        <div className='para'>
                            <button onClick={() => setNumber(number+1)}>Incrementar</button>
                            {/* <br></br> */}
                            <button onClick={() => setNumber(number-1)}>Decrementar</button>
                        </div> 
                    </div>

                </div>
                <div className="right">
                    {/* <img src="https://blog.vantagecircle.com/content/images/2020/08/technology-in-the-workplace.png" alt="" class="img"> */}
                </div>
            </section>
        </div>
        <Footer/>
      
    </div>
  );
}

export default App;
