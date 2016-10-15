"use strict";
var Stress = (function () {
    function Stress(tenor, shock, base) {
        this.StressLevel = 0;
        this.Base = base;
        this.Tenor = tenor;
        this.Shock = shock;
    }
    Object.defineProperty(Stress.prototype, "Base", {
        get: function () {
            return this._base;
        },
        set: function (base) {
            this._base = base;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stress.prototype, "Shock", {
        get: function () {
            return this._shock;
        },
        set: function (shock) {
            this._shock = shock;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stress.prototype, "TenorValue", {
        get: function () {
            var tenor = this.Tenor.substring(0, this.Tenor.length - 1);
            var term = this.Tenor.substring(this.Tenor.length - 1).toUpperCase();
            switch (term) {
                case "Y": return parseInt(tenor) * 12;
                case "M": return parseInt(tenor);
                case "D": return parseInt(tenor) / 30;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Stress;
}());
exports.Stress = Stress;
//# sourceMappingURL=stress.js.map