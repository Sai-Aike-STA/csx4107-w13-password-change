import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function verifyJWT(request) {
  const token = request.cookies.get("token")?.value;

  if (!token || !JWT_SECRET) return null;

  try {
    return jwt.verify(token, JWT_SECRET);
  }
  catch {
    return null;
  }
}
