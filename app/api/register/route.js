import { connectDB } from '../../../lib/db';
import { User } from '../../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return Response.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Register error:', err);
    return Response.json({ message: 'Server error' }, { status: 500 });
  }
}
