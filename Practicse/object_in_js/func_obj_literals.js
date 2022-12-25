let laptop={
    cpu:"i9",
    ram:16,
    brand:"dell",
    config:function()
    {
        console.log(this.cpu);
        //console.log(laptop.cpu);
    }
}
laptop.config();//error:cpu not defined
/*
SOLUTN:
1) use 'this' keyword==>points current obj==> inside config{this.cpu} 
2) use object name i.e laptop here ==> laptop.cpu
*/
