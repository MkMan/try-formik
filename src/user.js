import * as Yup from "yup";
import { DynamicForm } from "./FormElements";
import "./styles.css";

// Fetched from API
const formSchema = {
  name: {
    type: "text",
    label: "Name"
  },
  email: {
    type: "email",
    label: "Email"
  },
  role: {
    type: "select",
    label: "Role",
    options: [
      {
        label: "Admin",
        value: "admin"
      },
      {
        label: "User",
        value: "user"
      }
    ]
  }
};

// Fetched from API
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Don't you have a name?")
    .max(10, "Your name is too long"),
  email: Yup.string().email("YO! Enter a valid email").required("Required"),
  role: Yup.string().required("What is it that you do here?")
});

export const User = () => {
  const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="App">
      <DynamicForm
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        formSchema={formSchema}
        handleChange={(e) => console.log(e.target.name, e.target.value)}
      >
        <button type="submit">Submit</button>
      </DynamicForm>
    </div>
  );
};
