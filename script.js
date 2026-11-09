let Lang = document.querySelector("#Lang");

function changlang(){
    //lets of Calculator
    let calch = document.querySelector("#calch"); 
    let calcb = document.querySelector("#calcb");
    let calcp = document.querySelector("#calcp");
    //lets of Rock , Paper , Scissors
    let rpsh = document.querySelector("#rpsh");
    let rpsp = document.querySelector("#rpsp");
    let rpsb = document.querySelector("#rpsb");
    //lets of Time
    let timeh = document.querySelector("#timeh");
    let timeb = document.querySelector("#timeb");
    let timep = document.querySelector("#timep");
    //lets of Even Number
    let evenh = document.querySelector("#evenh");
    let evenp = document.querySelector("#evenp");
    let evenb = document.querySelector("#evenb");
    //lets of Weekly Schedule
    let weekh = document.querySelector("#weekh");
    let weekp = document.querySelector("#weekp");
    let weekb = document.querySelector("#weekb");
    //let of Coming Soon
    let soonh = document.querySelector("#soonh");
    let soonp = document.querySelector("#soonp");
    let soonb = document.querySelector("#soonb");
    //lets of Dev
    let tavfa = document.querySelector("#tavfa");
    let namefa = document.querySelector("#namefa");
    let taven = document.querySelector("#taven");
    let nameen = document.querySelector("#nameen");
    //Change Language
    if (Lang.value === "English"){
        //English Calculator
        calch.innerHTML = "Calculator ";
        calcp.innerHTML = "a Neon Calculator";
        calcb.innerHTML = "Link";
        //English Rock , Paper , Scissors
        rpsh.innerHTML = "Rock , Paper , Scissors";
        rpsp.innerHTML = "a Mini Rock , Paper , Scissors";
        rpsb.innerHTML = "Link";
        //English Time
        timeh.innerHTML = "Time";
        timeb.innerHTML = "Link";
        timep.innerHTML = "a Message Bound By Time";
        //English Even Number
        evenh.innerHTML = "Even Number";
        evenp.innerHTML = "Even Number Detection Device";
        evenb.innerHTML = "Link";
        //English Weekly Schedule
        weekh.innerHTML = "Weekly Schedule";
        weekp.innerHTML = "My School Weekly Schedule";
        weekb.innerHTML = "Link";
        //English Coming Soon
        soonh.innerHTML = "Soon";
        soonp.innerHTML = "Soon";
        soonb.innerHTML = "Soon";
        //English Dev
        taven.innerHTML = "Development By";
        nameen.innerHTML = "Ali Asgharian" + "❤️";
        document.querySelector(".deven").style.display = "flex"
        document.querySelector(".devfa").style.display = "none"
    }else {
        //Persian Calculator
        calch.innerHTML = "ماشین حساب  ";
        calcp.innerHTML = "یک ماشین حساب نئونی";
        calcb.innerHTML = "لینک";
        //Persian Rock , Paper , Scissors
        rpsh.innerHTML = "سنگ ، کاغذ ، قیچی ";
        rpsp.innerHTML = "یک بازی سنگ ، کاغذ ، قیچی کوچک";
        rpsb.innerHTML = "لینک";
        //Persian Time 
        timeh.innerHTML = "زمان";
        timep.innerHTML = "پیام بسته بر زمان";
        timeb.innerHTML = "لینک";
        //Persian Even Number 
        evenh.innerHTML = "عدد زوج";
        evenp.innerHTML = "دستگاه تشخیص عدد زوج";
        evenb.innerHTML = "لینک";
        //Persian Weekly Schedule
        weekh.innerHTML = "برنامه هفتگی";
        weekp.innerHTML = "برنامه هفتگی مدرسه من";
        weekb.innerHTML = "لینک";
        //Persian Coming Soon
        soonh.innerHTML = "به زودی";
        soonp.innerHTML = "به زودی";
        soonb.innerHTML = "به زودی";
        //Persian Dev 
        tavfa.innerHTML = "ساخته شده توسط";
        namefa.innerHTML =  "❤️" + " علی اصغریان";
        document.querySelector(".devfa").style.display = "flex";
        document.querySelector(".deven").style.display = "none";
    }
}
changlang()
Lang.addEventListener("change" , changlang)
