import { useEffect, useState } from "react";

const Form = () => {
  const getFormValues = () => {
    const storedValues = localStorage.getItem("FormData");
    if (!storedValues)
      return {
        firstName: "",
        lastName: "",
        email: "",
        location: "",
      };
    return JSON.parse(storedValues);
  };
  const [values, setValues] = useState(getFormValues);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Hello");
  };

  useEffect(() => {
    localStorage.setItem("FormData", JSON.stringify(values));
    console.log(values);
  }, [values]);

  return (
    <div>
      <form>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName}
        />
        <br />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
        />
        <br />
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <br />
        <br />
        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={values.location}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
