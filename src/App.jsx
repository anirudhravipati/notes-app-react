// 1. import `ChakraProvider` component
import './App.css'
import Editor from './Editor'
import Sidebar from './Sidebar'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div className="app">
      <Sidebar />
      <Editor />
    </div>
  )
}

export default App
