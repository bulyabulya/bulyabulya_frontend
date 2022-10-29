// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyCqpz7IPD6-NJvWfEli9EGhNvU4AUlQHe0',
  authDomain: 'bulyabulya-138f3.firebaseapp.com',
  projectId: 'bulyabulya-138f3',
  storageBucket: 'bulyabulya-138f3.appspot.com',
  messagingSenderId: '600763765463',
  appId: '1:600763765463:web:72048910b8feba4f161692',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});