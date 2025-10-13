import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import { clearCart } from "../../redux/cartSlice";
import { selectTotalPrice } from "../../redux/selectors";
import { createOrder } from "../../api/cresteOrder";
import {
  StyledError,
  StyledInput,
  StyledSelect,
  StyledTextarea,
} from "../AddProduct/AddProductForm/styles";
import { StyledFormOrder, StyledLabel, TotalSum, WrapperInput } from "./styles";

const OrderForm = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const managerId = useSelector((state) => state.cart.managerId);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    surname: "",
    phone: "",
    delivery: "",
    address: "",
    payment: "",
    comment: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ім’я обов’язкове"),
    surname: Yup.string().required("Прізвище обов’язкове"),
    phone: Yup.string().required("Телефон обов’язковий"),

    delivery: Yup.string().required("Оберіть спосіб доставки"),
    address: Yup.string().required("Вкажіть адресу доставки/пункт видачі"),
    payment: Yup.string().required("Оберіть спосіб оплати"),
    comment: Yup.string(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (cartItems.length === 0) {
      toast.warning("Кошик порожній!");

      return;
    }

    try {
      await createOrder(managerId, cartItems, values);

      toast.success(
        "Замовлення оформлено! Незабаром з вами зв'яжеться менеджер."
      );
      dispatch(clearCart());
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error("Помилка створення замовлення, спробуйте ще раз.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ isSubmitting }) => (
        <StyledFormOrder as={Form}>
          <TotalSum style={{ gridColumn: "1 / -1" }}>
            Загальна сума: {totalPrice} грн
          </TotalSum>

          <WrapperInput>
            <StyledLabel>Ім’я</StyledLabel>
            <StyledInput name="name" placeholder="Ім’я" />
            <StyledError name="name" component="div" />
          </WrapperInput>

          <WrapperInput>
            <StyledLabel>Прізвище</StyledLabel>
            <StyledInput name="surname" placeholder="Прізвище" />
            <StyledError name="surname" component="div" />
          </WrapperInput>

          <WrapperInput>
            <StyledLabel>Телефон</StyledLabel>
            <StyledInput name="phone" placeholder="+380XXXXXXXXX" />
            <StyledError name="phone" component="div" />
          </WrapperInput>

          <WrapperInput>
            <StyledLabel>Спосіб доставки</StyledLabel>
            <Field
              as={StyledSelect}
              name="delivery"
              style={{ marginBottom: "10px" }}
            >
              <option value="">Оберіть</option>
              <option value="Нова Пошта">Нова Пошта</option>
              <option value="Укрпошта">Укрпошта</option>
              <option value="Доставка по Львову">Доставка по Львову</option>
            </Field>
            <StyledError name="delivery" component="div" />
          </WrapperInput>

          <WrapperInput style={{ gridColumn: "1 / -1" }}>
            <StyledLabel>Адреса доставки</StyledLabel>
            <StyledInput
              name="address"
              placeholder="Введіть адресу/відділення пошти"
            />
            <StyledError name="address" component="div" />
          </WrapperInput>

          <WrapperInput style={{ gridColumn: "1 / -1" }}>
            <StyledLabel>Спосіб оплати</StyledLabel>
            <Field
              as={StyledSelect}
              style={{ width: "100%", marginBottom: "10px" }}
              name="payment"
            >
              <option value="">Оберіть</option>
              <option value="Оплата карткою">Оплата карткою</option>
              <option value="Накладений платіж">Накладений платіж</option>
              <option value="Готівка">Готівка</option>
            </Field>
            <StyledError name="payment" component="div" />
          </WrapperInput>

          <WrapperInput style={{ gridColumn: "1 / -1" }}>
            <StyledLabel>Коментар</StyledLabel>
            <Field
              as={StyledTextarea}
              name="comment"
              placeholder="Додаткові побажання/уточнення (необов’язково)"
            />
          </WrapperInput>

          <button type="submit" disabled={isSubmitting}>
            Оформити замовлення
          </button>
        </StyledFormOrder>
      )}
    </Formik>
  );
};

export default OrderForm;
