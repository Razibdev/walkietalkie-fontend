import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
    const sessionId = uuidv4();
    res.status(200).json({ sessionId });
}