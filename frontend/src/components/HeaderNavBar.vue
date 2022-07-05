<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Fitnessstudio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/CreateMember"> Anmeldung </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Mitgliedschaft verwalten</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Kurse buchen</a>
          </li>
        </ul>
        <form class="d-flex">
            <router-link to="/EmployeeSite" custom v-slot="{ navigate }">
              <button @click="navigate" @keypress.enter="navigate" role="link">Mitarbeiterbereich</button>
            </router-link>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown dropdown-menu-right" role="button" data-bs-toggle="dropdown" aria-expanded="true">
              <img src="../assets/logIn.jpg" alt="TTT" width="50" height="50">
            </a>
            <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <input class="form-control me-2" type="search" placeholder="Nutzername" aria-label="Search">
              <input class="form-control me-2" type="search" placeholder="Passwort" aria-label="Search">
              <li><hr class="dropdown-divider"></li>
              <button class="btn btn-outline-success" type="submit">Log In</button>
            </ul>
          </li>
        </form>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'HeaderNavBar'
}
</script>