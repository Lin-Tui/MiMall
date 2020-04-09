<template>
    <div>
        <order-header v-bind:title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <router-view></router-view>
        <ServiceBar></ServiceBar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader';
import ServiceBar from './../components/ServiceBar';
import NavFooter from './../components/NavFooter';
export default {
    name: 'order',
    components: {
        OrderHeader,
        NavFooter,
        ServiceBar
    },
    data() {
        return {
            title: '',
            tip: ''
        }
    },
    mounted() {
}
}
</script>