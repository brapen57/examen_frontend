<template>
  <div>
    <h2>Cálculo de calificaciones</h2>
    <form @submit.prevent="calcular">
      <div>
        <label for="nota1">Nota 1:</label>
        <input type="number" id="nota1" v-model="nota1" min="10" max="70" required>
      </div>
      <div>
        <label for="nota2">Nota 2:</label>
        <input type="number" id="nota2" v-model="nota2" min="10" max="70" required>
      </div>
      <div>
        <label for="nota3">Nota 3:</label>
        <input type="number" id="nota3" v-model="nota3" min="10" max="70" required>
      </div>
      <div>
        <label for="asistencia">Asistencia %:</label>
        <input type="number" id="asistencia" v-model="asistencia" min="0" max="100" required>
      </div>
      <button type="submit">Calcular</button>
    </form>
    <div v-if="mensaje">
      <p>{{ mensaje }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculo',
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      mensaje: '',
    };
  },
  methods: {
    calcular() {
      const n1 = parseFloat(this.nota1);
      const n2 = parseFloat(this.nota2);
      const n3 = parseFloat(this.nota3);
      const asistencia = parseFloat(this.asistencia);

      if (n1 < 10 || n1 > 70 || n2 < 10 || n2 > 70 || n3 < 10 || n3 > 70 || asistencia < 0 || asistencia > 100) {
        this.mensaje = 'Por favor, ingrese valores válidos.';
        return;
      }

      const promedioPonderado = (n1 * 0.35) + (n2 * 0.35) + (n3 * 0.30);

      if (promedioPonderado >= 40 && asistencia >= 80) {
        this.mensaje = `Aprobado con un promedio de ${promedioPonderado.toFixed(2)} y una asistencia de ${asistencia}%`;
      } else {
        this.mensaje = `Reprobado con un promedio de ${promedioPonderado.toFixed(2)} y una asistencia de ${asistencia}%`;
      }
    },
  },
};
</script>

<style scoped>
form div {
  margin-bottom: 1rem;
}

label {
  margin-right: 0.5rem;
  color: blue;
  font-weight: bold;
}

button {
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: blue;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: darkblue;
}
</style>