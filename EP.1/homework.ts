var x = 5   //ประกาศตัวแปร x ด้วย var และเก็บค่า 5 ไว้ในตัวแปร x
let y = 10  //ประกาศตัวแปร y ด้วย let และเก็บค่า 10 ไว้ในตัวแปร y
const z = 20 //ประกาศตัวแปร z ด้วย const ที่มีค่าเป็นค่าคงที่ และเก็บค่า 20 ไว้ในตัวแปร z 

const goHome: boolead = True
const i_want_to_go_home: boolead = True
const IWantToGoHome: boolead = True

/*
camel case
goHome
สไตล์การตั้งชื่อตัวแปร แบบการเขียนตัวแรกของคำแรกเป็นพิมพ์เล็ก หลังจากนั้นตัวแรกของทุกคำที่เหลือเป็นพิมพ์ใหญ่

snake case 
i_want_to_go_home
สไตล์การตั้งชื่อตัวแปร แบบการเขียนทุกคำของตัวแปรเป็นพิมพ์เล็ก แค่ใช้เครื่องหมาย '_' มาคั้นระหว่างคำ

pascal case
IWantToGoHome
สไตล์การตั้งชื่อตัวแปร แบบการเขียนตัวแรกของทุกคำในชื่อตัวแปรเป็นพิมพ์ใหญ่
*/


var x: number = 5 //ประกาศตัวแปร x ด้วย var เก็บค่าตัวเลข (number) และเก็บค่า 5 ไว้้ในตัวแปร x
let y: string = 'Ten' //ประกาศตัวแปร y ด้วย let เก็บค่า string และเก็บ Ten ไว้ในตัวแปร y
let isPerson: boolean = True //ประกาศตัวแปล isPerson ด้วย let เก็บค่า boolean (ค่าความจริง เก็บได้แค่ True/False)
const nickName: string = 'Nus' //ประกาศตัวแปร nickName ด้วย const ที่มีค่าเป็นค่าคงที่ เก็บค่า string และเก็บ Nus ไว้ในตัวแปร nickName (ค่านี้จะไม่เปลี่ยนแปลง)

/*
=== เท่ากับ
< น้อยกว่า
> มากกว่า
!== ไม่เท่ากับ
<= น้อยกว่าหรือเท่ากับ
>= มากกว่าหรือเท่ากับ
*/

const a: number = 10 //ประกาศตัวแปร a เป็นค่าคงที่ และให้เก็บเลข 10
const b: number = 20 //ประกาศตัวแปร b เป็นค่าคงที่ และให้เก็บเลข 20

console.log(a === b) //เช็คว่า a เท่ากับ b หรือไม่
console.log(a > b)  //เช็คว่า a มากกว่า b หรือไม่
console.log(a <= b) //เช็คว่า a น้อยกว่าหรือเท่ากับ b หรือไม่

//ปล. จำได้แค่นี้ครับ