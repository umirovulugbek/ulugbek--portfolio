import { Routes  ,Route} from "react-router"
import Home from "../components/Home"

const Routers = () =>{
 return(
   <>
    <Routes>
    <Route path="/" element={<Home />} />
     <Route></Route>
    </Routes>
   </>
  )
}
export default Routers