<template>
    <v-toolbar color="blue" dark fixed app>
        <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu bottom left>
            <v-btn  slot="activator" dark>
                <v-icon>person</v-icon> {{ user.name }}
            </v-btn>
            <v-list>
                <v-list-tile @click="logout">
                    <v-list-tile-title> Logout </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
    import { mapState } from 'vuex'
    export default {

        computed: {
            ...mapState([
                'user'
            ])
        },
        
        methods: {
            
            toggleDrawer () {
                this.$emit('toggleDrawer')
            },

            logout () 
            {
                this.$auth.destroyToken();
                this.$router.push({ name: 'login' })
            }
            
        }
        
    }
</script>