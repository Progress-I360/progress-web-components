import { css } from "lit";

export default css`
  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  div.outer {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    &.extra-small {
      height: var(--size-16);
      width: var(--size-16);
    }
    &.large {
      height: var(--size-48);
      width: var(--size-48);
    }
    &.medium {
      height: var(--size-20);
      width: var(--size-20);
    }
    &.small {
      height: var(--size-20);
      width: var(--size-20);
    }
  }
  div.inner {
    mask-repeat: no-repeat;
    &.extra-small {
      height: var(--font-size-xxs);
      width: var(--font-size-xxs);
    }
    &.large {
      height: 2.5rem;
      width: 2.5rem;
    }
    &.medium {
      height: var(--font-size-md);
      width: var(--font-size-md);
    }
    &.small {
      height: var(--font-size-sm);
      width: var(--font-size-sm);
    }
    &.danger {
      background-color: var(--color-icon-accent-red-subtle);
    }
    &.inactive {
      background-color: var(--color-icon-accent-grey-subtle);
    }
    &.info {
      background-color: var(--color-icon-accent-blue-subtle);
    }
    &.inverse {
      background-color: var(--color-icon-inverse);
    }
    &.maintenance {
      background-color: var(--color-icon-accent-yellow-subtle);
    }
    &.normal {
      background-color: var(--color-icon-base);
    }
    &.success {
      background-color: var(--color-icon-accent-green-subtle);
    }
    &.tip {
      background-color: var(--color-icon-accent-purple-subtle);
    }
    &.unknown {
      background-color: var(--color-icon-accent-grey-subtle);
    }
    &.warning {
      background-color: var(--color-icon-accent-orange-subtle);
    }
    &.spin {
      -webkit-animation: rotating 2s linear infinite;
      -moz-animation: rotating 2s linear infinite;
      -ms-animation: rotating 2s linear infinite;
      -o-animation: rotating 2s linear infinite;
      animation: rotating 2s linear infinite;
    }
  }
`;
