import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

interface AppProps {
  initialCount: number
}

const App = (props: AppProps) => {
  // 'functional component'
  // function App takes some props returns some jsx
  return <Counter initialCount={props.initialCount} />
}

ReactDOM.render(<App initialCount={10} />, document.querySelector('#root'))

/* let count = 0 */
/* setInterval( */
/*   () => */
/*     ReactDOM.render(<App count={count++} />, document.querySelector('#root')), */
/*   1000, */
/* ) */
