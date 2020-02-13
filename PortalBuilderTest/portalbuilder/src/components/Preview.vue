<template>
    <div class="preview-container">
        <div>I am a preview page.</div>
        <button v-on:click="returnToEditor">Back to Editing</button>
        <div>{{this.$store.getters.getTitle}}</div>
        <div>{{this.$store.getters.getSubTitle}}</div>

        <div>{{this.$store.state}}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Preview extends Vue {
    
        returnToEditor(){
            this.$router.replace('/');
        }
    
    }

</script>

<style scoped>
</style>