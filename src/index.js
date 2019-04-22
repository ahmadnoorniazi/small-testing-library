const sum = (a,b) => a + b
const subtract = (a,b) => a - b


const jest = (title,callbk) => {
    try {
        callbk()
        console.log(`✔ ${title}`)

    }
    catch(e){
        console.log(`❌ ${title}`)
        console.error(e)
    }
}

const expect  = (actual) => {
    return {
        toBe(expected){
        if (actual !== expected){
            throw new Error(`${actual} is not equal to ${expected}`)
        }
    },
    toBeGreaterThan(expected){
        if (actual <= expected){
            throw new Error(`${actual} is not greater then from ${expected}`)
        } 
    }
}
}

let result= sum(3,6)

jest('Sum of two numbers should greater then expected  Test', () => {
    expect(sum(result)).toBeGreaterThan(7)
})
jest('Sum of two numbers Test', () => {
    expect(result).toBe(4)
})
