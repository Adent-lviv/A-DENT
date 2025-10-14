import { Formik, Form, Field } from "formik";
import { ButtonsThicknessModal, ModalContent } from "./styles";
import { ModalOverlay } from "../EditProductModal/styles";
import { StyledError, StyledSelect } from "../AddProduct/AddProductForm/styles";
import { CardBtnEdit, CardBtnTrash } from "../ProductCard/styles";
import * as Yup from "yup";

export default function ThicknessModal({ onClose, onConfirm,options = [] }) {
  const handleSubmit = (values) => {
    if (!values.thickness) return;
    onConfirm(values.thickness);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const validationSchema = Yup.object().shape({
    thickness: Yup.string().required("`Вибір обов’язковий"),
  });
  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h3>Оберіть товщину</h3>

        <Formik
          validationSchema={validationSchema}
          initialValues={{ thickness: "" }}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <Field as={StyledSelect} name="thickness">
             {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </Field>
              <StyledError
                style={{ marginTop: "10px" }}
                name="thickness"
                component="div"
              />
              <ButtonsThicknessModal>
                <CardBtnTrash type="button" onClick={onClose}>
                  Скасувати
                </CardBtnTrash>
                <CardBtnEdit type="submit" disabled={!values.thickness}>
                  Додати в корзину
                </CardBtnEdit>
              </ButtonsThicknessModal>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
}
