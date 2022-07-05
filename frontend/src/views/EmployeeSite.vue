<template>
    <div>
        <router-link to="/ChangeAboutUs" custom v-slot="{ navigate }">
          <button @click="navigate" @keypress.enter="navigate" role="link">Landingpage-Eintrag bearbeiten</button>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'EmployeeSite'
}
</script>