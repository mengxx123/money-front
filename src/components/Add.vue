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
        <mu-icon slot="left" value="inbox"/>
        <mu-icon slot="right" value="inbox"/>
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
