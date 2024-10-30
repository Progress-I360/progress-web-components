import { css } from "lit";

export default css`
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
  }
  div.extra-small {
    height: var(--size-16);
    width: var(--size-16);
  }
  div.large {
    height: var(--size-48);
    width: var(--size-48);
  }
  div.medium {
    height: var(--size-20);
    width: var(--size-20);
  }
  div.small {
    height: var(--size-20);
    width: var(--size-20);
  }
  span {
    font-family: var(--font-family-Font-Awesome-6-Pro);
    font-style: normal;
    text-align: center;
  }
  span.danger {
    color: var(--color-icon-accent-red-subtle);
  }
  span.inactive {
    color: var(--color-icon-accent-grey-subtle);
  }
  span.info {
    color: var(--color-icon-accent-blue-subtle);
  }
  span.inverse {
    color: var(--color-icon-inverse);
  }
  span.maintenance {
    color: var(--color-icon-accent-yellow-subtle);
  }
  span.normal {
    color: var(--color-icon-base);
  }
  span.success {
    color: var(--color-icon-accent-green-subtle);
  }
  span.tip {
    color: var(--color-icon-accent-purple-subtle);
  }
  span.unknown {
    color: var(--color-icon-accent-grey-subtle);
  }
  span.warning {
    color: var(--color-icon-accent-orange-subtle);
  }
  span.extra-small {
    font-size: var(--font-size-xxs);
    line-height: var(--font-line-height-xs);
  }
  span.large {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  span.medium {
    font-size: var(--font-size-md);
    line-height: var(--font-line-height-sm);
  }
  span.small {
    font-size: var(--font-size-sm);
    line-height: var(--font-line-height-xs);
  }
  span.regular {
    font-weight: var(--font-weight-regular);
  }
  span.solid {
    font-weight: var(--font-weight-bold);
  }
  span.regular {
    font-weight: var(--font-weight-regular);
  }
  span.solid {
    font-weight: var(--font-weight-bold);
  }
`;
