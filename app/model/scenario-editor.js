"use strict";
var ScenarioEditor = (function () {
    function ScenarioEditor() {
    }
    Object.defineProperty(ScenarioEditor.prototype, "SelectedScenario", {
        get: function () {
            return this._selectedScenario;
        },
        set: function (scenario) {
            this._selectedScenario = scenario;
            if (this._selectedScenario != null && this._selectedScenario.Countries != null) {
                this.SelectedCountry = this._selectedScenario.Countries[0];
            }
            else {
                this.SelectedCurve = null;
                this.SelectedCountry = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScenarioEditor.prototype, "SelectedCountry", {
        get: function () {
            return this._selectedCountry;
        },
        set: function (country) {
            this._selectedCountry = country;
            if (this._selectedCountry != null && this._selectedCountry.Curves != null) {
                this.SelectedCurve = this._selectedCountry.Curves[0];
            }
            else {
                this.SelectedCurve = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScenarioEditor.prototype, "SelectedCurve", {
        get: function () {
            return this._selectedCurve;
        },
        set: function (curve) {
            this._selectedCurve = curve;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScenarioEditor.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this); },
        enumerable: true,
        configurable: true
    });
    return ScenarioEditor;
}());
exports.ScenarioEditor = ScenarioEditor;
//# sourceMappingURL=scenario-editor.js.map