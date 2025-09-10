// import { readAllUsers } from "../DAL/users.js";
// import { verifyPassword } from "./password.js";

// export async function check(req, res) {
//   try {
//     const { username, password } = req.body || {};
   
    
//     if (!username || !password) {
//       return res
//         .status(401)
//         .json({
//           ok: false,
//           error: { message: "Username or password - missing/incorrect" },
//         });
//     }
//     const users = await readAllUsers();

    
//     const user = users.find((u) => u.username === username);
   
    
//     if (!user) {
//       return res
//         .status(401)
//         .json({ ok: false, error: { message: "User not a found" } });
//     }
     
//     const ok = await verifyPassword(password, user.password);

//     if (!ok) {
//       return res.json({
//         available: false,
//         username: undefined,
//         password: undefined,
//       });
      
//     }
//     return res.json({
//       available: true,
//       username: username,
//       password: password,
//     });
//   } catch (e) {
//     return res
//         .status(401)
//         .json({ ok: false, error: { message: "User not ab found" } });
//   }
// }


import { readAllUsers } from "../DAL/users.js";
import { verifyPassword } from "./password.js";

export async function check(req, res) {
  try {
    const { username, password } = req.body || {};

    if (!username || !password) {
      return res.status(400).json({
        ok: false,
        error: "Username or password missing",
      });
    }

    const users = await readAllUsers();
    const user = users.find((u) => u.username === username);

    if (!user) {
      return res.status(401).json({
        ok: false,
        error: "User not found",
      });
    }

    const ok = await verifyPassword(password, user.password);

    if (!ok) {
      return res.status(401).json({
        ok: false,
        error: "Invalid password",
      });
    }


    return res.json({
      ok: true,
      user: {
        username: user.username,
        password:user.password
      },
    });
  } catch (e) {
    console.error("Login error:", e);
    return res.status(500).json({
      ok: false,
      error: "Server error",
    });
  }
}
