<template>
    <button @click="onClick">
        <slot></slot>
    </button>
</template>

<script>
import Vue from 'vue';

export default {
    props: {
        onClick: Function,
    },
}
</script>
