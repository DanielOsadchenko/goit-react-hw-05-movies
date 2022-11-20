import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function NotFound() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      
      navigate("/", { replace: true })
    }, 3000);
  }, [navigate])
  
  return <div>
    <h1>OOOps! Sorry, we couldn't find that page :(</h1>
    <h2>We will move you to the main page</h2>
  </div>
}