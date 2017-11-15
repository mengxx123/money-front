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
        <main class="page-body">
            <div v-if="!items.length">数据为空</div>
            <h2>本月支出{{ pay }} 本月收入￥{{ income }}</h2>
            <button @click="clear">清空</button>
            <mu-list class="list">
                <mu-list-item :title="item.name" v-for="item in items"
                              @click="viewItem(item)"
                              :key="item.money">
                    ￥{{ item.money }}
                    {{ timeText(item) }}
                    <div v-if="item.type === 'income'">
                        收入
                    </div>
                    <div v-if="item.type === 'pay'">
                        支出（{{ test(item) }}）
                    </div>
                    <mu-avatar src="/static/img/demo.png" slot="leftAvatar"/>
                    <mu-icon slot="right" value="delete" @click="remove(item)" />
                </mu-list-item>
            </mu-list>
        </main>
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
            pay() {
                // 支出
                let total = 0
                for (let item of this.items) {
                    if (item.type === 'pay') {
                        total += item.money
                    }
                }
                return total
            },
            income() {
                // 收入
                let total = 0
                for (let item of this.items) {
                    if (item.type === 'income') {
                        total += item.money
                    }
                }
                return total
            }
        },
        mounted() {
            this.getData()
            // this.total = this.items.concat((total, item) => total += item)
        },
        methods: {
            test(item) {
                let category = this.$model.getCategory(item.category)
                if (category) {
                    return category.name
                }
                return ''
            },
            viewItem(item) {
                this.$router.push('/items/' + item.id)
            },
            getData() {
                this.$model.getMonthItems().then(items => {
                    this.items = items
                    console.log(items)
                })
            },
            timeText(item) {
                let now = new Date()
                let date = new Date(item.time)
                if (date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate()) {
                    return '今天' + date.getDate()
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
            },
            clear() {
                this.items = []
                this.$storage.set('items', this.items)
            }
        }
    }
</script>

<style scoped>
    .list {

    }
</style>
