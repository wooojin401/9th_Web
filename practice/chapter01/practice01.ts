// string 성공 , 실패 실습
// const str: string=123;
// const myname : string ="표표";

// number 성공, 실패 실습
// const age : number = "24";
// const age : number =24;

// boolean 성공, 실패 실습 
// const boolean : "표표" =true;
//const 표표: boolean=true;

//null의 사용법 성공, 실패

// const username: string=null;

// let username:string | null=null;

//undefined 사용법, 성공, 실패
// let age :number = undefined;
// let age : number | undefined;

//symbol 사용법 성공, 실패
// const sym1 : symbol = Symbol("표표");
// const id : symbol = Symbol("id");

// const myname : symbol = "표표";

//bigint 사용법 성공, 실패

// const a : bigint=123n;
// const b : bigint = BigInt(51351);

// const c : bigint =123;
// const d : const x=100n+20;

//object 성공 실패
// const obj1:object={name: "표표" , age : 24};
// const obj2:object=()=>console.log("hello world");

// const obj3: object =123;
// const obj4 : object= "hello";

//타입스크립트에만 존재하는 타입

//any
// let value: any =123;
// value="표표";
// value="true";
//전부가능

//unknown

// let value : unknown ="hello";

// console.log(value.toUpperCase());
// if(typeof value==="string"){
//     console.log(value.toUpperCase());
// }

// //void
// function myname(mn:string):void{
// 	console.log(mn);
// }

// //never
// function thorwError(message: string):never{
// 	throw new Error(message);
// }

// function infiniteLoop(): never{
// 	while(true){}
// }
