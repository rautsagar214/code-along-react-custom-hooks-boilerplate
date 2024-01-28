import './App.css'
import useStorage from './Component/UseStorage'

function App() {

  const {setStorage} = useStorage()

  return (
    <>
      <h2>Add to Local Storage and Session Storage</h2>
      <input type="text" style={{width:"300px" , padding:"10px" , marginBottom:"10px"}} placeholder='Enter Value' onChange={(e)=>{setStorage(e.target.value)}}/>
    </>
  )
}

export default App
