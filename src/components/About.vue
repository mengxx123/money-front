<template>
    <div class="hello">
        <header class="page-header">
            <mu-appbar title="关于">
                <mu-icon-button icon="arrow_back" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>


        <h2>关于</h2>
        <div>记账软件1.0</div>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="主页"/>
                <mu-list-item title="统计"/>
                <mu-list-item title="关于"/>
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
