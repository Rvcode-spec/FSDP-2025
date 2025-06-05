import { BrowserRouter } from 'react-router-dom'
import './App.css'
import SignUp from './_Auth/SignUp'
import HomePage from './Comp/Home'

function App() {


  return (
    <div>
        <BrowserRouter>
          <HomePage/>

        </BrowserRouter>
    </div>
   
 



    
  )
}

export default App
