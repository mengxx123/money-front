<template>
    <div class="page page-mine">
        <header class="page-header">
            <mu-appbar title="统计">
                <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <mu-icon-menu icon="more_vert" slot="right">
                    <mu-menu-item title="菜单 1"/>
                    <mu-menu-item title="菜单 2"/>
                    <mu-menu-item title="菜单 3"/>
                    <mu-menu-item title="菜单 4"/>
                    <mu-menu-item title="菜单 5"/>
                </mu-icon-menu>
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-list>
                <mu-sub-header>最近聊天记录</mu-sub-header>
                <mu-list-item title="Mike Li">
                    <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
                    <mu-icon value="chat_bubble" slot="right"/>
                </mu-list-item>
                <mu-list-item title="Maco Mai">
                    <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
                    <mu-icon value="chat_bubble" slot="right"/>
                </mu-list-item>
                <mu-list-item title="Alex Qin">
                    <mu-avatar src="/images/avatar3.jpg" slot="leftAvatar"/>
                    <mu-icon value="chat_bubble" slot="right"/>
                </mu-list-item>
                <mu-list-item title="Allen Qun">
                    <mu-avatar src="/images/avatar4.jpg" slot="leftAvatar"/>
                    <mu-icon value="chat_bubble" slot="right"/>
                </mu-list-item>
                <mu-list-item title="Myron Liu">
                    <mu-avatar src="/images/uicon.jpg" slot="leftAvatar"/>
                    <mu-icon value="chat_bubble" slot="right"/>
                </mu-list-item>
            </mu-list>
        </main>
        <ui-footer></ui-footer>
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
                items: [],
                groups: []
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
        },
        methods: {
            getData() {
                let items = this.$storage.get('items')
                if (!items) {
                    items = []
                }
                this.items = items
            },
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
