<template>
<div>
    <Button :onClick="onClick">Click Me!</Button>
    <p v-if="flag">You clicked button.</p>
</div>
</template>

<script>
import Vue from 'vue';
import Button from '../components/common/Button';

export default {
    components: {
        Button
    },

    data: () => ({
        flag: false
    }),

    methods: {
        onClick () {
            this.flag = true;
        }
    }
}
</script>
