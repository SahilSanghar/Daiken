import { getAuth } from 'firebase-admin/auth';
import { ref, set, get } from 'firebase-admin/database'; // Import Realtime Database functions
import { database } from '../../../data/firebaseadmin'; // Assuming you have initialized Realtime Database here
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { mobileNumber, password, invitationCode } = req.body;

        try {
            const auth = getAuth();

            // Check if an invitation code is provided
            let generatedInvitationCode = uuidv4(); // Generate a unique code for the user

            if (invitationCode) {
                // Validate the invitation code in Realtime Database
                const codeRef = ref(database, `invitationCodes/${invitationCode}`);
                const codeSnapshot = await get(codeRef);

                if (!codeSnapshot.exists()) {
                    return res.status(400).json({ error: 'Invalid invitation code' });
                }
            }

            // Store the user data in Realtime Database
            const userRef = ref(database, `users/${mobileNumber}`);
            await set(userRef, {
                mobileNumber,
                password, // Ideally, you'd hash the password before storing it
                invitationCode: invitationCode || generatedInvitationCode,
                createdAt: new Date().toISOString(),
            });

            // Store the generated invitation code for the user in Realtime Database
            const invitationRef = ref(database, `invitationCodes/${generatedInvitationCode}`);
            await set(invitationRef, {
                mobileNumber,
                createdAt: new Date().toISOString(),
            });

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Registration error:', error);
            res.status(400).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
