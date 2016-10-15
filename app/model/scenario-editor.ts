import { Scenario } from '../classes/scenario';
import { Country } from '../classes/country';
import { Curve } from '../classes/curve';

export /**
 * ScenarioEditor
 */
class ScenarioEditor {
    private _selectedScenario: Scenario;
    private _selectedCountry: Country;
    private _selectedCurve: Curve;

    get SelectedScenario() : Scenario {
        return this._selectedScenario;
    }
    set SelectedScenario(scenario : Scenario) {
        this._selectedScenario = scenario;
        if(this._selectedScenario != null && this._selectedScenario.Countries != null)
        {
            this.SelectedCountry = this._selectedScenario.Countries[0];
        }
        else
        {
            this.SelectedCurve = null;
            this.SelectedCountry = null;
        }
    }

    get SelectedCountry() : Country {
        return this._selectedCountry;
    }
    set SelectedCountry(country : Country) {
        this._selectedCountry = country;
        if(this._selectedCountry != null && this._selectedCountry.Curves != null)
        {
            this.SelectedCurve = this._selectedCountry.Curves[0];
        }
        else
        {
            this.SelectedCurve = null;
        }
    }

    get SelectedCurve() : Curve {
        return this._selectedCurve;
    }
    set SelectedCurve(curve : Curve) {
        this._selectedCurve = curve;
    }

    constructor()
    {
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this); }
}