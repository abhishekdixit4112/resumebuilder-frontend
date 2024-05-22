import './App.css';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <h1 className='text-center mt-5 text-decoration-underline'>Let's Build Your Resume...</h1>
      <br />
     <div className='container'>
     <Form />
     {/* <div  className='text-center fixed-bottom fs-5'><b>NOTE:-</b><b className='fs-5'>Fill all the fields correctly and with proper spacing for the better Experience.</b>
    </div> */}
     </div>
      <div  className='text-center fixed-bottom '><b>NOTE:-</b><b >Fill all the fields correctly and with proper spacing for the better Experience.</b>
    </div>
   </div>
   );
}

export default App;
