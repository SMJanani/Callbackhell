var value = document.querySelector('.value'); 

setTimeout(()=>{
    value.innerText = '10';
    setTimeout(()=>{
        value.innerText = '9';
        setTimeout(()=>{
            value.innerText = '8'
            setTimeout(()=>{
                value.innerText = '7';
                setTimeout(()=>{
                    value.innerText = '6';
                    setTimeout(()=>{
                        value.innerText = '5';
                        setTimeout(()=>{
                            value.innerText = '4';
                            setTimeout(()=>{
                                value.innerText = '3';
                                setTimeout(()=>{
                                    value.innerText = '2';
                                    setTimeout(()=>{
                                        value.innerText = '1';
                                        setTimeout(()=>{
                                            value.innerText = 'Happy Independence Day';
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);