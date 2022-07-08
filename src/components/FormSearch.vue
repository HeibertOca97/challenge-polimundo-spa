<template>
  <v-form 
    class="mt-4 mb-4 pt-4 pb-4 container--form__search">
    <v-container>

      <h1 class="text-h3 mb-8">BUSCA TU VUELO AL MEJOR PRECIO</h1>

      <v-row>
        <v-col
          cols="12"
          md="3"
          >
          <v-text-field
            class="group--form__input"
            label="Ciudad de origen"
            ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
          >
          <v-text-field
            class="group--form__input"
            label="Ciudad de destino"
            ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
          >
          <v-text-field
            class="group--form__input"
            type="date"
            label="Ida"
            ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
          >
          <v-text-field
            class="group--form__input"
            type="date"
            label="Vuelta"
            ></v-text-field>
        </v-col>
        <v-col 
          cols="12" 
          >
          <v-btn
            color="indigo accent-2"
            class="mt-1 mb-1 w-100"
            @click="searchTickets"
            prepend-icon="mdi-magnify"
            > 
            BUSCAR
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'FormSearch',

  data: () => ({
     
    router: useRouter(),
    alignments: [
      'center',
    ],
  }),

  methods: {
    searchTickets() {
      this.router.push(`/flight-search`)
    }, 
    
  },
}
</script>

<style>
.container--form__search{
  background-color: #426698;  
}

.group--form__input{
    background-color: #fff;
}
</style>
