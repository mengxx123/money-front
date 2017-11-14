<template>
    <div class="page page-mine">
        <mu-appbar title="我">
            <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
            <mu-icon-menu icon="more_vert" slot="right">
                <mu-menu-item title="菜单 1"/>
                <mu-menu-item title="菜单 2"/>
                <mu-menu-item title="菜单 3"/>
                <mu-menu-item title="菜单 4"/>
                <mu-menu-item title="菜单 5"/>
            </mu-icon-menu>
        </mu-appbar>
        <main class="page-body">
            <mu-list>
                <mu-list-item title="设置" to="/setting">
                    <mu-icon slot="left" value="settings"/>
                </mu-list-item>
            </mu-list>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: '',
                money: null,
                items: [
                    {
                        name: '早餐',
                        money: 4
                    },
                    {
                        name: '午餐',
                        money: 5
                    },
                    {
                        name: '晚餐',
                        money: 6
                    }
                ],
                open: false,
                docked: true
            }
        },
        computed: {
            total() {
                let total = 0
                for (let item of this.items) {
                    total += item.money
                }
                return total
            }
        },
        mounted() {
            // this.total = this.items.concat((total, item) => total += item)
        },
        methods: {
            toggle (flag) {
                this.open = !this.open
                this.docked = !flag
            },
            add() {
                this.items.push({
                    name: this.name,
                    money: this.money
                })
            }
        }
    }
</script>

<style scoped>
    .list {

    }
</style>
