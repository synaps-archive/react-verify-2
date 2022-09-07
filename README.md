# react-verify

> Synaps ReactJS SDK

[![NPM](https://img.shields.io/npm/v/@synaps-io/react-verify.svg)](https://www.npmjs.com/package/@synaps-io/react-verify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**Synaps is an all-in-one compliance platform**. It offers a simple, fast and secure way to meet compliance requirements at scale.

[Visit Synaps.io](https://synaps.io) | [Read the Synaps documentation](https://docs.synaps.io)

![enter image description here](https://storage.googleapis.com/synaps-docs-media/synaps-verify.png)

## Install

### With npm

```bash
npm install @synaps-io/react-verify
```

### With yarn

```bash
yarn add @synaps-io/react-verify
```

## Import

```tsx
import Synaps from '@synaps-io/react-verify'
```

## Usage

```jsx
import React, { Component } from 'react'

import Synaps from '@synaps-io/react-verify'

class Example extends Component {
  render() {
    return (
      <Synaps
        sessionId={'f3243476-cec44c4a-5565ccd6-e7e9622d'}
        service={'individual'}
        lang={'en'}
        onReady={() => console.log('component ready')}
        onFinish={() => console.log('user finish process')}
        color={{
          primary: '212b39',
          secondary: 'ffffff'
        }}
      />
    )
  }
}
```

### Props list

| Prop name          | Prop type                                                                                           | Default | Required | Description                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------------- | ------- | -------- | ----------------------------------------------------------------------------- |
| `sessionId`        | `string`                                                                                            | `''`    | Y        | Session can be referred as a customer verification session. [More info](https://docs.synaps.io/manager-1/sessions)                                       |
| `service`          | `string`                                                                                            | `''`  | Y        | **individual** - for know your customer **corporate** - for know your business                   |
| `lang`      | `string`                                                                       | `'en'`  | N        | Event listener called on every open/close action                              |
| `tier`      | `int`                                                                       | `null`  | N        | Tier is a simply way to divide your workflow into small pieces. It is very useful when you offer different features based on the verification level of your customer.  [More info](https://docs.synaps.io/manager-1/apps/individual/tiers)                           |
| `color`      | `{primary : string, secondary: string}`                                                                     | `null`  | N        | You can set a primary color and a secondary color, it will create a verification flow tailored to your compliance needs and your brand. |
| `withFinishButton`      | `False`                                                                     | `null`  | N        | This will add a button close at the end of the flow this button will trigger an event finish. |
| `onReady`             | `() => void`                                                                                           | `null` | N        | Event listener called when the page is fully loaded                                       |
| `onFinish`   | `() => void`                                                                                           | `null` | N        | Event listener called when the user finished verification                     |

## Examples

### React 16
[![Edit react16-verify](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react16-verify-gij67k?fontsize=14&hidenavigation=1&theme=dark&view=editor)
### React 18
[![Edit react18-verify](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react18-verify-8hjyiq?fontsize=14&hidenavigation=1&theme=dark)

## License

Apache 2.0 © [Synaps](https://synaps.io)
