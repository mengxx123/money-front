<template>
    <div class="page">
        <header class="page-header">
            <mu-appbar title="添加一笔账">
                <mu-icon-button icon="close" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <input v-model="name">
            <input v-model.number="money">
            <button @click="add">添加</button>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                name: '',
                money: null,
                items: []
            }
        },
        methods: {
            add() {
                let items = this.$storage.get('items')
                if (!items) {
                    items = []
                }
                this.items = items
                this.items.push({
                    id: '' + new Date().getTime(),
                    name: this.name,
                    money: this.money,
                    time: new Date().getTime()
                })
                this.$storage.set('items', this.items)
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .list {

    }
</style>
