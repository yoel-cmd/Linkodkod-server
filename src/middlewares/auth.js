import { readAllUsers } from "../DAL/users.js";
import { verifyPassword } from "../utils/password.js";
export async function authMiddleware(req, res, next) {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.status(401).json({ok: false,error: {  message: "Username or password - missing/incorrect" },
        });
    }
    const users = await readAllUsers();
    const user = users.find((u) => u.username === username);
    if (!user) {
      return res.status(401).json({ok: false, error: { message: "User not a found" },});
    }
    const ok = await verifyPassword(password, user.password);
    if (!ok) {
      return res
        .status(401)
        .json({
          ok: false,
          error: { message: "Username or password - missing/incorrect" },
        });
    }
    req.user = {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
    };
    next();
  } catch (e) {
    next(e);
  }
}
