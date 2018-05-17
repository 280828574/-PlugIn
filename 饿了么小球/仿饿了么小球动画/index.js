// region 获取浏览器前缀
let elementStyle = document.createElement('div').style

let vendor = (() => {
    let transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    }

    for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key
        }
    }

    return false
})();

function prefixStyle(style) {
    if (vendor === false) {
        return false
    }

    if (vendor === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend'
        }
        return style
    }

    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
// endregion

// region 小球类
class Ball {
    constructor(el, opt) {
        Object.assign(this, opt)
        this.dropOver = this.dropOver.bind(this)
        this.el = el
        this.taskMap = {}
        this.position = el.getBoundingClientRect()
        this.position.clientHeight = window.innerHeight
        this.position.clientWidth = window.innerWidth
    }

    // 接受一个三维坐标对象,值为需要小球运动到的位置
    beforeDrop(pos) {
        let {
            x,
            y,
            z
        } = pos
        let {
            top,
            left
        } = this.position
        let offsetY = top - y
        let offsetX = left - x
        this.translate({
            x: -offsetX,
            y: -offsetY,
            z
        })
        this.el.style.visibility = 'visible'
        setTimeout(() => {
            this.startDrop()
        }, 20)
    }

    startDrop() {
        let styleKey = prefixStyle('transition')
        this.el.style[styleKey] = 'all .3s cubic-bezier(0.49, -0.29, 0.75, 0.41)'
        this.el.children[0].style[styleKey] = 'all .3s linear'
        this.translate()
        this.el.addEventListener(prefixStyle('transitionEnd'), this.dropOver)
    }

    dropOver() {
        let styleKey = prefixStyle('transition')
        this.el.removeEventListener(prefixStyle('transitionEnd'), this.dropOver)
        this.el.style[styleKey] = ''
        this.el.children[0].style[styleKey] = ''
        setTimeout(() => {
            this.el.style.visibility = 'hidden'
            this.fire('drop-over')
        })
    }

    translate(pos = {}) {
        let {
            x = 0, y = 0, z = 0
        } = pos
        let el = this.el
        let styleKey = 'transform'
        let styleVal = `translate3d(0px,${y}px,${z}px)`
        el.style[styleKey] = styleVal
        this.el.children[0].style[styleKey] = `translate3d(${x}px,0px,${z}px)`
    }

    on(event, callback) {
        this.taskMap[event] = callback
    }

    fire(event) {
        this.taskMap[event] && this.taskMap[event]()
    }
}
// endregion

// region 小球队列
class DropBall {
    constructor(el, opt) {
        opt = opt || {}
        Object.assign(this, opt)
        this.el = el
        this.createBallList()
    }

    createBallList() {
        let el = this.el
        let children = Array.from(el.children)
        this.ballList = children.map(child => {
            return new Ball(child)
        })
    }

    drop(pos) {
        let ball = this.ballList.shift()
        ball.beforeDrop(pos)
        ball.on('drop-over', () => {
            this.ballList.push(ball)
        })
    }
}
// endregion

let ballList = document.getElementById('ballList')
let balls = new DropBall(ballList)
document.addEventListener('click', function(e) {
    let point = e.touches ? e.touches[0] : e
    balls.drop({
        x: point.clientX,
        y: point.clientY,
        z: 0
    })
})
