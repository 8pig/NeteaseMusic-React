// async function async1() {
//     console.log('async1 start') // 2
//     await async2();
//     console.log('async1 end') // 6
// }
// async function async2(){
//     console.log('async2') //  3
// }
// console.log('script start') // 1
// setTimeout(function(){
//     console.log('setTimeout') // 8
// },0)
// async1()
// new Promise(function(resolve){
//     console.log('promise1') // 4
//     resolve()
// }).then(function(){
//     console.log('promise2') // 7
// })
// console.log('script end') // 5

let arr =[
    {
        id: 1,
        title: "课程1",
        children: [
            { id: 4, title: "课程1-1" },
            {
                id: 5,
                title: "课程1-2",
                children: [
                    { id: 6, title: "课程1-2-1" },
                    { id: 7, title: "课程1-2-2" },
                ],
            },
        ],
    },
    { id: 2, title: "课程2" },
    { id: 3, title: "课程3" },
];
let arr1 = {}
function tiled (arr) {
    if(!Object.prototype.toString.call(arr).includes('Array')){
        return []
    }

    return arr.map(item => {
        if(item.children && item.children.length) {
            return tiled([...item.children, {id: item.id,title: item.title}])
        }
        return {id: item.id || '', title: item.title || ''}
    }).flat(Infinity)
}

console.log(tiled(arr1))
