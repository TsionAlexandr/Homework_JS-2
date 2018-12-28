// Чему равно а, почему?

let a = 0 || 'string';
// false ||  true     // f || 'string' вернёт 'string'

let a = 1 && 'string';
// true  || true       // 1 || 'string' вернёт 'string'

let a = null || 25;
// false || true     // f || 25 вернёт 25

let a = null && 25;
// false && true      // f && 25 вернёт null

let a = null || 0 || 35;
// false || false || true    // f || f || 35  вернёт 35 
      
let a = null && 0 && 35
// false && false &&  true    // f && f &&  вернёт null



// Что отобразится в консоли. Почему?

12 + 14 + '12' 
//    "2612"
3 + 2 - '1'
//  4
'3' + 2 - 1
//  31
true + 2
//  3
+'10' + 1
//  11
undefined + 2
// NaN
null + 5
// 5
true + undefined
// NaN

