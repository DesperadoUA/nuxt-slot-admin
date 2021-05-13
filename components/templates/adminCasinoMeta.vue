<template>
    <v-container>
        <v-row>
            <v-col class="mt-0">
                Casino Meta
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import MM_Relative_Posts from '../../components/lib/MM_Relative_Posts'
    export default {
        name: "casinoMeta",
        props: ['data', 'action'],
        components: {MM_Relative_Posts},
        data() {
            return {}
        }
    }
</script>