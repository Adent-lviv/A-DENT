import { db } from "./firebase";
import { collection, addDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";

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
🛒 НОВЕ ЗАМОВЛЕННЯ
Менеджер: ${managerId}
Клієнт: ${customer.name}, ${customer.phone}

Товари:
${items.map((i) => `- ${i.name} x${i.quantity} = ${i.price * i.quantity} грн`).join("\n")}
    `;

    // 4. Надсилаємо у Telegram
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: telegramId,
        text,
        parse_mode: "HTML",
      }),
    });

    return orderRef.id;
  } catch (err) {
    console.error("Помилка створення замовлення:", err);
    throw err;
  }
};
