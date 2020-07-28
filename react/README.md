# React
- `create-react-app`: create a react starter app
  - `npx create-react-app <app_name>`
  - `npx create-react-app <app_name> --template typescript`
  - `yarn create react-app <app_name>`
  - `yarn create react-app <app_name> --template typescript`
- Imperative (Manual DOM Manipulation) vs Declarative (React)
- Demo1: timer
- Props: Passed as an object to a component and used to compute the returned node
    - Changes in these props will cause a recomputation of the returned node ('render')
    - Unlike in HTML (string), these can be any JS value
- States: Adds internally-managed configuration for a component
    - `this.state` is a class property on the component instance
    - Can only be updated by invoking `this.setState()` 
      - Implemented in React.Component
      - `setState()` calls are batched and run asynchronously
    - Changes in state also cause re-renders

- Functional Compoments vs Class Components
- Demo2: todo
