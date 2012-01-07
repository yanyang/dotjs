(function(){
	var path = ['http://dict.cn/hc/'];
	var _global = 0;

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