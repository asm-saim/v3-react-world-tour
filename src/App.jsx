import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'


// api load:
const countriesData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all")
  return res.json()
}
const countries = countriesData()

function App() {

  return (
    <>
      <Suspense fallback={<h3>Countries Data is Loading...</h3>}>
        <Countries countries={countries}></Countries>
      </Suspense>
    </>
  )
}

export default App
