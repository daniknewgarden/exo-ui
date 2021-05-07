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
I'll leave a [**link to the Storybook here**](https://daniknewgarden.github.io/exo-ui/ 'Link to the Storybook'), see for yourself. There you can see all the props and other important information.

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

## For contributors 👩‍💻

### Technologies stack 📃

This library created using by [create-react-library](https://github.com/transitive-bullshit/create-react-library#readme).
Here is used technologies list:

- React ([docs](https://reactjs.org/docs/getting-started.html))
- TypeScript ([docs](https://www.typescriptlang.org/docs/handbook/react.html))
- Styled components ([docs](https://styled-components.com/))

### Set up environment 💻

First, clone this repo `git clone git@github.com:daniknewgarden/exo-ui.git`

#### Run development 🗡

Install dependencies using `yarn install` <br>
Run development using `yarn start` <br>

#### Run live example 📺

You can run live example app, what can use components from library on the `example` folder. <br>
First change directory using `cd ./example`. <br>
Install dependencies using `yarn install`. <br>
Run development using `yarn start` <br>

#### Run storybook 📕

You can run storybook on the `example` folder. <br>
First change directory using `cd ./example`. <br>
Just run `yarn storybook`. <br>

### Create components 🧩

#### File structure 📁

#### Unit tests 🧪

#### Storybook docs 📕

#### Accessibility checklist ✅

### Commit changes 🌳

Good practice of convenient open source project are clear commits. <br>
To provide it, we could follow some rules and style guide ([more details on this article](https://drbrain.ru/articles/git-commit-message/)). <br>
**Usually the commit should looks like this:** <br>
`<type>(<scope>): <subject>`<br>
I identified the following `types` of commits:

- `feat`: new functionality or components (example: add Button component).
- `fix`: some fixes (example: fix Button on click callback).
- `docs`: docs change (example: add Button docs to storybook).
- `style`: styles change (example: change Button default radius).
- `test`: editing or creating new tests (example: add Button unit tests).
- `build`: changes with build (example: add new package).
- `chore`: changes, that the user may not see (example: change .gitignore).
- `refactor`: changes that aren't new functionality or fixes (example: change variable name).

`scope` is the changed section of the project. For example, it can be directory. <br>
`subject` is the description of your changes. Please, use only lower case letters, don't use dot at the end.

### Links 🔗

<a href="https://join.slack.com/t/exo-design-system/shared_invite/zt-q5j4ylac-OvX2E6DfpWRfezSQU8Qicg">
  <img width="30" style="margin-right: 10px" src="https://raw.githubusercontent.com/daniknewgarden/exo-ui/main/example/screenshots/slack.png"/>
</a>
&nbsp;
<a href="https://miro.com/welcomeonboard/3QDJm6pQfZvGyIghGEV34WYCtpn7D6I1siIRSc0nx80sxOnjqYomgx72YB2B0ya8">
  <img width="30" style="margin-right: 10px" src="https://raw.githubusercontent.com/daniknewgarden/exo-ui/main/example/screenshots/miro.png"/>
</a>
&nbsp;
<a href="https://id.atlassian.com/invite/p/jira-software?id=J-8LzVnYRtOhg70Bk1vxwA">
  <img width="30" style="margin-right: 10px" src="https://raw.githubusercontent.com/daniknewgarden/exo-ui/main/example/screenshots/jira.png"/>
</a>

## License 🔓

MIT © [daniknewgarden](https://github.com/daniknewgarden) <br>
Designed by [Anthony Choren](https://dribbble.com/shots/11967273-EXO-KIT-Design-System 'Anthony Choren Dribbble')
