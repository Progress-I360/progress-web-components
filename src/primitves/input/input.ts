import { html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "./input.styles";
import "../body/body";

export type InputSize = "normal" | "small";
export type InputType = "text" | "password" | "email" | "tel" | "url";

@customElement("pwc-input")
export class Input extends LitElement {
  static styles = style;

  @property()
  disabled: boolean | undefined;

  @property()
  label: string | undefined;

  @property()
  placeholder: string | undefined;

  @property()
  size: InputSize = "normal";

  @property()
  type: InputType = "text";

  @property()
  value: string | undefined;

  protected render() {
    return html`
      <div class="outer">
        <slot name="label">
          ${this.label
            ? html`<label for="input"
                ><pwc-body
                  color="subtle"
                  content="${this.label}"
                  variant="xs-semi-bold"
              /></label>`
            : nothing}
        </slot>
        <div class="${this.getDivClasses()}">
          <slot name="icon"></slot>
          <input
            class="${this.getInputClasses()}"
            id="input"
            @input=${this.handleInput}
            value=${this.value}
            placeholder=${this.placeholder}
            type=${this.type}
          />
          <slot name="button"></slot>
        </div>
      </div>
    `;
  }

  private getDivClasses() {
    return classMap({
      disabled: !!this.disabled,
      inner: true,
      [`${this.size}`]: true,
    });
  }

  private getInputClasses() {
    return classMap({
      disabled: !!this.disabled,
    });
  }

  private handleInput(event: InputEvent) {
    const target = event.target as HTMLInputElement;

    if (this.disabled) {
      event.preventDefault();
      target.value = this.value || "";
    } else {
      this.value = target.value;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pwc-input": Input;
  }
}
