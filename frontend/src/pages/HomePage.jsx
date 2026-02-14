import { SignInButton, SignOutButton, SignedIn, SignedOut ,UserButton } from '@clerk/clerk-react';
import { toast } from 'react-hot-toast';
function HomePage(){
    return (
    <div>
    <button className="btn btn-secondary" onClick={()=> toast.error("This is an error toast")}>Click Me</button>
    <SignedOut>
      <SignInButton mode="modal">
        <button className="btn">Login</button>
      </SignInButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton/>
    </SignedIn>
    <UserButton />
  </div>
    )
}
export default HomePage;