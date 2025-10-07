import { Formik, Form, Field } from "formik";
import { ButtonsThicknessModal, ModalContent } from "./styles";
import { ModalOverlay } from "../EditProductModal/styles";
import { StyledError, StyledSelect } from "../AddProduct/AddProductForm/styles";
import { CardBtnEdit, CardBtnTrash } from "../ProductCard/styles";
import * as Yup from "yup";

export default function ThicknessModal({ onClose, onConfirm }) {
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
                <option value="">-- виберіть розмір --</option>
                <option value="0.5 мм">0.5 мм</option>
                <option value="0.7 мм">0.7 мм</option>
                <option value="1.0 мм">1.0 мм</option>
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
