import { toast } from "react-toastify"
import customFetch from "../utils/customfetch"
import { redirect } from "react-router-dom"



export const action = async ({params})=>{  
   try { 
      await customFetch.delete(`/jobs/${params.id}`) 
      toast.success('job deleted successfully')

    
   } catch (error) { 
    toast.error(error?.response?.data?.msg)
    
   } 

  return  redirect('/dashboard/all-jobs')

}




const Deletejob = () => {
  return (
    <h1></h1>
  )
}
export default Deletejob