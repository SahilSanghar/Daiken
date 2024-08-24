import { database, ref, set, get } from './data/firebaseadmin';

// Function to write data
async function writeUserData(userId, name, email) {
    try {
        await set(ref(database, 'users/' + userId), {
            username: name,
            email: email,
            profile_picture: 'some-url'
        });
        console.log('Data written successfully');
    } catch (error) {
        console.error('Error writing data:', error);
    }
}

// Function to read data
async function readUserData(userId) {
    try {
        const userRef = ref(database, 'users/' + userId);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log('No data available');
        }
    } catch (error) {
        console.error('Error reading data:', error);
    }
}
