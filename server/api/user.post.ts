import { postDocument } from "../lib/firestore";
import { createUser, login, logout } from "../lib/auth";
import { firebaseAuth } from "../lib/firebase";

export default defineEventHandler(async (event) => {
  try {
    const { isLogin, isLogout } = getQuery(event);

    if (isLogout) {
      await logout();

      return true;
    }

    const { email, password } = await readBody(event);

    if (isLogin) {
      const user = await login(email, password);

      return user;
    }

    await createUser(email, password);
    await postDocument("users", firebaseAuth.currentUser?.uid as string, {
      email,
      password,
    });

    return true;
  } catch (error: any) {
    return error.message;
  }
});
