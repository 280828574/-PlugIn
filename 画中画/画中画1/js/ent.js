!function () {
    "use strict";

    function i(i) {
        i.preventDefault()
    }

    function t() {
        this.canvas = NE("#app")[0], this.ctx = this.canvas.getContext("2d"), this.imgList = [{
            link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/cover_v2.jpg",
            imgW: "750",
            imgH: "1206"
         },
            //  {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p1.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "152",
        //     areaH: "244",
        //     areaL: "370",
        //     areaT: "1068",
        //     gif: "p1"
        // },
        // {
        //     link: "http://localhost:63342/%E7%94%BB%E4%B8%AD%E7%94%BB/css/images/p14.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "90",
        //     areaH: "111",
        //     areaL: "200",
        //     areaT: "2102"
        // },
            // , {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p3.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "166",
        //     areaH: "267",
        //     areaL: "114",
        //     areaT: "897"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p4.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "194",
        //     areaH: "312",
        //     areaL: "85",
        //     areaT: "1402",
        //     gif: "p4"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p5.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "102",
        //     areaH: "164",
        //     areaL: "315",
        //     areaT: "2188"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p6.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "280",
        //     areaH: "450",
        //     areaL: "441",
        //     areaT: "467",
        //     gif: "p6"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p7.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "79",
        //     areaH: "127",
        //     areaL: "501",
        //     areaT: "2514",
        //     gif: "p7"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p8.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "176",
        //     areaH: "283",
        //     areaL: "1582",
        //     areaT: "1084"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p9.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "173",
        //     areaH: "278",
        //     areaL: "1472",
        //     areaT: "1357",
        //     gif: "p9"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p10_1.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "179",
        //     areaH: "287",
        //     areaL: "516",
        //     areaT: "1459"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p10.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "769",
        //     areaH: "1237",
        //     areaL: "558",
        //     areaT: "873"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p11.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "112",
        //     areaH: "181",
        //     areaL: "881",
        //     areaT: "1938"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p12.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "328",
        //     areaH: "528",
        //     areaL: "706",
        //     areaT: "314"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p13.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "132",
        //     areaH: "213",
        //     areaL: "1184",
        //     areaT: "908"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p14.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "82",
        //     areaH: "132",
        //     areaL: "206",
        //     areaT: "2092"
        // }, {
        //     link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p15.jpg",
        //     imgW: "1875",
        //     imgH: "3015",
        //     areaW: "246",
        //     areaH: "396",
        //     areaL: "598",
        //     areaT: "1270"
        // },
            {
            link: "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p16.jpg",
            imgW: "1875",
            imgH: "3015",
            areaW: "76",
            areaH: "110",
            areaL: "462",
            areaT: "2563"
        }], this.radio = 1, this.index = 0, this.fps = 60, this.scale = .99, this.scaleSlow = .993, this.scaleReturn = .8, this.w = 750, this.h = 1206, this.gif_timer = null, this.imgs = ["http://static.ws.126.net/f2e/ent/ent_painting2017/images/B1_v2.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/B2.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/B3.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/B4.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/B51.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/B52.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/cover_v2.jpg", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/cover_bg_v2.jpg", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/cover_people.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/music.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p1n.jpg", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p4n.jpg", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p6n.jpg", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p7a.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p7n.jpg", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p9a.png", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/p9n.jpg", "http://static.ws.126.net/f2e/ent/ent_painting2017/images/sprite_v2.png"]
    }

    document.addEventListener("touchmove", i, !1), document.addEventListener("touchstart", i, !1), /micromessenger/.test(navigator.userAgent.toLocaleLowerCase()) && NE(".share").hide(), t.prototype.initCanvas = function () {
    }, t.prototype.preImg = function (i) {
        function t() {
            e++, e == s.length && a()
        }

        for (var e = 0, a = function () {
        }, s = i, n = 0; n < s.length; n++) {
            var g = new Image;
            g.src = s[n], g.onload = function () {
                t()
            }, g.onerror = function () {
                console.log("img\u5931\u8d25" + this.i), t()
            }
        }
        return {
            done: function (i) {
                a = i || a
            }
        }
    }, t.prototype.preload = function () {
        function i() {
            t++, t == s.length && a(e.imgList)
        }

        for (var t = 0, e = this, a = function () {
        }, s = this.imgList, n = 0; n < s.length; n++) this.imgList[n].image = new Image, this.imgList[n].image.src = s[n].link, this.imgList[n].image.i = n, this.imgList[n].image.name = n, this.imgList[n].image.className = "item", this.imgList[n].image.onload = function () {
            NE(".collection").append(e.imgList[this.i].image), i()
        }, this.imgList[n].image.onerror = function () {
            console.log("\u5931\u8d25" + this.i), i(), NE(".collection").append(e.imgList[this.i].image)
        };
        return {
            done: function (i) {
                a = i || a
            }
        }
    }, t.prototype["return"] = function () {
        function i() {
            var a = (new Date).getTime();
            return t.index == -1 ? (t.index = 0, void t.showCover()) : a - e < 1e3 / t.fps ? void(t.timer = requestAnimationFrame(i)) : (e = a, t.radio = 1 / t.scaleReturn * t.radio, t.timer = requestAnimationFrame(i), void t.drawReturn())
        }

        var t = this;
        this.hideend();
        var e = (new Date).getTime();
        clearInterval(this.gif_timer), cancelAnimationFrame(this.timer), t.timer = requestAnimationFrame(i)
    }, t.prototype.init = function () {
        var i = this;
        this.initCanvas(), this.preload().done(function () {
            i.preImg(i.imgs).done(function () {
                NE(".loading").hide(), NE(".cover").addClass("active").css("opacity", "1"), i.domList = NE(".collection .item").sort(function (i, t) {
                    return i.name - t.name
                }), i.img_oversize = i.domList[i.index + 1].image, i.img_minisize = i.domList[i.index].image, i.draw(), NE("#start").removeClass("hidden"), NE("#start").bind("touchstart", i.touchHandler.bind(i)), NE("#start").bind("touchend", i.touchendHandler.bind(i))
            })
        }), NE(".return").bind("touchend", i["return"].bind(i)), NE(".music").bind("touchend", function () {
            NE(".music").hasClass("music_close") ? (NE(".music").removeClass("music_close"), NE("#audio")[0].play()) : (NE(".music").addClass("music_close"), NE("#audio")[0].pause())
        }), NE(".share").bind("touchend", function () {
            window.NewsAppShare && NewsAppShare.show(), window.NTESAntAnalysis && NTESAntAnalysis.sendData({
                projectid: window.NTESAntProjectid,
                val_nm: "share",
                val_act: "sharedone",
                info: {modelid: window.NTESProjectid, title: document.title}
            }), window.neteaseAnalysis && window.neteaseAnalysis({
                type: "func",
                spst: 1,
                modelid: window.NTESProjectid,
                func: "sharedone"
            }), window.neteaseAnalysis && neteaseAnalysis({modelid: window.NTESProjectid, spst: 1, share: "timeline"})
        }), NE(".tie").bind("touchend", function () {
            window.location.href = "http://m.163.com/newsapp/applinks.html?spsid=NTM-LEST41Y4-9&spsuuid=" + NTESAntAnalysis.info.uid + "&spsc=sps&path=" + encodeURIComponent("/doc/" + window.DocId)
        })
    }, t.prototype.touchendHandler = function (i) {
        i.stopPropagation(), i.preventDefault();
        var t = this;
        NE("#start").removeClass("active"), t.imgList[t.index + 1] && t.imgList[t.index + 1].gif ? (t.willPause = !0, NE("#start").hide(), NE(".gif")[0].className = "gif " + t.imgList[t.index + 1].gif, NE(".gif").show().css("opacity", "0")) : (t.willPause = !1, cancelAnimationFrame(this.timer))
    }, t.prototype.touchHandler = function (i) {
        function t() {
            var i = (new Date).getTime();
            if (e.index + 1 != e.imgList.length) {
                if (i - a < 1e3 / e.fps) return void(e.timer = requestAnimationFrame(t));
                a = i, e.imgList[e.index + 1].limitMax && e.imgList[e.index + 1].limitMin && e.radio < e.imgList[e.index + 1].limitMax && e.radio > e.imgList[e.index + 1].limitMin ? e.radio = e.scaleSlow * e.radio : e.radio = e.scale * e.radio, e.timer = requestAnimationFrame(t), e.draw()
            }
        }

        i.stopPropagation(), i.preventDefault(), cancelAnimationFrame(this.timer), this.willPause = !1, NE("#start").addClass("active"), NE(".gif").hide().css("opacity", "0"), NE(".cover").length && NE(".cover").hide();
        var e = this, a = (new Date).getTime();
        clearInterval(this.gif_timer), e.timer = requestAnimationFrame(t)
    }, t.prototype.draw = function () {
        if (this.index + 1 != this.imgList.length) {
            if (this.radio < this.imgList[this.index + 1].areaW / this.imgList[this.index + 1].imgW) if (this.willPause) this.radio = this.imgList[this.index + 1].areaW / this.imgList[this.index + 1].imgW, cancelAnimationFrame(this.timer), NE(".gif").css("opacity", "1"), NE("#start").show(); else if (console.log(this.radio), this.index++, this.radio = 1, !this.imgList[this.index + 1]) return void this.showend();
            this.imgNext = this.imgList[this.index + 1], this.imgCur = this.imgList[this.index], this.img_oversize = this.domList[this.index + 1], this.img_minisize = this.domList[this.index], this.drawImgOversize(this.img_oversize, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio), this.drawImgMinisize(this.img_minisize, this.imgCur.imgW, this.imgCur.imgH, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio)
        }
    }, t.prototype.showCover = function () {
        NE(".cover").show(), NE("#start").show(), this.radio = 1
    }, t.prototype.drawReturn = function () {
        return this.radio > 1 && (this.index--, this.radio = this.imgList[this.index + 1].areaW / this.imgList[this.index + 1].imgW), this.index == -1 ? (this.index = 0, this.showCover(), void cancelAnimationFrame(this.timer)) : (this.imgNext = this.imgList[this.index + 1], this.imgCur = this.imgList[this.index], this.img_oversize = this.domList[this.index + 1], this.img_minisize = this.domList[this.index], this.drawImgOversize(this.img_oversize, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio), void this.drawImgMinisize(this.img_minisize, this.imgCur.imgW, this.imgCur.imgH, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio))
    }, t.prototype.hideend = function () {
        NE(".backcover").addClass("hidden").removeClass("active")
    }, t.prototype.showend = function () {
        NE(".backcover").removeClass("hidden"), NE("#start").hide(), setTimeout(function () {
            NE(".backcover").addClass("active")
        }, 200)
    }, t.prototype.draw1 = function () {
        var i = this;
        if (this.index + 1 != this.imgList.length) {
            if (this.radio <= this.imgList[this.index + 1].areaW / this.imgList[this.index + 1].imgW) {
                this.radio = this.imgList[this.index + 1].areaW / this.imgList[this.index + 1].imgW, this.drawImgOversize(this.img_oversize, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio), this.drawImgMinisize(this.img_minisize, this.imgCur.imgW, this.imgCur.imgH, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio);
                var t = i.imgList[i.index + 1], e = new Image;
                e.src = t.giflink;
                var a = new Image;
                if (a.src = t.bglink, e.onload = function () {
                    var s = t.sprites, n = 0;
                    NE("#start").show(), this.gif_timer = setInterval(function () {
                        i.ctx.drawImage(a, 0, 0, 750, 1206), i.drawSprite(e, 90, 326, n, s, 560, 516), n = n + 1 == 48 ? 0 : n + 1
                    }, 50)
                }, this.index++, this.radio = 1, !this.imgList[this.index + 1]) return void this.showend()
            }
            this.imgNext = this.imgList[this.index + 1], this.imgCur = this.imgList[this.index], this.img_oversize = this.domList[this.index + 1], this.img_minisize = this.domList[this.index], this.drawImgOversize(this.img_oversize, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio), this.drawImgMinisize(this.img_minisize, this.imgCur.imgW, this.imgCur.imgH, this.imgNext.imgW, this.imgNext.imgH, this.imgNext.areaW, this.imgNext.areaH, this.imgNext.areaL, this.imgNext.areaT, this.radio)
        }
    }, t.prototype.drawImgOversize = function (i, t, e, a, s, n, g, r) {
        this.ctx.drawImage(i, n - (a / r - a) * (n / (t - a)), g - (s / r - s) * (g / (e - s)), a / r, s / r, 0, 0, 750, 1206)
    }, t.prototype.drawImgMinisize = function (i, t, e, a, s, n, g, r, m, h) {
        this.ctx.drawImage(i, 0, 0, t, e, (n / h - n) * (r / (a - n)) * h * 750 / n, (g / h - g) * (m / (s - g)) * h * 1206 / g, 750 * h, 1206 * h)
    }, t.prototype.drawSprite = function (i, t, e, a, s, n, g) {
        var r = s[a];
        this.ctx.drawImage(i, r[0], r[1], r[2], r[3], t, e, n, g)
    }, window.nyphile = new t, nyphile.init()
}();
