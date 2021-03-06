import login from '../components/projectSections/login/login.vue';
import mainSection from '../components/projectSections/mainSection.vue';
import indexCampaings from '../components/projectSections/campaigns/index.vue';
import createCampaign from '../components/projectSections/campaigns/campaigns/createSection/createCampaign.vue';
import editCampaign from '../components/projectSections/campaigns/campaigns/editSection/editCampaign.vue';
import mainForms from '../components/projectSections/campaigns/forms/mainForms.vue';
import renderSection from '../components/projectSections/campaigns/forms/resultSection/renderSection.vue';
import resultRender from '../components/projectSections/campaigns/forms/resultSection/resultRender.vue';

const routes = [

    {

        path: '/',
        components: {

            loginView: login

        }

    },
    {

        path: '/main',
        components: {
            main: mainSection
        },
        children: [

            {

                path: 'campaigns',
                component: indexCampaings,

            },
            {

                path: 'createCampaign',
                component: createCampaign,

            },
            {

                path: 'editCampaign/:codecampaign',
                component: editCampaign,
                props: true

            },
            {
                path: 'formsCreate/:codecampaign',
                component: mainForms,
                props: true,
            }


        ],

    },
    {

        path: '/render/:codecampaign',
        components: { main: renderSection, },
        props: { main: true }
    },
    {
        path: '/result',
        components: { main: resultRender }

    }
    // {

    //     path: '/campaigns',
    //     component: indexCampaings,

    // },
    // {

    //     path: '/createCampaign',
    //     component: createCampaign,

    // },
    // {

    //     path: '/editCampaign',
    //     component: editCampaign,
    //     props: true

    // },
    // {
    //     path: '/formsCreate',
    //     component: mainForms,
    // }

]

export default routes;