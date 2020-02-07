import Home from './components/Home.vue';
import Skills from './components/Skills.vue';
import Blog from './components/Blog.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

import Portfolio from './components/portfolio/index.vue';
import Project from './components/portfolio/projects/Project.vue';

import fourOfour from './components/404.vue';

export const routes =
    [
        { path: '', component: Home },
        {
            path: '/portfolio', component: Portfolio, children: [
                {
                    path: 'projects/:id', component: Project
                }
            ]
        },

        { path: '/skills', component: Skills },
        { path: '/blog', component: Blog },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
        { path: '*', component: fourOfour },



    ]