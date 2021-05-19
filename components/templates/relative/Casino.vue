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
                    :value = 'data.casino_vendor'
                    :action = 'action' 
                    :title = '"Relative vendor"' 
                    :action_key = '"casino_vendor"'
                    />
            <MM_Relative_Posts 
                    :value = 'data.casino_payment'
                    :action = 'action' 
                    :title = '"Relative payment"' 
                    :action_key = '"casino_payment"'
                    />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Relative_Posts from '../../../components/lib/MM_Relative_Posts'
    export default {
        name: "casinoCategory",
        props: ['data', 'action'],
        components: {MM_Relative_Posts},
        data() {
            return {}
        }
    }
</script>