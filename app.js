import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'

import main from './main.js'
import myHeader from './components/myHeader.js'

let app = createApp(main)
app.component(myHeader.name, myHeader)
app.component()
app.component()


app.mount("#app")