import ReactDOM from 'react-dom/client'
import { App } from './views/App'
import { spy } from 'mobx'
import { injectStores } from '@mobx-devtools/tools';
import { store } from './store/store';

import './styles/index.scss'

injectStores({store})


spy(event => {
  if (event.type === "action") {
    console.log(event)
  }
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)



