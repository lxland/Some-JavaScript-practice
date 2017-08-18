// "use strict";

// 在严格模式下，若不提前声明a变量，报错提示not defined；若声明，打印出undefined。这里eval()不起作用。
// 在非严格模式下，打印出值为2。
// var a;

// function foo2(str2){
//     eval( str2 );
//     console.log(a);
// }
// foo2( "var a = 2" );

// ------------------------------

// var reg = /^([1-9][5-9]|[6-9])$/;
// var reg2 = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/;
// var str = "99";

// if( reg.test(str) ){
// 	console.log('y');
// } else {
// 	console.log('no');
// }

// console.log("JavaScript".search(/a(.)a/));


// -----------not defined   和   undefined  区别--------------------

// console.log(a);
// var foo;
// console.log(foo);

// console.log(foo);
// var foo;
// console.log(foo);   

// ----------- 闭包  P49 -----------
// 会以每秒一次的频率输出五次6，因为条件首次成立时 i 的值是6。因此，输出显示的是循环结束时 i 的最终值。
// for ( var i=0; i<=5; i++ ){
//     setTimeout (function timer(){
//         console.log( i );
//     }, i*1000 )
// }

// for ( var i=0; i<=5; i++ ){
//     (function( j ){
//         setTimeout(function timer(){
//             console.log( j );
//         },j*1000)
//     })( i )
// }

/*        function foo(){
    var c = 2;

    function bar (){
        console.log( c );
    }

    return bar;
}

var baz = foo();

baz();*/


// function foo (){
//     var c = 2;

//     function baz (){
//         console.log( c );
//     }

//     bar ( baz );
// }

// function bar ( fn ){
//     fn();  //这就是闭包
// }

// foo();


// function foo (){
//     var m = 0;

//     return function(){
//         console.log( ++m );
//     };
// }

// var foo2 = foo();

// foo2();
// foo2();


// IIFE (立即执行函数)
// (function(){
//     console.log('立即执行行数写法1');
// }())

// (function(){
//     console.log('立即执行行数写法2');
// })()


// var n = (function(){ return 10; }());

// sayTruth();
// // 函数声明
// console.log('1');
// function sayTruth(){
//     console.log('myvin is handsome.');
// }



// 函数表达式
// var sayTruth=function(){
//     console.log('myvin is handsome.');
// }
// console.log('1');
// sayTruth();


  // const cards = Array(62).fill().map((_,i)=>i+1); //初始化一个 1~62 的数组

// function draw(n = 1){ // 一次抽取 n 个，默认一次 1 个
//     var ret = [];
//     for(var i = 0; i < n; i++){
//         let idx = Math.floor(cards.length * Math.random());
//         ret.push(...cards.splice(idx, 1));
//     }
//     return ret;
// }
// console.log(draw(10)); //抽取一次，10个中奖者  




// var num = [1,3,5,9,10,222];

// var nums = num.map(Math.sqrt);

// console.log(nums,num);

// 


// function foo(){
//     console.log( this.a );
// }

// var a = 2;
// var o = { a : 3, foo : foo };
// var p = { a: 4 };


// o.foo();
// (p.foo = o.foo)();


document.getElementById('repeat').innerHTML = 'HELLO '.repeat(3);