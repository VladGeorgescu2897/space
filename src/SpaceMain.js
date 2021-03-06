import { LitElement, html } from 'lit-element';
import './SpaceTool';
import './SpaceData';

export class SpaceMain extends LitElement {
  static get properties() {
    return {
      coords: { type: Array },
      place: { type: String },
    };
  }

  constructor() {
    super();
    this.coords = [];
  }

  render() {
    return html`
      <space-tool @fetch-position=${() => this.onFetchPosition()}></space-tool>
      <space-data .lat=${this.coords[0]} .lon=${this.coords[1]} .place=${this.place}></space-data>
    `;
  }

  updated(changedProps) {
    if (changedProps.has('coords')) {
      if (this.coords.length === 2) {
        this.reverseGeocode(this.coords[0], this.coords[1]).then(place => (this.place = place));
      }
    }
  }

  onFetchPosition() {
    const url = 'http://api.open-notify.org/iss-now.json';
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const position = json.iss_position;
        this.coords = [position.latitude, position.longitude];
      });
  }

  reverseGeocode(lat, lon) {
    const base = 'https://nominatim.openstreetmap.org';
    const url = `${base}/reverse?format=json&lat=${lat}&lon=${lon}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => json.display_name);
  }
}
