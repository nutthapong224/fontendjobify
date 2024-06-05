import { Form, redirect,  Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components/index.js";
import { toast } from "react-toastify";
import customFetch from "../utils/customfetch.js"; // Import customFetch correctly

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="" />
     
        <FormRow
          type="text"
          name="lastname"
          labelText="last name"
          defaultValue=""
        />
        <FormRow
          type="text"
          name="location"
          labelText="location"
          defaultValue=""
        />
        <FormRow type="email" name="email" labelText="email" defaultValue="" />
        <FormRow
          type="password"
          name="password"
          labelText="password"
          defaultValue=""
        />
      <SubmitBtn formBtn/>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
