import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'

import main from './main.js'

let app = createApp(main)
app.component()
app.component()
app.component()


app.mount("#app")