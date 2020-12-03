import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";

const getFormElement = (elementName, elementSchema) => {
  const props = {
    name: elementName,
    label: elementSchema.label,
    options: elementSchema.options
  };

  if (elementSchema.type === "text" || elementSchema.type === "email") {
    return <TextField {...props} />;
  }

  if (elementSchema.type === "select") {
    return <SelectField {...props} />;
  }
};

export function DynamicForm(props) {
  const initialValues = props.initialValues || {};

  if (!Object.keys(initialValues).length) {
    for (const key in props.formSchema) {
      initialValues[key] = "";
    }
  }

  return (
    <Formik {...props} initialValues={initialValues}>
      <FormikForm
        className="needs-validation"
        noValidate=""
        onChange={props.handleChange}
      >
        {Object.keys(props.formSchema).map((key) => (
          <div key={key}>{getFormElement(key, props.formSchema[key])}</div>
        ))}
        {props.children}
      </FormikForm>
    </Formik>
  );
}

export function TextField(props) {
  const { name, label, placeholder, ...rest } = props;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        className="form-control"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder || ""}
        {...rest}
      />
      <ErrorMessage
        name={name}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      />
    </>
  );
}

export function SelectField(props) {
  const { name, label, options } = props;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field as="select" id={name} name={name}>
        <option value="">Choose...</option>
        {options.map((optn, index) => (
          <option
            value={optn.value}
            label={optn.label || optn.value}
            key={index}
          />
        ))}
      </Field>
      <ErrorMessage
        name={name}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      />
    </>
  );
}
