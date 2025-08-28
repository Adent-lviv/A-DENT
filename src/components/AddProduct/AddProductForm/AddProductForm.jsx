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
  WrapperPriceInput,
} from "./styles";
import { WrapperBase } from "../../globalStyles";

const validationSchema = Yup.object().shape({
  category: Yup.string().required("Виберіть категорію"),
  name: Yup.string().required("Вкажіть назву"),
  article: Yup.string().required("Вкажіть артикул"),
  description: Yup.string(),
  oldPrice: Yup.string(),
  price: Yup.string().required("Вкажіть ціну"),
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
            <option value="Матеріали">Матеріали</option>
            <option value="Ендодонтія">Ендодонтія</option>
            <option value="Шовний матеріал">Шовний матеріал</option>
            <option value="Імплантологія">Імплантологія</option>
            <option value="Хірургія">Хірургія</option>
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

          <WrapperPriceInput style={{flexWrap: 'wrap'}}>
            <StyledInput type="text" name="oldPrice" placeholder="Стара Ціна" />

            <StyledInput type="text" name="price" placeholder="Ціна" />
          </WrapperPriceInput>
          <StyledError name="price" component="div" />

          <FileInputWrapper>
            <HiddenFileInput
              type="file"
              id="file"
              name="file"
              onChange={(event) => {
                const file = event.currentTarget.files[0];
                setFieldValue("file", file);
                if (file)
                  setFieldValue("filePreview", URL.createObjectURL(file)); // для прев'ю
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
