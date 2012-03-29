(function(){
	var path = ['http://dict.cn/hc/'];
	var _global = 0;
	var _protocol = location.protocol;
	var _host = location.host;
	if ( _protocol === 'https:') {
		return false;
	}
	if (_host === 'local.qiqiwu.com') {
		return false;
	}
	if (_host === 'localpm.qiqiwu.com') {
		return false;
	}
	function create_js() {
		if (_global >= path.length) {
			return false;
		}
		var _path = path[_global];
		var script = document.createElement("script");
		script.setAttribute('src', _path);
		script.onload = function(){
			_global++;
			create_js();
		};
		document.querySelector('head').appendChild(script);
	}
	create_js();
})();