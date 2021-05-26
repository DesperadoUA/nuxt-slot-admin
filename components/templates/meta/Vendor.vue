<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
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
                <MM_Image v-if = 'data' 
                    :value = 'data.icon' 
                    :title = '"Icon"'
                    :action = 'action'
                    :action_key = '"icon"' />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Multiple_Input_Text from '../../lib/MM_Multiple_Input_Text'
    import MM_Input from '../../lib/MM_Input'
    export default {
        name: "vendorMeta",
        props: ['data', 'action'],
        components: {MM_Multiple_Input_Text, MM_Input},
        data() {
            return {}
        },
    }
</script>