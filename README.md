# exo-design-system

[![NPM](https://img.shields.io/npm/v/@daniknewgarden/exo-design-system.svg)](https://www.npmjs.com/package/@daniknewgarden/exo-design-system) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Preview](https://raw.githubusercontent.com/daniknewgarden/exo-ui/main/example/screenshots/exo-preview.png)

## How to use? 🐱‍💻

### Install package 📦

**Using npm** <br>
`npm i @daniknewgarden/exo-design-system`

**Using yarn** <br>
`yarn add @daniknewgarden/exo-design-system`

### Import styles 🎨

exo-design-system uses styled-components for styles. For colors i'm use [css custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--* 'MDN docs'). To create them, I use [createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle 'styled-components docs'). You must to import `GlobalStyle` on the main file.

```jsx
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// exo-design css custom properties
import { GlobalStyle } from '@daniknewgarden/exo-design-system'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)
```

### Components guide 🧩

#### Storybook 📕

There is no point in talking much about the components. <br>
I'll leave a [**link to the Storybook**](https://daniknewgarden.github.io/exo-ui/ 'Link to the Storybook') here, see for yourself. There you can see all the props and other important information.

#### Custom styles 🖌

##### Custom css-properties 📝

```css
:root {
  --color-text: #fff;
  --color-main: #3366ff; /* Main accent */
  --color-darker: #254eda; /* Focus, active states */
  --color-lighter: #6690ff; /* Hover state */
  --color-disabled: #e3e4eb; /* Disabled state */
}
```

You can easily redefine css variables like this.

```css
@media (prefers-color-scheme: dark) {
  body {
    --color-main: #517dff;
  }
}
```

##### Other custom styles

If you want add or redefine other styles, you can add className prop. <br>
For example:

```jsx
import React from 'react'

import { Button } from 'exo-design-system'

const App = () => {
  return (
    <div className='App'>
      <Button className='custom-btn' />
    </div>
  )
}

export default App
```

```css
.App .custom-btn {
  border-radius: 10px;
}
```

## License

MIT © [daniknewgarden](https://github.com/daniknewgarden) <br>
Designed by [Anthony Choren](https://dribbble.com/shots/11967273-EXO-KIT-Design-System 'Anthony Choren Dribbble')
