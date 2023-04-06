import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('irbis-button')
export class IrbisButton extends LitElement {
  @property({ type: String }) model = '';

  @property({ type: Boolean }) disabled = false;

  static styles = css`
    :host {
      display: inline-flex;
    }

    button {
      font-family: var(
        --irbis-font-family,
        'Montserrat',
        'Segoe UI',
        Tahoma,
        Geneva,
        Verdana
      );
      background-color: var(--irbis-button-background-color, #fff);
      border-radius: var(--irbis-border-radius, 0px);
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-border-color, #bebebe);
      color: var(--irbis-button-color, #262626);
      cursor: pointer;
      font-size: var(--irbis-font-size, 14px);
      padding: var(--irbis-button-padding, 8px 16px);
    }

    button:hover {
      background-color: var(--irbis-button-hover-background-color, #f5f5f5);
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-hover-border-color, #bebebe);
    }

    button:active {
      background-color: var(--irbis-button-active-background-color, #ebebeb);
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-active-border-color, #bebebe);
    }

    button:focus {
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-focus-border-color, #8a8a8a);
    }

    button[disabled] {
      background-color: var(--irbis-button-disabled-background-color, #f4f4f4);
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-disabled-border-color, #f4f4f4);
      color: var(--irbis-button-disabled-color, #a6a6a6);
      cursor: not-allowed;
    }

    button[disabled]:hover {
      background-color: var(
        --irbis-button-disabled-hover-background-color,
        #f4f4f4
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-disabled-hover-border-color, #f4f4f4);
    }

    button[disabled]:active {
      background-color: var(
        --irbis-button-disabled-active-background-color,
        #f4f4f4
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-disabled-active-border-color, #f4f4f4);
    }

    button[disabled]:focus {
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-disabled-focus-border-color, #f4f4f4);
    }

    .dark {
      background-color: var(--irbis-button-dark-background-color, #262626);
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-dark-border-color, #8a8a8a);
      color: var(--irbis-button-dark-color, #fff);
    }

    .dark:hover {
      background-color: var(
        --irbis-button-dark-hover-background-color,
        #393939
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-dark-hover-border-color, #8a8a8a);
    }

    .dark:active {
      background-color: var(
        --irbis-button-dark-active-background-color,
        #1f1f1f
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-dark-active-border-color, #8a8a8a);
    }

    .dark:focus {
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-dark-focus-border-color, #bebebe);
    }

    .primary {
      background-color: var(--irbis-button-primary-background-color, #0078d4);
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-primary-border-color, #0078d4);
      color: var(--irbis-button-primary-color, #fff);
    }

    .primary:hover {
      background-color: var(
        --irbis-button-primary-hover-background-color,
        #106ebe
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-primary-hover-border-color, #106ebe);
    }

    .primary:active {
      background-color: var(
        --irbis-button-primary-active-background-color,
        #005a9e
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-primary-active-border-color, #005a9e);
    }

    .primary:focus {
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-primary-focus-border-color, #005a9e);
    }

    .success {
      background-color: var(--irbis-button-success-background-color, #107c10);
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-success-border-color, #107c10);
      color: var(--irbis-button-success-color, #fff);
    }

    .success:hover {
      background-color: var(
        --irbis-button-success-hover-background-color,
        #0f6a0f
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-success-hover-border-color, #0f6a0f);
    }

    .success:active {
      background-color: var(
        --irbis-button-success-active-background-color,
        #0b530b
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-success-active-border-color, #0b530b);
    }

    .success:focus {
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-success-focus-border-color, #0b530b);
    }

    .warning {
      background-color: var(--irbis-button-warning-background-color, #ff8c00);
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-warning-border-color, #ff8c00);
      color: var(--irbis-button-warning-color, #fff);
    }

    .warning:hover {
      background-color: var(
        --irbis-button-warning-hover-background-color,
        #e67600
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-warning-hover-border-color, #e67600);
    }

    .warning:active {
      background-color: var(
        --irbis-button-warning-active-background-color,
        #cc6a00
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-warning-active-border-color, #cc6a00);
    }

    .warning:focus {
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-warning-focus-border-color, #cc6a00);
    }

    .danger {
      background-color: var(--irbis-button-danger-background-color, #a4262c);
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-danger-border-color, #a4262c);
      color: var(--irbis-button-danger-color, #fff);
    }

    .danger:hover {
      background-color: var(
        --irbis-button-danger-hover-background-color,
        #b13a40
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-danger-hover-border-color, #b13a40);
    }

    .danger:active {
      background-color: var(
        --irbis-button-danger-active-background-color,
        #8a2028
      );
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-danger-active-border-color, #8a2028);
    }

    .danger:focus {
      border: var(--irbis-stroke-width, 1px) solid
        var(--irbis-button-danger-focus-border-color, #8a2028);
    }

    .is-loading {
      pointer-events: none;
    }

    .is-loading slot {
      visibility: hidden;
    }

    .is-loading::before {
      position: relative;
      animation: 0.5s linear 0s infinite normal none running spinAround;
      border-color: transparent transparent rgb(219, 219, 219)
        rgb(219, 219, 219);
      border-image: initial;
      border-radius: 100%;
      border-style: solid;
      border-width: 2px;
      content: '';
      display: inline-flex;
      height: 10px;
      left: calc(50% - 8.5px);
      width: 10px;
      margin-right: -17.89px;
    }

    @keyframes spinAround {
      from {
        transform: rotate(0);
      }

      to {
        transform: rotate(359deg);
      }
    }
  `;

  render() {
    if (this.disabled) {
      this.model += ' disabled';
      return html`
        <button class="${this.model}" disabled><slot></slot></button>
      `;
    }
    return html`
      <button class="${this.model}">
        <slot></slot>
      </button>
    `;
  }
}
