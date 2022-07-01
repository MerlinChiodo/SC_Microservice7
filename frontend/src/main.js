import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

const Fitnessstudio = {
    install(app) {
      app.config.globalProperties.fetch_post = async (headers, body, route) => {
        headers['Content-Type'] = "application/json";
        headers['token'] = 1234;
        const options = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(body)
        };
        return await fetch(route, options)
        .then((response) => {
          if(response.status == 401){
            throw Error("Auth. required");
          }
          return response.json()
        })
        .then((data) => {
            return data;
        })
        .catch(error => {
          return app.loginPrompt(error);
        });
      };
    }
  }

createApp(App)
    .use(router)
    .use(Fitnessstudio)
    .mount('#app')
