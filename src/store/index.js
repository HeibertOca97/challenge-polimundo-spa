import { createStore } from 'vuex'
import ticket from './modules/ticket'

const store = createStore({
  modules: {
    ticket
  }
});

export default store
