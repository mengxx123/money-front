<template>
    <div class="page">
        <header class="page-header">
            <mu-appbar title="设置">
                <mu-icon-button icon="arrow_back" slot="left" @click="$router.go(-1)" />
            </mu-appbar>
        </header>
        <main class="page-body">
            <mu-list>
                <mu-list-item disabled title="通知与信息设置" describeText="总是中断"/>
            </mu-list>
            <mu-divider />
            <mu-list>
                <mu-sub-header>声音开启设置</mu-sub-header>
                <mu-list-item disableRipple @click="handleToggle('events')" title="导出">
                </mu-list-item>
                <mu-list-item disableRipple @click="handleToggle('events')" title="事件和提醒">
                    <mu-switch v-model="events"  slot="right"/>
                </mu-list-item>
                <mu-list-item disableRipple @click="handleToggle('calls')" title="电话">
                    <mu-switch v-model="calls" slot="right"/>
                </mu-list-item>
                <mu-list-item disableRipple @click="handleToggle('messages')" title="信息">
                    <mu-switch v-model="messages" slot="right"/>
                </mu-list-item>
            </mu-list>
            <mu-list>
                <mu-sub-header>通知设置</mu-sub-header>
                <mu-list-item disableRipple @click="handleToggle('notifications')"  title="通知">
                    <mu-checkbox v-model="notifications" slot="left"/>
                </mu-list-item>
                <mu-list-item disableRipple @click="handleToggle('sounds')"  title="声音">
                    <mu-checkbox v-model="sounds" slot="left"/>
                </mu-list-item>
                <mu-list-item disableRipple @click="handleToggle('videoSounds')" title="视频的声音">
                    <mu-checkbox v-model="videoSounds" slot="left"/>
                </mu-list-item>
            </mu-list>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                events: false,
                calls: false,
                messages: false,
                notifications: false,
                sounds: false,
                videoSounds: false
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
            handleToggle (key) {
                this[key] = !this[key]
            }
        }
    }
</script>

<style scoped>
    .list {

    }
</style>
