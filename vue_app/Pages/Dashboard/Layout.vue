<template>
    <v-app id="inspire">
        <drawer :drawer="drawer" />
        <toolbar @toggleDrawer="toggleDrawer"/>
        <v-content>
            <v-container >
                <router-view></router-view>
            </v-container>
        </v-content>
        <footerPage />
    </v-app>
</template>

<script>
    import drawer from './Partials/Drawer'
    import toolbar from './Partials/Toolbar'
    import footerPage from './Partials/Footer'

    import { mapMutations } from 'vuex'

    export default {
        components: { drawer, toolbar, footerPage },

        data: () => ({
            drawer: true
        }),

        mounted () 
        {
            this.getUserInfo()
        },

        methods: {

            ...mapMutations([
                'SET_USER'
            ]),

            getUserInfo () 
            {
                let headers = { 'Authorization': this.$auth.getToken() }
                this.$http.get(`${window.basePath}/auth/user`, {headers})
                    .then(response => {
                        this.SET_USER(response.data)
                    })
                    .catch(err => {
                        alert('Error on get user data')
                    })
            },

            toggleDrawer () {
                this.drawer = !this.drawer
            }

        }
    }
</script>