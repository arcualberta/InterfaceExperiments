<template>
    <div class="home">
        <input @input="updateTitle" placeholder="Title"></input>
        <input @input="updateSubTitle" placeholder="Sub Title"></input>
        <p>Homescreen, need to add components for the bits here!</p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
        //@Prop() private msg!: string;

        //TODO change to a swtich statement for title and subtitle use later
        updateTitle(event:any) {
            this.$store.commit('updateTitle', event.target.value);
        }

        updateSubTitle(event: any) {
            this.$store.commit('updateSubTitle', event.target.value);
        }
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .home{
        display:flex;
        flex-direction:column;
    }

</style>
