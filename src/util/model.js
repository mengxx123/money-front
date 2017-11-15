import storage from '@/util/storage'

let model = {
    getMonthItems() {
        return new Promise((resolve, reject) => {
            let items = storage.get('items')
            if (!items) {
                items = []
            }
            items = items.filter(item => {
                let now = new Date()
                let time = new Date(item.time)
                return time.getFullYear() === now.getFullYear() && time.getMonth() === now.getMonth()
            })
            items = items.sort((item1, item2) => {
                return item2.time - item1.time
            })
            resolve(items)
        })
    },
    getItems() {
        return new Promise((resolve, reject) => {
            let items = storage.get('items')
            if (!items) {
                items = []
            }
            items.sort((item1, item2) => {
                return item2.time - item1.time
            })
            resolve(items)
        })
    },
    getItem(id) {
        return new Promise((resolve, reject) => {
            let items = storage.get('items')
            if (!items) {
                items = []
            }
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    resolve(items[i])
                    break
                }
            }
        })
    },
    addItem(item) {
        return new Promise((resolve, reject) => {
            let items = storage.get('items')
            if (!items) {
                items = []
            }
            items.push(item)
            storage.set('items', items)
            resolve()
        })
    },
    updateItem(item) {
        console.log('更新', item)
        return new Promise((resolve, reject) => {
            let items = storage.get('items')
            if (!items) {
                items = []
            }
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    items.splice(i, 1)
                    items.push(item)
                }
            }
            storage.set('items', items)
            resolve()
        })
    },
    getCategories() {
        let arr = [
            {
                id: '1',
                name: '职业收入',
                children: [
                    {
                        id: '3',
                        name: '工资收入'
                    },
                    {
                        id: '4',
                        name: '加班收入'
                    }
                ]
            },
            {
                id: '2',
                name: '其他收入',
                children: [
                    {
                        id: '5',
                        name: '捡到的'
                    }
                ]
            }
        ]
        return arr
        // return new Promise((resolve, reject) => {
        //     resolve(arr)
        // })
    },
    getCategory(id) {
        let categories = this.getCategories()
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].id === id) {
                return categories[i]
            }
        }
        return null
    }
}

export default model
