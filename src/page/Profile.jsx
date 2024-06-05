import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import customFetch from "../utils/customfetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Error updating profile");
    return error;
  }
}; 
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to load job details");
    return redirect("/dashboard/all-jobs");
  }
};

const Profile = () => {
  const context = useOutletContext();
  const user = context?.user || {};

  const { name = "", lastName = "", email = "", location = "" } = user;

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">Profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5 MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
            defaultValue={lastName}
            labelText="Last name"
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
