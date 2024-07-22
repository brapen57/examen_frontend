<template>
  <div>
    <h2>Formulario de Registro</h2>
    <form @submit.prevent="registrar">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div>
        <label for="correo">Correo:</label>
        <input type="email" id="correo" v-model="correo" required>
      </div>
      <div>
        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" v-model="contrasena" required>
      </div>
      <div>
        <label for="repetirContrasena">Repetir Contraseña:</label>
        <input type="password" id="repetirContrasena" v-model="repetirContrasena" required>
      </div>
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Registro',
  data() {
    return {
      nombre: '',
      correo: '',
      contrasena: '',
      repetirContrasena: '',
    };
  },
  methods: {
    registrar() {
      if (this.contrasena !== this.repetirContrasena) {
        alert('Las contraseñas no coinciden.');
        return;
      }

      if (!this.validarCorreo(this.correo)) {
        alert('El formato del correo es incorrecto.');
        return;
      }

      alert('El registro se ha realizado correctamente.');
    },
    validarCorreo(correo) {
      const re = /\S+@\S+\.\S+/;
      return re.test(correo);
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