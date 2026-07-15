import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import CreatePost from './components/CreatePost'
import ViewAll from './components/ViewAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<SignUp />} />
  <Route path='/signin' element={<SignIn />} />
  <Route path='/create' element={<CreatePost />} />
  <Route path='/viewall' element={<ViewAll />} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
