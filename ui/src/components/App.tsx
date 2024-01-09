import './App.css'
import Body from './Body'
import Sidebar from './Sidebar'

function App() {

  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center bg-gray-300">
      <Sidebar />
      <Body />
    </div>
  )
}

export default App
