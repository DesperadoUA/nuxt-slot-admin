<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Rating 
                    :value = 'data.rating'
                    :action = 'action' 
                    :title = '"Rating"' 
                    :action_key = '"rating"'
                />
                <MM_Input
                    :value = 'data.bonus'
                    :action = 'action' 
                    :title = '"Bonus value"' 
                    :action_key = '"bonus"'
                />
                <MM_Input
                    :value = 'data.bonus_wagering'
                    :action = 'action' 
                    :title = '"Bonus wagering"' 
                    :action_key = '"bonus_wagering"'
                />
                <MM_Checkbox 
                    :value = 'data.show_on_main'
                    :action = 'action' 
                    :title = '"Show on main page"' 
                    :action_key = '"show_on_main"'
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Multiple_Input_Text from '../../lib/MM_Multiple_Input_Text'
    import MM_Input from '../../lib/MM_Input'
    import MM_Rating from '../../lib/MM_Rating'
    import MM_Multiple_Input from '../../lib/MM_Multiple_Input'
    import MM_Checkbox from '../../lib/MM_Checkbox'
    export default {
        name: "bonusMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input, MM_Rating, MM_Multiple_Input, MM_Checkbox},
        data() {
            return {}
        },
        mounted(){
            console.log(this.data)
        }
    }
</script>