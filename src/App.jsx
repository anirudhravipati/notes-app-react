// 1. import `ChakraProvider` component
import './App.css'
import EditorPane from './EditorPane'
import Sidebar from './Sidebar'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div className="app">
      <Sidebar />
      <EditorPane />
    </div>
  )
}

export default App
