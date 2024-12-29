import webPush from 'web-push';

const publicVapidKey = 'YBKPqDKtQoJ2FtPQLA-oIL8UA97iY24_EaWIXMUxayMIP37QzfOXyOMLXfgCJxVLv-Q-pEonjZEtVc9qDz16PPVg';
const privateVapidKey = 'bifhgRImLC_k-uRgudIxhAEpz2TwTfifoHvGs6rMras';

webPush.setVapidDetails('mailto:d.d.f.r.m.r@gmail.com', publicVapidKey, privateVapidKey);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, message } = req.body;

        subscriptions.forEach(subscription => {
            const payload = JSON.stringify({ title, message });
            webPush.sendNotification(subscription, payload).catch(err => console.error(err));
        });

        return res.status(200).json({ success: true });
    }
    return res.status(405).json({ error: 'Method not allowed' });
}
