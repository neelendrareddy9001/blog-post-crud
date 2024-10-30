import { FaPen, FaClipboard } from "react-icons/fa"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <FaPen />
          <h1>What To Do</h1>
          <FaClipboard />
        </div>
      </div>
    </div>
  )
}

export default App