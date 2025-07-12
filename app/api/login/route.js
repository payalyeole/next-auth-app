import { connectDB } from '../../../lib/db';
import { User } from '../../../models/User';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  const { email, password } = await req.json();

  await connectDB();
  const user = await User.findOne({ email });

  if (!user) return Response.json({ message: 'Invalid credentials' }, { status: 401 });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return Response.json({ message: 'Invalid credentials' }, { status: 401 });

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return Response.json({ token });
}
