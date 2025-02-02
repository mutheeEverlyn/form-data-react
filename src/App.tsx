

import './App.scss'

function App() {
  return (
    <div className='container'>
      <div className='header'>
      <h1>Register</h1>
      </div>
      <div className='name'>
      <label htmlFor='name'>Name</label><br/>
      <input type='text' placeholder='john' required/>
      </div>
     <div className='email'>
     <label htmlFor='email'>Email</label><br/>
     <input type='text' placeholder='example@gmail.com'  required/>
     </div>
      <div className='password'>
      <label htmlFor='password'>Password</label><br/>
      <input type='password' placeholder='**********'  required/>
      </div>
       <div className='button'>
       <button type='submit'>submit</button>
       </div>
        <div className='login'>
        <h3>Already Registered ? <a href='#' target='_blank'>login</a></h3>
        </div>
    
    </div>
  )
}

export default App
