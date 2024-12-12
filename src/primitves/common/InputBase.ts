import { LitElement } from "lit";
import { property } from "lit/decorators.js";

export type BrowserFeature = "off" | "on";
export type Capitalization = "characters" | "none" | "sentences" | "words";
export type InputSize = "normal" | "small";
export type InputType = "text" | "password" | "email" | "tel" | "url";

export class InputBase extends LitElement {
  @property()
  autofocus: boolean = false;

  @property()
  disabled: boolean | undefined;

  @property()
  label: string | undefined;

  @property()
  name: string | undefined;

  @property()
  readonly: boolean = false;

  @property()
  required: boolean = false;
}
