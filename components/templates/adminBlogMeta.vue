<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                <MM_Input
                    :value = 'data.author'
                    :action = 'action' 
                    :title = '"Author"' 
                    :action_key = '"author"'
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Input from '../lib/MM_Input'
    export default {
        name: "blogMeta",
        props: ['data', 'action'],
        components: {MM_Input},
        data() {
            return {}
        },
    }
</script>