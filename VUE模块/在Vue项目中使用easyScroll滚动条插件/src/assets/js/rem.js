// JavaScript Document
(function(doc, win) {
	let [docEl, resizeEvt, recalc] = [doc.documentElement, 'orientationchange' in window ? 'orientationchange' : 'resize', function() {
		let clientWidth = docEl.clientWidth
		if(!clientWidth) return
		if(clientWidth !== 375) {
			docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
		} else {
			docEl.style.fontSize = '100px'
		}
	}]
	// let docEl = doc.documentElement,
	//   resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	//   recalc = function () {
	//     var clientWidth = docEl.clientWidth
	//     if (!clientWidth) return
	//     if (clientWidth !== 375) {
	//       docEl.style.fontSize = 100 * (clientWidth / 375) + 'px'
	//     } else {
	//       docEl.style.fontSize = '100px'
	//     }
	//   }

	if(!doc.addEventListener) return
	win.addEventListener(resizeEvt, recalc, false)
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)