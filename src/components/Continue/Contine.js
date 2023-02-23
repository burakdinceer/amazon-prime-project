import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../redux/dataSlice"

const Contine = () => {

  const dispatch = useDispatch()
  const { movies } = useSelector((state) => state.data)
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  console.log(movies)

  return (
    <div >
      <h2 className="container mx-auto text-white mr-6 p-2 text-sm lg:text-xl">İzlemeye Devam Et</h2>
      <div className="flex container mx-auto">
         {
          movies.map((item,rank) => {
            if(rank <4){
         return <div className="p-3 group relative  basis-1/4">
                    <div><img className="w-full h-28  group-hover:scale-110 group-hover:opacity-50 duration-500" alt="Movie" src={item.thumbnail}/></div>
            
                      <div className="text-white text-xs opacity-0 group-hover:mt-2  group-hover:opacity-100 duration-500"> 
                     {item.title}
                    {item.description}
                    <div className="text-lg">{item.rating}</div>
                     </div>
              </div>     
            }
            
          })
         }
          
       

      </div>
    </div>
  )
}

export default Contine
