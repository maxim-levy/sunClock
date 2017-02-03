var sunrise;
(function (sunrise) {
    var Sunrise = (function () {
        function Sunrise(skyProportion) {
            if (skyProportion === void 0) { skyProportion = 0.5; }
            this.skyProportion = skyProportion;
            this.mouse = { x: 0, y: 0 };
        }
        Sunrise.prototype.changePictureByMouse = function (e) {
            this.mouse.x = e.clientX || e.pageX;
            this.mouse.y = e.clientY || e.pageY;
            this.updateDimensions();
            var sun = document.getElementById("sun");
            if (sun) {
                var sunPath = 'circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)';
                sun.style.background = '-webkit-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px, ' + sunPath;
                sun.style.background = '-moz-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px, ' + sunPath;
                sun.style.background = '-ms-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px, ' + sunPath;
            }
            var sunDay = document.getElementById("sunDay");
            if (sunDay) {
                var sunDayPath = 'circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)';
                sunDay.style.background = '-webkit-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px, ' + sunDayPath;
                sunDay.style.background = '-moz-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px, ' + sunDayPath;
                sunDay.style.background = '-ms-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px, ' + sunDayPath;
            }
            var sunSet = document.getElementById("sunSet");
            if (sunSet) {
                var sunSetPath = 'circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)';
                sunSet.style.background = '-webkit-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px, ' + sunSetPath;
                sunSet.style.background = '-moz-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px, ' + sunSetPath;
                sunSet.style.background = '-ms-radial-gradient(' + this.mouse.x + 'px ' + this.mouse.y + 'px, ' + sunSetPath;
            }
            var waterReflectionContainer = document.getElementById("waterReflectionContainer");
            if (waterReflectionContainer) {
                waterReflectionContainer.style.perspectiveOrigin = (this.mouse.x / this.myWidth * 100).toString() + "% -15%";
            }
            var waterReflectionMiddle = document.getElementById("waterReflectionMiddle");
            if (waterReflectionMiddle) {
                waterReflectionMiddle.style.left = (this.mouse.x - this.myWidth - (this.myWidth * .03)).toString() + "px";
            }
            var bodyWidth = document.getElementsByTagName("body")[0].clientWidth;
            if (sun) {
                sun.style.width = bodyWidth.toString();
                sun.style.left = "0px";
            }
            if (sunDay) {
                sunDay.style.width = bodyWidth.toString();
                sunDay.style.left = "0px";
            }
            var darknessOverlay = document.getElementById("darknessOverlay");
            darknessOverlay ? darknessOverlay.style.opacity = '' + Math.min((this.mouse.y - (this.myHeight * this.skyProportion)) / (this.myHeight * this.skyProportion), 1) : null;
            var darknessOverlaySky = document.getElementById("darknessOverlaySky");
            darknessOverlaySky ? darknessOverlaySky.style.opacity = '' + Math.min((this.mouse.y - (this.myHeight * 7 / 10)) / (this.myHeight - (this.myHeight * 7 / 10)), 1) : null;
            var nightSkyDarkness = 0.65;
            var moon = document.getElementById("moon");
            !moon ? null : moon.style.opacity = '' + Math.min((this.mouse.y - (this.myHeight * 9 / 10)) / (this.myHeight - (this.myHeight * 9 / 10)), nightSkyDarkness);
            var horizonNight = document.getElementById("horizonNight");
            !horizonNight ? null : horizonNight.style.opacity = '' + (this.mouse.y - (this.myHeight * 4 / 5)) / (this.myHeight - (this.myHeight * 4 / 5));
            var starsContainer = document.getElementById("starsContainer");
            !starsContainer ? null : starsContainer.style.opacity = '' + (this.mouse.y / this.myHeight - 0.6);
            var waterDistance = document.getElementById("waterDistance");
            !waterDistance ? null : waterDistance.style.opacity = '' + (this.mouse.y / this.myHeight + 0.6);
            sunDay ? sunDay.style.opacity = '' + (1 - this.mouse.y / this.myHeight) : null;
            var sky = document.getElementById("sky");
            !sky ? null : sky.style.opacity = '' + Math.min((1 - this.mouse.y / this.myHeight), 0.99);
            !sunSet ? null : sunSet.style.opacity = '' + (this.mouse.y / this.myHeight - 0.2);
            var horizon = document.getElementById("horizon");
            if (this.mouse.y > this.myHeight * this.skyProportion) {
                !sun ? null : sun.style.opacity = '' + Math.min((this.myHeight - this.mouse.y) / (this.myHeight * this.skyProportion) + 0.2, 0.5);
                !horizon ? null : horizon.style.opacity = '' + (this.myHeight - this.mouse.y) / (this.myHeight * this.skyProportion) + 0.2;
                !waterReflectionMiddle ? null : waterReflectionMiddle.style.opacity = '' + ((this.myHeight - this.mouse.y) / (this.myHeight * this.skyProportion) - 0.1);
            }
            else {
                !sun ? null : sun.style.opacity = '' + Math.min(this.mouse.y / (this.myHeight * this.skyProportion), 0.5);
                !horizon ? null : horizon.style.opacity = '' + Math.min(this.mouse.y / (this.myHeight * this.skyProportion), 0.99);
                !waterReflectionMiddle ? null : waterReflectionMiddle.style.opacity = '' + (this.mouse.y / (this.myHeight * this.skyProportion) - 0.1);
            }
        };
        Sunrise.prototype.updateDimensions = function () {
            if (typeof (window.innerWidth) == 'number') {
                //Non-IE
                this.myWidth = window.innerWidth;
                this.myHeight = window.innerHeight;
            }
            else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                this.myWidth = document.documentElement.clientWidth;
                this.myHeight = document.documentElement.clientHeight;
            }
            else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                this.myWidth = document.body.clientWidth;
                this.myHeight = document.body.clientHeight;
            }
        };
        return Sunrise;
    }());
    sunrise.Sunrise = Sunrise;
})(sunrise || (sunrise = {}));
var sr = new sunrise.Sunrise();
function windowResize() {
    sr.updateDimensions();
}
document.addEventListener('mousemove', function (e) {
    sr.changePictureByMouse(e);
}, false);
//# sourceMappingURL=sunrise.js.map