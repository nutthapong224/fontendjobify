import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customfetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

// Loader function to fetch jobs data
export const loader = async ({ request }) => {


  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);


  try {
    const { data } = await customFetch.get("/jobs", { params });
 ;
    return { data , searchValues:{...params} };
  } catch (error) {
  
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// Create context for all jobs
const AllJobsContext = createContext();

const Alljobs = () => {
  const { data ,searchValues } = useLoaderData(); // Retrieve data using the useLoaderData hook

  return (
    <AllJobsContext.Provider value={{ data , searchValues}}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default Alljobs;
