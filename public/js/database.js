const { createApp, ref } = Vue;

var worksApp=createApp({
    data(){
        return{
            works: []
        }
    }

    
}).mount("#works");


$.ajax({
    url:"/works",
    method:"get",
    dataType:"json",
    success: (result)=>{
        worksApp.works = result;
    }

})




var dodApp=createApp({
    data(){
        return{
            dod: []
        }
    }

    
}).mount("#dod");


$.ajax({
    url:"/dod",
    method:"get",
    dataType:"json",
    success: (result)=>{
        dodApp.dod = result;
    }
})





var faApp=createApp({
    data(){
        return{
            fanart: []
        }
    }

    
}).mount("#fanart");

//req services data fromm server
$.ajax({
    url:"/fanart",
    method:"get",
    dataType:"json",
    success: (result)=>{
        faApp.fanart = result;
    }
})



