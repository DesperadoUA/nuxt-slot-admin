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
                <MM_Checkbox 
                    :value = 'data.regular_offers'
                    :action = 'action' 
                    :title = '"Regular offers"' 
                    :action_key = '"regular_offers"'
                />
                <MM_Checkbox 
                    :value = 'data.live_chat'
                    :action = 'action' 
                    :title = '"Live chat"' 
                    :action_key = '"live_chat"'
                />
                <MM_Checkbox 
                    :value = 'data.live_casino'
                    :action = 'action' 
                    :title = '"Live casino"' 
                    :action_key = '"live_casino"'
                />
                <MM_Checkbox 
                    :value = 'data.vip_program'
                    :action = 'action' 
                    :title = '"Vip program"' 
                    :action_key = '"vip_program"'
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
                <MM_Input
                    :value = 'data.freespins'
                    :action = 'action' 
                    :title = '"Freespins"' 
                    :action_key = '"freespins"'
                />
                <MM_Input
                    :value = 'data.freespins_wagering'
                    :action = 'action' 
                    :title = '"Freespins wagering"' 
                    :action_key = '"freespins_wagering"'
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
    import MM_Checkbox from '../lib/MM_Checkbox'
    export default {
        name: "casinoMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input, MM_Rating, MM_Multiple_Input, MM_Checkbox},
        data() {
            return {}
        }
    }
</script>