import { css } from "lit";

export default css`
  button {
    align-items: center;
    border: 0;
    border-radius: var(--border-radius-2);
    cursor: pointer;
    display: inline-flex;
    gap: var(--size-0);
    justify-content: center;
  }
  button.full-width {
    width: 100%;
  }
  button span.label {
    font-family: var(--font-family-Source-Sans-Pro);
    font-size: var(--font-size-sm);
    font-style: normal;
    font-weight: var(--font-weight-semi-bold);
    line-height: var(--font-line-height-sm);
  }
  button span.icon {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button.icon {
    padding: var(--size-8);
  }
  button.medium.label {
    min-width: 4.5rem;
    padding: var(--size-8) var(--size-16);
  }
  button.medium.icon.label {
    gap: var(--size-8);
    padding: var(--size-8) var(--size-12) var(--size-8) var(--size-8);
  }
  button.small.icon {
    padding: var(--size-4);
  }
  button.small.label {
    min-width: 4rem;
    padding: var(--size-4) var(--size-12);
  }
  button.small.icon.label {
    gap: var(--size-4);
    padding: var(--size-4) var(--size-8) var(--size-4) var(--size-4);
  }
  button.extra-small.icon {
    padding: var(--size-0);
  }
  button.extra-small.label {
    font-size: var(--font-size-xs);
    min-width: 3.4375rem;
    padding: var(--size-0) var(--size-8);
  }
  button.extra-small.icon.label {
    gap: var(--size-4);
    padding: var(--size-0) var(--size-4) var(--size-0) var(--size-2);
  }
  button.disabled {
    background: var(--color-background-disabled);
    color: var(--color-text-disabled);
    cursor: not-allowed;
  }
  button.busy {
    cursor: not-allowed;
  }
  button.clear {
    background: var(--color-background-surface-subtle-default);
    color: var(--color-text-base);
  }
  button.clear:hover:not(.busy),
  button.clear[hover]:not(.busy) {
    background: var(--color-background-surface-subtle-hovered);
  }
  button.clear:active:not(.busy),
  button.clear[active]:not(.busy) {
    background: var(--color-background-surface-subtle-pressed);
  }
  button.clear.disabled {
    background: var(--color-background-surface-subtle-default);
  }
  button.ghost {
    background: var(--color-background-surface-alpha-default);
    color: var(--color-text-base);
  }
  button.ghost:hover:not(.busy),
  button.ghost[hover]:not(.busy) {
    background: var(--color-background-surface-alpha-hovered);
  }
  button.ghost:active:not(.busy),
  button.ghost[active]:not(.busy) {
    background: var(--color-background-surface-alpha-pressed);
  }
  button.danger {
    background: var(--color-background-accent-red-bold-default);
    color: var(--color-text-inverse);
  }
  button.danger:hover:not(.busy),
  button.danger[hover]:not(.busy) {
    background: var(--color-background-accent-red-bold-hovered);
  }
  button.danger:active:not(.busy),
  button.danger[active]:not(.busy) {
    background: var(--color-background-accent-red-bold-pressed);
  }
  button.info {
    background: var(--color-background-accent-blue-bold-default);
    color: var(--color-text-inverse);
  }
  button.info:hover:not(.busy),
  button.info[hover]:not(.busy) {
    background: var(--color-background-accent-blue-bold-hovered);
  }
  button.info:active:not(.busy),
  button.info[active]:not(.busy) {
    background: var(--color-background-accent-blue-bold-pressed);
  }
  button.primary {
    background: var(--color-background-brand-default);
    color: var(--color-text-inverse);
  }
  button.primary:hover:not(.busy),
  button.primary[hover]:not(.busy) {
    background: var(--color-background-brand-hovered);
  }
  button.primary:active:not(.busy),
  button.primary[active]:not(.busy) {
    background: var(--color-background-brand-pressed);
  }
  button.success {
    background: var(--color-background-accent-green-bold-default);
    color: var(--color-text-inverse);
  }
  button.success:hover:not(.busy),
  button.success[hover]:not(.busy) {
    background: var(--color-background-accent-green-bold-hovered);
  }
  button.success:active:not(.busy),
  button.success[active]:not(.busy) {
    background: var(--color-background-accent-green-bold-pressed);
  }
  button.tip {
    background: var(--color-background-accent-purple-bold-default);
    color: var(--color-text-inverse);
  }
  button.tip:hover:not(.busy),
  button.tip[hover]:not(.busy) {
    background: var(--color-background-accent-purple-bold-hovered);
  }
  button.tip:active:not(.busy),
  button.tip[active]:not(.busy) {
    background: var(--color-background-accent-purple-bold-pressed);
  }
  button.warning {
    background: var(--color-background-accent-orange-bold-default);
    color: var(--color-text-inverse);
  }
  button.warning:hover:not(.busy),
  button.warning[hover]:not(.busy) {
    background: var(--color-background-accent-orange-bold-hovered);
  }
  button.warning:active:not(.busy),
  button.warning[active]:not(.busy) {
    background: var(--color-background-accent-orange-bold-pressed);
  }
`;
