<template>
    <div class="hello">
        <mu-appbar title="记账">
            <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
            <mu-icon-menu icon="more_vert" slot="right">
                <mu-menu-item title="菜单 1"/>
                <mu-menu-item title="菜单 2"/>
                <mu-menu-item title="菜单 3"/>
                <mu-menu-item title="菜单 4"/>
                <mu-menu-item title="菜单 5"/>
            </mu-icon-menu>
        </mu-appbar>

        <h2>列表</h2>
        <mu-list class="list">
            <mu-list-item :title="item.name" v-for="item in items">
                ￥{{ item.money }}
                {{ timeText(item) }}
                <mu-icon slot="left" value="inbox"/>
                <mu-icon slot="right" value="remove" @click="remove(item)" />
            </mu-list-item>
        </mu-list>
        <h2>总计：￥{{ total }}</h2>
        <input v-model="name">
        <input v-model.number="money">
        <button @click="add">添加</button>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="主页"/>
                <mu-list-item title="统计"/>
                <mu-list-item title="关于" @click="view('/about')"/>
            </mu-list>
        </mu-drawer>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                name: '',
                money: null,
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
            // this.total = this.items.concat((total, item) => total += item)
        },
        methods: {
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
            add() {
                this.items.push({
                    id: '' + new Date().getTime(),
                    name: this.name,
                    money: this.money,
                    time: new Date().getTime()
                })
            },
            remove(item) {
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].id === item.id) {
                        this.items.splice(i, 1)
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .list {

    }
</style>
