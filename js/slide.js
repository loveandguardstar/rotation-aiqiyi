/**
 * Created by lover star on 2018/6/12.
 */
var doMove = function (obj, json, endFn) {
	var pos = 0;
	var iSpeed = 0;
	clearInterval(obj.timer);

	obj.timer = setInterval(function () {
		for(attr in json) {
				//	����λ��
			if(attr == 'opacity') {
				pos = parseInt(parseFloat(getStyle(obj, attr)) * 100);
			}
			else {
				pos = parseInt(getStyle(obj, attr));
			}
				// ���ٶ�
			iSpeed = (json[attr] - pos) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				// �任λ�ã��ж�ֹͣ
			if(json[attr] == pos) {
				clearInterval(obj.timer);
			}
			else {
				if(attr == 'opacity') {
					obj.style.filter = 'alpha(opacity:' + pos + iSpeed + ')';
					obj.style.opacity = (pos + iSpeed) / 100;
				}
				else {
					obj.style[attr] = pos + iSpeed + 'px';
				}
			}

		}
	}, 30)
};

var getStyle = function (obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
};