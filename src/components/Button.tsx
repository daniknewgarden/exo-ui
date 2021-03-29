import React from 'react'
import styled, { css } from 'styled-components'

export type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  text?: string
  icon?: string
  ariaLabel?: string
  // Styles
  className?: string
  disabled?: boolean
  transparent?: boolean
  rounded?: boolean
  big?: boolean
  reversed?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  text,
  ariaLabel,
  onClick,
  className,
  disabled
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

const sizes = {
  default: css`
    padding: 4px 12px;
  `,
  big: css`
    padding: 12px 24px;
  `
}

const corners = {
  default: css`
    border-radius: 5px;
  `,
  rounded: css`
    border-radius: 50px;
  `
}

const icons = {
  default: css`
    background-position-x: calc(100% - 4px);
    padding: 4px 36px 4px 12px;
  `,
  reversed: css`
    background-position-x: 4px;
    padding: 4px 12px 4px 36px;
  `,
  onlyIcon: css`
    padding: 16px;
    background-position-x: center;
    background-size: 16px;
  `,
  onlyIconBig: css`
    padding: 24px;
    background-position-x: center;
    background-size: 24px;
  `
}

const background = {
  default: css`
    border: none;
    background-color: var(--color-main);
    color: var(--color-text);
    &:focus {
      background-color: var(--color-darker);
    }
    &:hover {
      background-color: var(--color-lighter);
    }
    &:active {
      background-color: var(--color-main);
    }
  `,
  transparent: css`
    border: 2px solid var(--color-main);
    background-color: transparent;
    color: var(--color-main);
    &:focus {
      border: 2px solid var(--color-lighter);
      color: var(--color-lighter);
    }
    &:hover {
      border: 2px solid var(--color-lighter);
      color: var(--color-lighter);
    }
    &:active {
      border: 2px solid var(--color-darker);
      color: var(--color-darker);
    }
  `
}

export const ButtonStyled = styled(Button)`
  ${({ big }) => (big ? sizes.big : sizes.default)}
  ${({ rounded }) => (rounded ? corners.rounded : corners.default)}
  ${({ icon, text, reversed }) =>
    icon &&
    `background-image: url(${icon});
    background-repeat: no-repeat;
    background-position-y: center;
    ${icon && text && reversed ? icons.reversed : icons.default}`}
    ${({ icon, big, text }) => {
    if (icon && !text) {
      return big ? icons.onlyIconBig : icons.onlyIcon
    }
    return ''
  }}

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-lighter);
  }

  &:disabled {
    background-color: var(--color-disabled);
    &:hover {
      background-color: var(--color-disabled);
    }
  }

  ${({ transparent }) =>
    transparent ? background.transparent : background.default}
`
