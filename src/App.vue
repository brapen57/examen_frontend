<template>
    <div id="app">
      <nav>
        <router-link to="/">Cálculo de calificaciones</router-link>
        <router-link to="/registro">Formulario de registro</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style>
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f4;
}

nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

nav a {
  text-decoration: none;
  color: blue;
  font-weight: bold;
}

#app {
  text-align: center;
}

h2 {
  color: blue;
  font-weight: bold;
}

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