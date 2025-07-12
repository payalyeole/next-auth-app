// app/api/users/route.js
import { connectDB } from '../../../lib/db';
import { User } from '../../../models/User';

export async function GET() {
  try {
    await connectDB();
    const users = await User.find().select('-password');
    return Response.json(users);
  } catch (err) {
    return Response.json({ message: 'Error fetching users' }, { status: 500 });
  }
}
