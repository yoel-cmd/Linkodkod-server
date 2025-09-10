import bcrypt from "bcrypt";

export async function hashPassword(password) {
  if (!password) throw new Error("Password required");
  const passHash = await bcrypt.hash(password, 10);
  return passHash;
}
export async function verifyPassword(password, userPaaword) {
  if (!userPaaword) return false;
  if (bcrypt.compare(password, userPaaword)) {
    return true ;
  }
  return false;
}
