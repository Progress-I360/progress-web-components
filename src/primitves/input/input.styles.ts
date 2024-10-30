import { css } from "lit";

export default css`
  div.outer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: var(--size-4);
    padding: var(--size-0);
  }
  div.inner {
    align-items: center;
    background: var(--color-background-surface-default);
    border: 1px solid var(--color-border-input-default);
    border-radius: var(--border-radius-2);
    display: flex;
    flex: 1 0 0;
    flex-direction: row;
  }
  div.inner:hover {
    background: var(--color-background-surface-hovered);
    border-color: var(--color-border-input-hovered);
  }
  div.inner:focus-within {
    background: var(--color-background-surface-pressed);
    border-color: var(--color-border-input-pressed);
  }
  div.inner.normal {
    gap: var(--size-4);
    padding: var(--size-8) var(--size-12);
  }
  div.inner.small {
    gap: var(--size-0);
    padding: var(--size-4) var(--size-8);
  }
  div.inner.disabled {
    background: var(--color-background-disabled);
    border: 1px solid var(--color-border-input-disabled);
  }
  label {
    color: var(--color-text-subtle);
    font-family: var(--font-family-Source-Sans-Pro);
    font-size: var(--font-size-xs);
    font-style: normal;
    font-weight: var(--font-weight-semi-bold);
    line-height: var(--font-line-height-sm);
  }
  input {
    background: transparent;
    border: none;
    color: var(--color-text-base);
    flex: 1 0 0;
    font-family: var(--font-family-Source-Sans-Pro);
    font-size: var(--font-size-sm);
    font-style: normal;
    font-weight: var(--font-weight-regular);
    height: var(--size-20);
    line-height: var(--font-line-height-sm);
    padding: 0;
    -webkit-box-shadow: 0 0 0 3.125rem var(--color-background-surface-default)
      inset !important;
    -webkit-text-fill-color: var(--color-text-base) !important;
  }
  input:hover {
    -webkit-box-shadow: 0 0 0 3.125rem var(--color-background-surface-hovered)
      inset !important;
  }
  input:focus {
    outline: none;
    -webkit-box-shadow: 0 0 0 3.125rem var(--color-background-surface-pressed)
      inset !important;
  }
  input::placeholder {
    color: var(--color-text-subtlest);
  }
  input.disabled {
    -webkit-box-shadow: 0 0 0 3.125rem var(--color-background-disabled) inset !important;
    -webkit-text-fill-color: var(--color-text-disabled) !important;
  }
`;
