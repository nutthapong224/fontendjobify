import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { redirect, useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customfetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/jobs", data);
    toast.success("Job added successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Error adding job");
    return error;
  }
};

const AddJob = () => {
  const { user } = useOutletContext() || {}; // Ensure user is at least an empty object

  const jobLocation = user?.location || ""; // Default to an empty string if location is undefined

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add Job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="Job Location"
            name="jobLocation"
            defaultValue={jobLocation}
          />
          <FormRowSelect
            labelText="Job Status"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText="Job Type"
            name="jobType"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
