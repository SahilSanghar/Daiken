import { db } from '../../lib/db'; // Assuming you have a db.js file for database connection

export default async function handler(req, res) {
    if (req.method === 'POST') {
    const { accountHolder, bankName, accountNumber, branch, ifsc, cardNumber, expiryDate, cvv } = req.body;

    try {
    await db.collection('bankDetails').insertOne({
        accountHolder,
        bankName,
        accountNumber,
        branch,
        ifsc,
        cardNumber,
        expiryDate,
        cvv,
    });

        res.status(200).json({ message: 'Bank details saved successfully' });
    } catch (error) {
        console.error('Error saving bank details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
} else {
    res.status(405).json({ message: 'Method not allowed' });
}
}
