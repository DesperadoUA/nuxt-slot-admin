<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Multiple_Input
                    :value = 'data.ref'
                    :action = 'action' 
                    :title = '"Referal link"' 
                    :action_key = '"ref"'
                    />
                <MM_Input
                    :value = 'data.faq_title'
                    :action = 'action' 
                    :title = '"Faq title"' 
                    :action_key = '"faq_title"'
                    />
                <MM_Multiple_Input_Text 
                    :value = 'data.faq'
                    :action = 'action' 
                    :title = '"Faq"' 
                    :action_key = '"faq"'
                    />
                <MM_Rating 
                    :value = 'data.rating'
                    :action = 'action' 
                    :title = '"Rating"' 
                    :action_key = '"rating"'
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Multiple_Input_Text from '../lib/MM_Multiple_Input_Text'
    import MM_Input from '../lib/MM_Input'
    import MM_Rating from '../lib/MM_Rating'
    import MM_Multiple_Input from '../lib/MM_Multiple_Input'
    export default {
        name: "casinoMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input, MM_Rating, MM_Multiple_Input},
        data() {
            return {}
        },
        mounted(){
            console.log(this.data)
        }
    }
</script>