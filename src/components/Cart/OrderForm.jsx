
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
 
import { clearCart } from "../../redux/cartSlice";
import { selectTotalPrice } from "../../redux/selectors";
import { createOrder } from "../../api/cresteOrder";

const OrderForm = () => {
  const cartItems = useSelector((state) => state.cart.items);
    const managerId = useSelector((state) => state.cart.managerId);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const initialValues = {
    customer: {
      name: "",
      phone: "",
    },
  };
console.log("ManagerId:", managerId);
  const validationSchema = Yup.object().shape({
    customer: Yup.object().shape({
      name: Yup.string().required("Ім’я обов’язкове"),
      phone: Yup.string().required("Телефон обов’язковий"),
    }),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (cartItems.length === 0) {
      alert("Корзина порожня!");
      return;
    }

    try {
      const orderId = await createOrder(managerId, cartItems, values.customer);
      alert(`Замовлення створене! ID: ${orderId}`);
      dispatch(clearCart());
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Помилка створення замовлення");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form style={{ marginTop: "20px" }}>
          <h3>Дані клієнта</h3>
          <div>
            <label>Ім’я</label>
            <Field name="customer.name" placeholder="Ім’я" />
            <ErrorMessage
              name="customer.name"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div>
            <label>Телефон</label>
            <Field name="customer.phone" placeholder="+380XXXXXXXXX" />
            <ErrorMessage
              name="customer.phone"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <strong>Загальна сума: {totalPrice} грн</strong>
          </div>

          <button type="submit" disabled={isSubmitting} style={{ marginTop: "10px" }}>
            Створити замовлення
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
