class ArrayUtil {

    add(arr, item) {
        let newArr = [...arr]
        newArr.push(item)
        return newArr
    }

    remove(arr, item) {
        let newArr = [...arr]
        newArr.splice(newArr.findIndex(obj => obj === item), 1)

        return newArr;
    }

    replace(arr, index, newItem) {
        let newArr = [...arr]
        newArr[index] = newItem
        return newArr
    }

}

export default new ArrayUtil()