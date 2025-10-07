import { db } from "./firebase";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { toast } from "react-toastify";

const TELEGRAM_BOT_TOKEN = "8094842852:AAF_B_q-PN96dyOCgpcsS3RQvsnXHYfT5-w";

export const createOrder = async (managerId, items, customer) => {
  try {
    const orderRef = await addDoc(collection(db, "orders"), {
      managerId,
      items,
      customer,
      createdAt: serverTimestamp(),
    });

    const managerRef = doc(db, "managers", managerId);
    const managerSnap = await getDoc(managerRef);

    if (!managerSnap.exists()) {
      throw new Error("Менеджер не знайдений");
    }

    const managerData = managerSnap.data();
    const telegramId = managerData.telegramId;

    const text = `
*🛒 НОВЕ ЗАМОВЛЕННЯ*
Менеджер: ${managerId}

👤 *Клієнт:* ${customer.name} ${customer.surname}
📞 *Телефон:* ${customer.phone}

🚚 *Доставка:* ${customer.delivery}
🏠 *Адреса:* ${customer.address}
💳 *Оплата:* ${customer.payment}
📝 *Коментар:* ${customer.comment?.trim() || "—"}

🛍️ *Товари:*
${items
  .map(
    (i) =>
      `- ${i.name}${i.thickness ? ` (${i.thickness})` : ""} x${
        i.quantity
      }шт = ${i.price * i.quantity} грн`
  )
  .join("\n")}

💰 *Загальна сума:* *${items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    )} грн*
`;

 
    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    return orderRef.id;
  } catch (err) {
    toast.error("Помилка створення замовлення");
    console.error("Помилка створення замовлення:", err);
    throw err;
  }
};
