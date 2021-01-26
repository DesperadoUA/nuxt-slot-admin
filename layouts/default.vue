<template>
  <v-app>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md3>
          <v-card class="elevation-12">
            <v-toolbar dark color="deep-orange darken-2 font_weight_bold">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid" ref="form" validation>
                <v-text-field
                        class="font_weight_bold"
                        prepend-icon="mdi-email"
                        name="email"
                        label="Email"
                        type="email"
                        color="white"
                        v-model="email"
                        :rules="emailRules"
                        @input="writeForm"
                ></v-text-field>
                <v-text-field
                        class="font_weight_bold"
                        prepend-icon="mdi-account-key"
                        name="password"
                        label="Password"
                        type="password"
                        color="white"
                        :counter="6"
                        v-model="password"
                        :rules="passwordRules"
                        @input="writeForm"
                ></v-text-field>
                <span class="ma-1 text-center d-block red--text">{{error}}</span>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                      class="font_weight_bold"
                      color="deep-orange darken-2"
                      @click="onSubmit"
                      :loading="loading"
                      :disabled="!valid || loading"
              >Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
    import DAL_Login from '../DAL/login'
    export default {
        name: "login",
        data(){
            return {
                email: '',
                password: '',
                valid: false,
                emailRules:
                    [
                        v => !!v || 'E-mail is required',
                        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                    ],
                passwordRules:
                    [
                        v => !!v || 'Password is required',
                        v => (v && v.length >= 6) || 'Password length must be more then 6 characters'
                    ]
            }
        },
        computed: {
            loading(){
                //return this.$store.getters.loading
            },
            error(){
                // return this.$store.getters['common/error']
            }
        },
        methods: {
            async onSubmit(){
                if(this.$refs.form.validate()) {

                    const email = this.email
                    const password = this.password
                    const result =  await DAL_Login.checkLogin(email, password)
                    if(result.data.confirm === 'ok') {
                        this.$store.dispatch('user/setUser', {
                            id: result.data.data.id,
                            session: result.data.session,
                            role: result.data.data.role,
                            login: true
                        })
                        this.$router.push('admin')
                    }
                    else {
                        this.$store.dispatch('common/setError', 'Email or Login is wrong')
                    }
                }
            },
            writeForm(){
                this.$store.dispatch('common/clearError')
            }
        },
        created() {
            this.$store.dispatch('common/clearError')
        }
    }
</script>
<style>
  .font_weight_bold {
    font-family: 'Podkova';
    font-weight: 800;
  }
</style>


