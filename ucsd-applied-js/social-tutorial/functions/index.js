const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Setup of Firebase Admin SDK for use with local environment
// this updates the actual firestore database on google, not your local
// emulated one...
var serviceAccount = require("/Users/dwainebest/Insync/dwaine.best@gmail.com/Google\ Drive/project-apis-dont-git-them/socialape-99397-firebase-adminsdk-tghxq-377b9d94db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-99397.firebaseio.com"
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Your Base of FIRE!");
});

exports.getScreams = functions.https.onRequest((request, response) => {
    admin.firestore().collection('screams').get()
    .then(data => {
        let screams = [];
        data.forEach(doc => {
            screams.push(doc.data());
        });
        return response.json(screams);
    })
    .catch(err => console.error(err))
})

exports.createScream = functions.https.onRequest((request, response) => {
    if(request.method !== 'POST') {
        return response.status(400).json({ error: 'Method not allowed'});
    }
   const newScream = {
       body: request.body.body,
       userHandle: request.body.userHandle,
       createdDate: admin.firestore.Timestamp.fromDate(new Date())
   };

   admin.firestore()
        .collection('screams')
        .add(newScream)
        .then(doc => {
            response.json({ message: `document ${doc.id} created successfully`})
        })
        .catch(err => {
            response.status(500).json({error: err});
            console.error(err);
        })
})