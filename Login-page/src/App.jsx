
import './App.css'

function App() {
  

  return (
   <div className='App'>
   <div className='logo-box'>
   <img src='/images/Logo1.webp' alt='logo' className='logo'/>
   <h1>Sign In To Twitter</h1>
   <button>
   <img src='/images/google-logo.png' alt='google'/>
   Sign In With Google
   </button>
   <button>
   <img src='/images/apple-logo.png' alt='apple'/>
   Sign In With Apple 
   </button>
   
    <hr></hr>
    <span>or</span>

    <form>
    <input type='text' placeholder='Phone email or username'/>
    <button>Next</button>
    </form>
   
    <button>Forget Password</button>
    <p>Don't have an account Sign Up</p>



  </div>
   
   </div>
  )
}

export default App
