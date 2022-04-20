// Register event listener for the 'push' event.
self.addEventListener('push', function (event) {
  var options = {
    body: 'xxxxxxx',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore', title: 'Explore this new world',
        icon: 'images/checkmark.png'
      },
      {
        action: 'close', title: 'Close notification',
        icon: 'images/xmark.png'
      },
    ]
  };
  // Keep the service worker alive until the notification is created.
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.

    self.registration.showNotification('12312321', options)
  );
});
