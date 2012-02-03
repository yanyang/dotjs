(function(){
	// Add Notification
	function show_notification(e) {
		//alert(window.webkitNotifications.checkPermission());
		if (window.webkitNotifications.checkPermission() === 0) {
			if (e) {
				$('body').unbind('click', show_notification);
			}
			//window.webkitNotifications.createHTMLNotification('http://www.baidu.com').show();
			var d = new Date();
			var m = d.getMinutes();
			console.log(m);
			if (m === 1) {
				window.webkitNotifications.createNotification('', 'To rest', 'You need to rest for 10 minutes.').show();
			}
			setTimeout(show_notification, 60000);
		} else {
			window.webkitNotifications.requestPermission();
		}
	}

	if (window.webkitNotifications.checkPermission() === 1) {
		$('body').bind('click', show_notification);
	} else {
		show_notification();
	}
})();