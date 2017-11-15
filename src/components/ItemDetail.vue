<template>
    <div class="page page-mine">
        <header class="page-header">
            <mu-appbar title="详情">
                <mu-icon-button icon="arrow_back" slot="left" @click="$router.go(-1)" />

            </mu-appbar>
        </header>
        <main class="page-body">
            <input v-model="item.name" placeholder="名称">
            <input v-model.number="item.money" placeholder="金额">
            <button @click="save">保存</button>
        </main>
        <ui-footer></ui-footer>
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
        data () {
            return {
                item: {},
                open: false,
                docked: true
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                this.$model.getItem(this.$route.params.id).then(item => {
                    this.item = item
                })
            },
            save() {
                this.$model.updateItem(this.item)
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .list {

    }
</style>
