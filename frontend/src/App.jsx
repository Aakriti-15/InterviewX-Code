import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import ProblemsPage from './pages/ProblemsPage';
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router';
import { Toaster } from 'react-hot-toast';
function App() {
  
 const {isSignedIn} = useUser();
  return (
     <>
      <Routes>
      
      <Route path ="/" element ={<HomePage />} />
      <Route path ="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"}/>} />

       </Routes>
       <Toaster position='top-left' toastOptions={{duration:3000}} />
       </>
  );
}

export default App;
//tw , daisyui, react-router, react-hot-toast,
