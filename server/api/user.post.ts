import { postDocument } from "../lib/firestore";
import { createUser, login, logout } from "../lib/auth";
import { firebaseAuth } from "../lib/firebase";
import { handleError } from "../lib/utils";

export default defineEventHandler(async (event) => {
  try {
    const { isLogin, isLogout } = getQuery(event);

    if (isLogout) return await logout();

    const { email, password } = await readBody(event);

    if (isLogin) return await login(email, password);

    await createUser(email, password);
    await postDocument("users", firebaseAuth.currentUser?.uid as string, {
      email,
      password,
    });
  } catch (error) {
    return handleError(error);
  }
});
