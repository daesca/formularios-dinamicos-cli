import login from '../components/projectSections/login/login.vue';
import mainSection from '../components/projectSections/mainSection.vue';
import indexCampaings from '../components/projectSections/campaigns/index.vue';
import createCampaign from '../components/projectSections/campaigns/campaigns/createSection/createCampaign.vue';
import editCampaign from '../components/projectSections/campaigns/campaigns/editSection/editCampaign.vue';
import mainForms from '../components/projectSections/campaigns/forms/mainForms.vue';

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

                path: 'editCampaign/:keyarray',
                component: editCampaign,
                props: true

            },
            {
                path: 'formsCreate/:idcampaign',
                component: mainForms,
                props: true,
            }




        ],


    },
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