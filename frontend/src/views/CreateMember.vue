<template>
    <div>
        <form>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Vorname*</span>
                </div>
                <input type="text" class="form-control" id="inputFirstName" placeholder="Vorname*" v-model="firstname">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Nachname*</span>
                </div>
                <input type="text" class="form-control" id="inputLastName" placeholder="Nachname*" v-model="lastname">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Geburtsdatum*</span>
                </div>
                <input type="date" class="form-control" id="inputBirthDate" placeholder="Geburtsdatum*" v-model="birthdate">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputRabatt">Rabatt</label>
                </div>
                <select class="custom-select" id="inputRabatt" v-model="rabatt">
                    <option selected>Wähle Rabatt</option>
                    <option value="1">Flüchtling</option>
                    <option value="2">Stadtbus</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Beleg</span>
                </div>
                <input type="text" class="form-control" id="inputBeleg" placeholder="Beleg" v-model="beleg">
            </div>
            <button type="button" class="btn btn-primary" @click="createMember()">Anmelden</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'CreateMember',
  data() {
    return {
        lastname: null,
        firstname: null,
        tarifID: null
    }
  },
  methods: {
    async createMember() {
        console.log("Klappt");
      let body = {
                lastname: this.lastname,
                firstname: this.firstname,
                tarif: 1
            };
      let data = await this.fetch_post({} , body, '/api/member');
      if(data && !data.errors){
        this.message = "Anfrage erfolgreich gesendet";
        this.error = null;
      }else{
        this.message = null;
        this.error = "Da ist etwas schiefgelaufen";
      }
    },
  }
}
</script>