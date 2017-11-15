<template>
    <div class="page">
        <header class="page-header">
            <mu-appbar title="添加一笔账">
                <mu-icon-button icon="close" slot="left" @click="$router.go(-1)" />
                <mu-icon-button icon="check" slot="right" @click="finish" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab value="tab1" title="支出"/>
                <mu-tab value="tab2" title="收入"/>
                <mu-tab value="tab3" @active="handleActive" title="转账"/>
            </mu-tabs>
            <div v-if="activeTab === 'tab1'">
                <input v-model="name" placeholder="名称">
                <input v-model.number="money" placeholder="金额">
                时间：
                <mu-date-picker v-model="selectDate" hintText="竖屏模式选择"/>
                <button @click="add">添加</button>
            </div>
            <div v-if="activeTab === 'tab2'">
                <input v-model="name2" placeholder="名称">
                <input v-model.number="money2" placeholder="金额">
                <div v-for="cate in incomeCategories">
                    <h2>{{ cate.name }}</h2>
                    <div>
                        <div v-for="cat in cate.children">
                            <div @click="selectCategory(cat)">* {{ cat.name }}
                                <div v-if="cat.id === category">（已选）</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="add2">添加</button>
            </div>
            <div v-if="activeTab === 'tab3'">
                <h2>Tab Three</h2>
                <p>
                    这是第三个 tab
                </p>
            </div>
        </main>
        <mu-toast v-if="toastVisible" message="一段简单的文本" @close="hideToast"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: '',
                money: null,
                selectDate: '',
                category: '',
                items: [],
                activeTab: 'tab1',
                incomeCategories: [],
                name2: '',
                money2: null,
                toastVisible: false
            }
        },
        mounted() {
            let date = new Date()
            this.selectDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
            this.incomeCategories = this.$model.getCategories()
            this.category = this.incomeCategories[0].children[0].id
        },
        methods: {
            selectCategory(cat) {
                this.category = cat.id
                console.log(this.category)
            },
            finish() {
            },
            handleTabChange (val) {
                this.activeTab = val
            },
            handleActive () {
//                window.alert('tab active')
            },
            add() {
                if (!this.name) {
                    return
                }
                console.log(this.selectDate)
                this.$model.addItem({
                    id: '' + new Date().getTime(),
                    type: 'pay',
                    name: this.name,
                    money: this.money,
                    time: new Date().getTime()
                })
                this.$router.go(-1)
            },
            add2() {
                this.$model.addItem({
                    id: '' + new Date().getTime(),
                    type: 'pay',
                    name: this.name2,
                    money: this.money2,
                    category: this.category,
                    time: new Date().getTime()
                })
                this.$router.go(-1)
//
//                let items = this.$storage.get('items')
//                if (!items) {
//                    items = []
//                }
//                this.items = items
//                this.items.push({
//                    id: '' + new Date().getTime(),
//                    type: 'income',
//                    name: this.name2,
//                    money: this.money2,
//                    time: new Date().getTime()
//                })
//                this.$storage.set('items', this.items)
//                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .list {

    }
</style>
