import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('http://localhost:8000/api/test/')  // テストAPIエンドポイント
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setMessage(data.message)
      })
      .catch((error) => {
        setMessage('Error: ' + error.message)
      })
  }, [])

  return (
    <div>
      <h1>API呼び出しテスト</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
