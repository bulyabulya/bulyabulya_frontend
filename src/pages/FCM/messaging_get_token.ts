import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCqpz7IPD6-NJvWfEli9EGhNvU4AUlQHe0',
  authDomain: 'bulyabulya-138f3.firebaseapp.com',
  projectId: 'bulyabulya-138f3',
  storageBucket: 'bulyabulya-138f3.appspot.com',
  messagingSenderId: '600763765463',
  appId: '1:600763765463:web:72048910b8feba4f161692',
};

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      const app = firebase.initializeApp(firebaseConfig);

      const messaging = firebase.messaging();

      messaging.getToken({
        vapidKey: 'BHLgUdl5aBrO5QABu5OjrMbVt93sCrwoGMjoWCqL4gss8Ii8V9lx_JZK5KhGjPNqLfoxXbZ6DCNAdsHiGylnQxo',
      }).then((currentToken) => {
        if (currentToken) {
          console.log('currentToken: ', currentToken);
        } else {
          console.log('Can not get token');
        }
      });
    } else {
      console.log('Do not have permission!');
    
    }
  });
}

requestPermission();
