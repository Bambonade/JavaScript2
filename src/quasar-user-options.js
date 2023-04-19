// quasar-user-options.js
import { Quasar } from 'quasar'

export default {
    config: {
        brand: {
            primary: '#027be3',
            secondary: '#26a69a',
            accent: '#9C27B0',

            dark: '#1d1d1d',

            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037',
        },
    },
    plugins: {
        Notify: {},
    },
    components: [Quasar],
}
