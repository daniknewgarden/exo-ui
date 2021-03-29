import React from 'react'

import { Button } from 'exo-design-system'

import PlusIcon from './assets/Icon.svg'
import ArrowIcon from './assets/Arrow.svg'

const App = () => {
  return (
    <>
      <div className='App'>
        <Button text='Default' onClick={() => console.log('click')} />
        <Button text='Rounded' onClick={() => console.log('click')} rounded />
        <Button
          text='Transparent'
          onClick={() => console.log('click')}
          transparent
        />
        <Button
          text='Text & icon'
          icon={ArrowIcon}
          onClick={() => console.log('click')}
        />
        <Button
          text='Text & icon'
          icon={ArrowIcon}
          onClick={() => console.log('click')}
          reversed
        />
        <Button
          icon={PlusIcon}
          onClick={() => console.log('click')}
          ariaLabel='add something'
        />
        <Button
          icon={PlusIcon}
          onClick={() => console.log('click')}
          ariaLabel='add something'
          big
        />
        <Button text='Big' onClick={() => console.log('click')} big />
        <Button
          text='Text & icon'
          icon={ArrowIcon}
          onClick={() => console.log('click')}
          disabled
        />
        <Button
          text='Text & icon'
          icon={ArrowIcon}
          onClick={() => console.log('click')}
          reversed
        />
        <Button
          icon={PlusIcon}
          onClick={() => console.log('click')}
          ariaLabel='add something'
        />
      </div>
    </>
  )
}

export default App
