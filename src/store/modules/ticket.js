//precio, aerolínea, número de escalas, duración del vuelo.
const tickets = [
  {
    id: 1,
    precio: 101.37,
    aerolinea: 'Latam',
    escala: {
      cant: 1,
      precio: 171.71
    },
    horarios: [
      {
        horas: '08:00 - 09:00',
        duracion: '01:00'
      },
      {
        horas: '12:00 - 13:00',
        duracion: '01:00'
      }
    ]
  },
  {
    id: 1,
    precio: 229.52,
    aerolinea: 'Avianca',
    escala: {
      cant: 1,
      precio: 100.54
    },
    horarios: [
      {
        horas: '08:00 - 09:00',
        duracion: '01:00'
      },
      {
        horas: '12:00 - 13:00',
        duracion: '01:00'
      }
    ]
  },
];
// Avianca
export default {
  state: () => ({
    tickets
  }),
  mutations: {},
  actions: {},
  getters: {
    getAll(state){
      return state.tickets;
    }
  }
}
