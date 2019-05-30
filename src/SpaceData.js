import { LitElement, html, css } from 'lit-element';

class SpaceData extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: rgba(0, 0, 0, 0.4);
        display: block;
        padding: 1rem;
      }
    `;
  }

  static get properties() {
    return {
      lat: { type: Number },
      lon: { type: Number },
      place: { type: String },
    };
  }

  render() {
    return html`
      <div>LATITUDE: <output>${this.lat}</output></div>
      <div>LONGITUDE: <output>${this.lon}</output></div>
      <div>PLACE: <span>${this.place}</span></div>
    `;
  }
}

window.customElements.define('space-data', SpaceData);
