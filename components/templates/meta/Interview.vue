<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Input
                    :value = 'data.value'
                    :action = 'action' 
                    :title = '"Value"' 
                    :action_key = '"value"'
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Input from '../../lib/MM_Input'
    export default {
        name: "interviewMeta",
        props: ['data', 'action'],
        components: {MM_Input},
        data() {
            return {}
        },
    }
</script>