import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FiPaperclip } from "react-icons/fi";
import {
  FileInputWrapper,
  HiddenFileInput,
  PreviewImg,
  PreviewWrapper,
  RemoveFileButton,
  StyledError,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTextarea,
  SubmitButton,
  WrapperErrorInput,
  WrapperPriceInput,
} from "./styles";

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Виберіть категорію"),
  name: Yup.string().required("Вкажіть назву").max(32, "Назва занадто довга"),
  article: Yup.string()
    .required("Вкажіть артикул")
    .max(14, "Артикул занадто довгий"),
  description: Yup.string(),
  oldPrice: Yup.string(),
  price: Yup.number()
    .required("Вкажіть ціну")
    .typeError("Ціна має бути числом")
    .positive("Ціна має бути більшою за 0"),
  currency: Yup.string().required("Вкажіть валюту"),
  file: Yup.mixed().required("Оберіть файл"),
});

export default function AddProductForm({ onSubmit, loading }) {
  const initialValues = {
    category: "",
    name: "",
    article: "",
    description: "",
    price: "",
    oldPrice: "",
    currency: "",
    file: null,
  };

  return (
    <Formik
      initialValues={{
        category: initialValues.category || "",
        name: initialValues.name || "",
        article: initialValues.article || "",
        description: initialValues.description || "",
        price: initialValues.price || "",
        currency: initialValues.currency || "",
        oldPrice: initialValues.oldPrice || "",
        file: null,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, setFieldValue }) => (
        <StyledForm as={Form}>
          <StyledSelect
            name="category"
            value={values.category}
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

          <StyledInput type="text" name="name" placeholder="Назва" />
          <StyledError name="name" component="div" />

          <StyledInput type="text" name="article" placeholder="Артикул" />
          <StyledError name="article" component="div" />

          <StyledTextarea
            value={values.description}
            onChange={(e) => setFieldValue("description", e.target.value)}
            name="description"
            placeholder="Опис"
          />
          <StyledError name="description" component="div" />

          <WrapperPriceInput style={{ flexWrap: "wrap" }}>
         <WrapperErrorInput>  <StyledInput type="text" name="oldPrice" placeholder="Стара Ціна" />
            <StyledError name="oldPrice" component="div" />
          </WrapperErrorInput>   
            <WrapperErrorInput> 
              <StyledInput type="text" name="price" placeholder="Ціна" />
            <StyledError name="price" component="div" />
            </WrapperErrorInput>
              <WrapperErrorInput> 
            <StyledInput type="text" name="currency" placeholder="Валюта" />
            <StyledError name="currency" component="div" />
            </WrapperErrorInput>
          </WrapperPriceInput>

          <FileInputWrapper>
            <HiddenFileInput
              type="file"
              id="file"
              name="file"
              onChange={(event) => {
                const file = event.currentTarget.files[0];
                setFieldValue("file", file);
                if (file)
                  setFieldValue("filePreview", URL.createObjectURL(file)); 
              }}
            />
            <StyledLabel htmlFor="file">
              <FiPaperclip size={20} />
              Завантажити файл
            </StyledLabel>
          </FileInputWrapper>

          {values.filePreview && (
            <PreviewWrapper>
              <PreviewImg src={values.filePreview} alt="preview" />
              <RemoveFileButton
                onClick={() => {
                  setFieldValue("file", null);
                  setFieldValue("filePreview", null);
                }}
                size={18}
              />
            </PreviewWrapper>
          )}
          <StyledError name="file" component="div" />

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Завантаження..." : "Додати товар"}
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
}
