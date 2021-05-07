import React from 'react'
import styled, { css } from 'styled-components'

export type TemplateComponentProps = {
  onEvent: (event: any /* React.SomeEvent */) => void
  content: string
  // Styles
  className?: string
  variant?: boolean
}

export const TemplateComponent: React.FC<TemplateComponentProps> = ({
  onEvent,
  content,
  className
}) => {
  return (
    <div onClick={onEvent} className={className}>
      {content}
    </div>
  )
}

const variants = {
  default: css`
    property: for-default;
  `,
  variant: css`
    property: for-variant;
  `
}

export const TemplateComponentStyled = styled(TemplateComponent)`
  ${({ variant }) => (variant ? variants.variant : variants.default)}
`
