import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'expense 1',
//     note: 'bought stuff',
//     amount: 5612,
//     createdAt: 0
// });

// database.ref('notes/-MESyP2_xu-B44utGM8Z').update({
//     body: 'updated body'
// });

// database.ref('notes').push({
//     title: "todo2",
//     body: 'go for no run'
// });

// const firebaseNotes = {
//     notes: {
//         asdfhjsdf: {
//             title: 'yo',
//             body: 'text'
//         },
//     yhuyuh: {
//         title: 'yuh',
//         body: 'more text'
//     }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'this is my note'
// }, {
//     id: '4653hj',
//     title: 'second note',
//     body: 'this is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch(() => {
//         console.log('read error');
//     });

// database.ref().set({
//     name: 'Joel Malleck',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Kitchener',
//         country: 'Canada'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('This failed.', e)
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {

//     }).catch(() => {

//     });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'job/title': 'CEO',
//     'location/city': 'Seattle'
// });