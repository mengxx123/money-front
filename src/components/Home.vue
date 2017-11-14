<template>
    <div class="page page-home">
        <header class="page-header">
            <mu-appbar title="云设记账">
                <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <mu-icon-menu icon="more_vert" slot="right">
                    <mu-menu-item title="菜单 1"/>
                    <mu-menu-item title="菜单 2"/>
                </mu-icon-menu>
            </mu-appbar>
        </header>
        <div class="page-body">
            <mu-list class="list">
                <mu-list-item :title="item.name" v-for="item in items" :key="item.money">
                    ￥{{ item.money }}
                    {{ timeText(item) }}
                    <mu-avatar src="/static/img/demo.png" slot="leftAvatar"/>
                    <mu-icon slot="right" value="delete" @click="remove(item)" />
                </mu-list-item>
            </mu-list>
            <h2>总计：￥{{ total }}</h2>

        </div>
        <ui-footer></ui-footer>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="主页"/>
                <mu-list-item title="统计"/>
                <mu-list-item title="关于" @click="view('/about')"/>
            </mu-list>
        </mu-drawer>
        <mu-float-button icon="add" class="demo-float-button" to="/add"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {

//                total: 0,
                items: [
                    {
                        id: '1',
                        name: '早餐',
                        money: 4,
                        time: 1510327981291
                    },
                    {
                        id: '2',
                        name: '午餐',
                        money: 5,
                        time: 1510327981291
                    },
                    {
                        id: '3',
                        name: '晚餐',
                        money: 6,
                        time: 1510327981291
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
            this.getData()
            // this.total = this.items.concat((total, item) => total += item)
        },
        methods: {
            getData() {
                let items = this.$storage.get('items')
                if (!items) {
                    items = []
                }
                this.items = items
            },
            timeText(item) {
                let now = new Date()
                let date = new Date(item.time)
                if (date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate()) {
                    return '今天'
                }
                return date.getFullYear()
            },
            view(path) {
                this.$router.push(path)
            },
            toggle (flag) {
                this.open = !this.open
                this.docked = !flag
            },
            remove(item) {
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].id === item.id) {
                        this.items.splice(i, 1)
                    }
                }
                this.$storage.set('items', this.items)
            }
        }
    }
</script>

<style scoped>
    .list {

    }
</style>
