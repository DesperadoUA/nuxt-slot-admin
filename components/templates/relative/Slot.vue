<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
            <MM_Relative_Posts 
                    :value = 'data.category'
                    :action = 'action' 
                    :title = '"Relative category"' 
                    :action_key = '"category"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.slot_casino'
                    :action = 'action' 
                    :title = '"Relative casino"' 
                    :action_key = '"slot_casino"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.slot_vendor'
                    :action = 'action' 
                    :title = '"Relative vendor"' 
                    :action_key = '"slot_vendor"'
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Relative_Posts from '../../../components/lib/MM_Relative_Posts'
    export default {
        name: "slotCategory",
        props: ['data', 'action'],
        components: {MM_Relative_Posts},
        data() {
            return {}
        }
    }
</script>