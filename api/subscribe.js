const subscriptions = [];

export default async function handler(req, res) {
    if (req.method === 'POST') {
        subscriptions.push(req.body);
        return res.status(201).json({ success: true });
    }
    return res.status(405).json({ error: 'Method not allowed' });
}
