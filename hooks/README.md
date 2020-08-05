# React Hooks
- reference: [Why React Hooks?](https://youtu.be/eX_L39UvZes)
- Whenever you're about to learn something new...
  - Why does this thing exist?
  - What problems does this thing solve?

## Historical Context
1. May 29, 2013 - React v0.3.0 JSConf 2013 (first release)
  - firstversion.js
  - `createClass()` API (JS did not a built-in class system)
2. Jan 17, 2015 - ES6 was released, class declarations
3. Jan 27, 2015 - React v0.13.0 Beta 1
  - "We figured taht we're not in the business of designing a class system. We just want to use whatever is the idiomatic javascript way of creating classes." - v0.13.0 release notes
  - Use classes in React

## Trade-offs
1. constructor
```javascript
class App extends React.Component {
  constructor(props) {
    super(props) // 🤮

  }
}
```
2. Autobinding (this)
- `React - uncaught TypeError: Cannot read property 'setState' of undefined`
```javascript
class App extends React.Component {
  constructor(props) {
    super(props) // 🤮
    ...
    this.updateRepos = this.updateRepos.bind(this) // 🤮
  }
}
```

## Improvement
- Class fields 
  - no constructor, no super, no .bind (use arrow functions).
```javascript
class App extends React.Component {
  state = { count: 0 }
}

```
## Still some issues
- There were still more profound but less talked about issues that existed with all of the previous versions that we've seen.
- The whole idea of react is that you're able to manage the complexity of your app by breaking it down into separate components that you can then compose together
- This component model is what makes react so elegant. It's what makes react, react.
- But the problem doesn't necessarily lie in the component model but in how the component is implemented.

1. Duplicate logic - lifecycles
2. Reusing non-visual logic is difficult


## Improvement











