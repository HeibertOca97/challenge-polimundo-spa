<template>
  <v-container 
    class="mt-5 mb-5 border"
    v-for="(ticket, index) in $store.getters.getAll"
    :key="index"
    >
    <div class="d-flex flex-column align-center text-center">
      <p>Precio Final Ida y Vuelta</p> 
      <p class="text-h4">$ {{ ticket.precio }}</p>
      <v-btn class="w-50 m-auto" variant="outlined">Seleccionar</v-btn>
    </div>
    <div>
    <p class="text-h6 primary">IDA</p> <span>lun 11 de julio</span>
    </div>
    <v-table>
      <thead> 
        <tr>
          <th class="text-left">
            Aerolinea
          </th>
          <th class="text-left">
            Horario
          </th>
          <th class="text-left">
            Escala
          </th>
          <th class="text-left">
            Duracion
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(horario, index2) in ticket.horarios"
          :key="index2"
          >
          <td>{{ ticket.aerolinea }}</td>
          <td>{{ horario.horas }}</td>
          <td>{{ ticket.escala.cant }} escala</td>
          <td>Duración: {{ horario.duracion }}</td>
        </tr>
      </tbody>
    </v-table>
    <div>
      <p class="text-h6">Vuelta</p> <span>lun 15 de julio</span>
    </div>
    <v-table>
      <thead> 
        <tr>
          <th class="text-left">
            Aerolinea
          </th>
          <th class="text-left">
            Horario
          </th>
          <th class="text-left">
            Escala
          </th>
          <th class="text-left">
            Duracion
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(horario, index2) in ticket.horarios"
          :key="index2"
          >
          <td>{{ ticket.aerolinea }}</td>
          <td>{{ horario.horas }}</td>
          <td>{{ ticket.escala.cant }} escala</td>
          <td>Duración: {{ horario.duracion }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container> 

</template>

