<template>
<div id="root">
    <p>Hello World!</p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view />
</div>
</template>

<script>
import Vue from 'vue';

export default {
}
</script>
