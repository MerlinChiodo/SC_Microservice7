<template>
    <div>
        <form>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">AboutUs*</span>
                </div>
                <input type="text" class="form-control" id="inputLastName" placeholder="Nachname*" v-model="aboutus">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Image-URL</span>
                </div>
                <input type="text" class="form-control" id="inputBeleg" placeholder="Beleg" v-model="imurl">
            </div>
            <button type="button" class="btn btn-primary" @click="postAboutUs()">Anmelden</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'ChangeAboutUs',
  data() {
    return {
        aboutus: null,
        imurl: null,
        url: 'http://supersmartcity.de:9770/'
    }
  },
  methods: {
    async postAboutUs() {
        console.log("Klappt");
      let body = {
                url: this.url,
                aboutus: this.aboutus,
                imurl: this.imurl
            };
      let data = await this.fetch_post({} , body, '/api/updateLandingpage');
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