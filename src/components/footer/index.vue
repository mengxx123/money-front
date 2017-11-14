<template>
    <footer class="page-footer">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
            <mu-bottom-nav-item value="home" title="记账" icon="home" @click.native="page('/home')"/>
            <mu-bottom-nav-item value="count" title="统计" icon="event" @click.native="page('/count')"/>
            <mu-bottom-nav-item value="mine" title="我" icon="send" @click.native="page('/mine')"/>
        </mu-bottom-nav>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                bottomNav: 'home'
            }
        },
        mounted() {
            let _this = this
            let paths = ['home', 'count', 'mine']
            for (let path of paths) {
                if (location.href.indexOf(path) !== -1) {
                    console.log(path)
                    _this.bottomNav = path
                }
            }
        },
        methods: {
            page(path) {
                this.$router.push(path)
            },
            handleChange(val) {
                this.bottomNav = val
            }
        }
    }
</script>
