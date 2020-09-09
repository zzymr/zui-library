<template>
    <div>
        <button @click="add">{{ num }}</button>
    </div>
</template>

<script>
    export default {
        name: "ZTest", // 这个名字很重要，它就是未来的标签名<z-test></z-test>
        data() {
            return {
            num: 1
            };
        },
        methods: {
            add() {
              this.num++;
            }
        }
    }
</script>

<style scoped>

</style>