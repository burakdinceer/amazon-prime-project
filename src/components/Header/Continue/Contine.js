import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../../redux/dataSlice"

const Contine = () => {
   
 const dispatch = useDispatch()
 const {movies} = useSelector((state) => state.data)
 useEffect(() => {
  dispatch(fetchData())
 },[])
 console.log(movies)

  return (
    <div>
    </div>
  )
}

export default Contine