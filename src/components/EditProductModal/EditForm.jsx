import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  StyledError,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledTextarea,
  SubmitButton,
  WrapperErrorInput,
  WrapperPriceInput,
} from "../AddProduct/AddProductForm/styles";
import { Slider, ToggleInput, ToggleWrapper } from "./styles";

export default function EditProductForm({ initialValues, onSubmit, loading }) {
  console.log("EditProductForm", initialValues);

  const validationSchema = Yup.object().shape({
    category: Yup.string(),
    name: Yup.string().max(32, "Назва занадто довга"),
    article: Yup.string().max(14, "Артикул занадто довгий"),
    description: Yup.string(),
    price: Yup.number()
      .required("Вкажіть ціну")
      .typeError("Ціна має бути числом")
      .positive("Ціна має бути більшою за 0"),
    currency: Yup.string().required("Вкажіть валюту"),
    oldPrice: Yup.string(),
    file: Yup.mixed().nullable(),
    inStock: Yup.boolean(),
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
          <ToggleWrapper>
            <ToggleInput
              type="checkbox"
              checked={values.inStock || false}
              onChange={(e) => setFieldValue("inStock", e.target.checked)}
            />
            <Slider /> <p>Наявність</p>
          </ToggleWrapper>

          <StyledSelect
            name="category"
            value={values.category || ""}
            onChange={(e) => setFieldValue("category", e.target.value)}
          >
            <option value="">Оберіть категорію</option>
            <option value="Бори">Бори</option>
            <option value="Інструменти">Інструменти</option>
            <option value="Шовний матеріал">Шовний матеріал</option>
                      <option value="Леза">Леза</option>
            <option value="Гемостатична губка">Гемостатична губка</option>
            <option value="Імпланти">Імпланти</option>
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
          <WrapperPriceInput style={{ flexWrap: "wrap" }}>
            <WrapperErrorInput>
              <StyledInput
                type="text"
                name="oldPrice"
                placeholder="Стара Ціна"
                value={values.oldPrice}
                onChange={(e) => setFieldValue("oldPrice", e.target.value)}
              />
              <StyledError name="oldPrice" component="div" />
            </WrapperErrorInput>
            <WrapperErrorInput>
              <StyledInput
                type="text"
                name="price"
                placeholder="Ціна"
                value={values.price || ""}
                onChange={(e) => setFieldValue("price", e.target.value)}
              />
              <StyledError name="price" component="div" />
            </WrapperErrorInput>
            <WrapperErrorInput>
              <StyledInput
                type="text"
                name="currency"
                placeholder="Валюта"
                value={values.currency || ""}
                onChange={(e) => setFieldValue("currency", e.target.value)}
              />
              <StyledError name="currency" component="div" />
            </WrapperErrorInput>
          </WrapperPriceInput>

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
