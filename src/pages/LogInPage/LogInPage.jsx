import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api/firebase";
import { useNavigate } from "react-router-dom";
import { InputText,StyledForm } from "./styles";
import { ColorButton, Container, Error, MainTitle, Title } from "../../components/globalStyles";
import { useState } from "react";
import { StyledError } from "../../components/AddProductForm/styles";

export default function LogInPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Некоректний email").required("Вкажіть email"),
    password: Yup.string().required("Вкажіть пароль"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError("Невірний email або пароль");
    }
    setSubmitting(false);
  };

  return (
    <Container>
      <Title style={{marginTop:'100px'}}>Вхід</Title>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm as={Form}>
           
               <InputText type="email" name="email"
              placeholder="Email" />
            <StyledError name="email" component="div"  />

        
                <InputText    type="password" 
              name="password"
              placeholder="Пароль" />
            <StyledError name="password" autoComplete="new-password" component="div" />

            <ColorButton type="submit" disabled={isSubmitting}>
              Увійти
            </ColorButton>
          </StyledForm>
        )}
      </Formik>
      {error && <Error>{error}</Error>}
    </Container>
  );
}
