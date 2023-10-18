import './App.css'
import { useRef } from 'react'

function App() {
  const ref = useRef(null)

  const handleClick = (index) => {
    const listNode = ref.current

    const imageNode = listNode.querySelectorAll('li > img')[index]
    imageNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  return (<>
    <nav className='navigation'>
      <button onClick={() => handleClick(0)}>Tom</button>
      <button onClick={() => handleClick(1)}>Maru</button>
      <button onClick={() => handleClick(2)}>Jellylorum</button>
    </nav>
    <ul className='image-list' ref={ref}>
      <li>
        <img src="https://placekitten.com/g/200/200" alt="Tom"/>
      </li>
      <li>
        <img src="https://placekitten.com/g/400/200" alt="Maru"/>
      </li>
      <li>
        <img src="https://placekitten.com/g/250/200" alt="Jellylorum"/>
      </li>
    </ul>
  </>)
}

export default App
