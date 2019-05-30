import { LitElement, html, css } from 'lit-element';

class SpaceTool extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: rgba(0, 0, 0, 0.4);
        display: block;
        padding: 1rem;
      }

      button {
        background: dodgerblue;
        border: 0;
        color: white;
        font-family: sans-serif;
        font-size: 1rem;
        font-weight: bold;
        padding: 0.5rem;
      }
    `;
  }
  render() {
    return html`
      <button @click=${this.onClickFind}>
        GET POSITION
      </button>
    `;
  }

  onClickFind() {
    this.dispatchEvent(new CustomEvent('fetch-position'));
  }
}

window.customElements.define('space-tool', SpaceTool);
