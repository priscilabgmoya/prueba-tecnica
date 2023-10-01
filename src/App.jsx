import './App.css'
import Forms from './components/Form/Forms';
import ListMessage from './components/ListMessage/LIstMessage';
import { Route, Routes } from 'react-router-dom';
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Forms/>}/>
      <Route path='/list-message' element={<ListMessage />} />
    </Routes>
    </>
  )
}

export default App;
