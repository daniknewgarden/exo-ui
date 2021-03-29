import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

import { Button } from './index'

describe('Button component tests', () => {
  it('Render text', () => {
    const text = 'Button'

    const { getByText } = render(
      <Button text={text} onClick={() => console.log('click')} />
    )
    const buttonElement = getByText(text)
    expect(buttonElement).toBeInTheDocument()
  })
  it('Aria label render', () => {
    const ariaLabel = 'Some aria label'

    const { getByLabelText } = render(
      <Button
        ariaLabel={ariaLabel}
        text='text'
        onClick={() => console.log('click')}
      />
    )
    const buttonElement = getByLabelText(ariaLabel)
    expect(buttonElement).toBeInTheDocument()
  })
  it('Click event', () => {
    const handleClick = jest.fn()
    const text = 'text'

    const { getByText } = render(<Button text={text} onClick={handleClick} />)
    const buttonElement = getByText(text)

    userEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
