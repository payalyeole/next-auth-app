import { connectDB } from '../../../lib/db';
import { User } from '../../../models/User';

import { verifyToken } from '../../../lib/authMiddleware';

export async function GET(req) {
  try {
    const { userId } = verifyToken(req); // works now
    await connectDB();
    const user = await User.findById(userId).select('-password');

    return Response.json(user);
  } catch (err) {
    console.error('Profile API Error:', err.message);
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }
}
