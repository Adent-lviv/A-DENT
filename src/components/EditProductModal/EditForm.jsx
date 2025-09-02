import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  StyledError,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTextarea,
  SubmitButton,
  WrapperPriceInput,
} from "../AddProduct/AddProductForm/styles";

export default function EditProductForm({ initialValues, onSubmit, loading }) {

  const validationSchema = Yup.object().shape({
    category: Yup.string(),
    name: Yup.string(),
    article: Yup.string(),
    description: Yup.string(),
    price: Yup.string(),
    oldPrice: Yup.string(),
    file: Yup.mixed().nullable(),
  });


   
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ values, setFieldValue }) => (
        <StyledForm as={Form}>
          <StyledSelect
            name="category"
            value={values.category || ""}
            onChange={(e) => setFieldValue("category", e.target.value)}
          >
            <option value="">Оберіть категорію</option>
            <option value="Бори">Бори</option>
            <option value="Інструменти">Інструменти</option>
            <option value="Матеріали">Матеріали</option>
            <option value="Ендодонтія">Ендодонтія</option>
            <option value="Шовний матеріал">Шовний матеріал</option>
            <option value="Імплантологія">Імплантологія</option>
            <option value="Хірургія">Хірургія</option>
          </StyledSelect>

          <StyledError name="category" component="div" />

          <StyledInput
            type="text"
            name="name"
            placeholder="Назва"
            value={values.name || ""}
            onChange={(e) => setFieldValue("name", e.target.value)}
          />
          <StyledError name="name" component="div" />

          <StyledInput
            type="text"
            name="article"
            placeholder="Артикул"
            value={values.article || ""}
            onChange={(e) => setFieldValue("article", e.target.value)}
          />

          <StyledError name="article" component="div" />

          <StyledTextarea
            name="description"
            placeholder="Опис"
            value={values.description || ""}
            onChange={(e) => setFieldValue("description", e.target.value)}
          />
          <StyledError name="description" component="div" />
          <WrapperPriceInput style={{flexWrap: 'wrap'}}>
            <StyledInput
              type="text"
              name="oldPrice"
              placeholder="Стара Ціна"
              value={values.oldPrice || ""}
              onChange={(e) => setFieldValue("oldPrice", e.target.value)}
            />

            <StyledInput
              type="text"
              name="price"
              placeholder="Ціна"
              value={values.price || ""}
              onChange={(e) => setFieldValue("price", e.target.value)}
            />
          </WrapperPriceInput>

          <StyledError name="price" component="div" />

          <input
            type="file"
            name="file"
            onChange={(event) =>
              setFieldValue("file", event.currentTarget.files[0])
            }
            style={{
              marginBottom: "10px",
            }}
          />

          <StyledError name="file" component="div" />

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Завантаження..." : "Зберегти зміни"}
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}
