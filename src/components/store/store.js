import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        projects: {
            1: { name: "Edisoft web app", image: "edisoft.png", githubLink: "https://github.com/0usssama/edisoft-web-app", description: 'a web app for my thesis, covered most of the PHP abilities' },
            2: { name: "My portfolio", image: "portfolio.png", githubLink: "https://github.com/0usssama/portfolio", description: 'a small project where i learned using VueJs, vuex, router..etc' },
            3: { name: "HamzaApp", image: "hamzapp.png", githubLink: "https://github.com/0usssama/hamzApp", description: 'My first project with laravel in the backend, vuejs for front end' },
            4: { name: "Evvamode", image: "evvamode.png", githubLink: "https://github.com/0usssama/evvamode", description: 'another side project with vanilla PHP' }
        }
    }
})
