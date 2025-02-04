let form=document.querySelector("form");
let box=false;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let EC=parseFloat(document.querySelector("input[name='q1']:checked")?.value);
    let EClab=parseFloat(document.querySelector("input[name='q2']:checked")?.value);
    let AA=parseFloat(document.querySelector("input[name='q3']:checked")?.value);
    let PSUC=parseFloat(document.querySelector("input[name='q4']:checked")?.value);
    let PSUClab=parseFloat(document.querySelector("input[name='q5']:checked")?.value);
    let BEE=parseFloat(document.querySelector("input[name='q6']:checked")?.value);
    let BEElab=parseFloat(document.querySelector("input[name='q7']:checked")?.value);
    let WDT=parseFloat(document.querySelector("input[name='q8']:checked")?.value);
    let CS=parseFloat(document.querySelector("input[name='q9']:checked")?.value);
    let CSlab=parseFloat(document.querySelector("input[name='q10']:checked")?.value);
    let CCbasket=parseFloat(document.querySelector("input[name='q11']:checked")?.value);

    let SGPA=(2*EC+EClab+3*AA+3*PSUC+PSUClab+3*BEE+BEElab+2*WDT+CS+CSlab+2*CCbasket)/20;
    SGPA=Math.round(SGPA*100)/100;
    // let circle
    // if(!box){
    // circle=document.createElement("div");
    // circle.classList.add("circle");
    // }else{
    //     circle=document.querySelector(".circle");
    // }
    // circle.innerHTML=`${SGPA}<br>SGPA`;
    // if(!box){
    // document.querySelector("ol").appendChild(circle);
    // box=true;
    // }
    setProgress(SGPA*10);
});

function setProgress(percent) {
    let circle = document.getElementById("progress");
    let text = document.getElementById("percentage");
    
    let circumference = 2 * Math.PI * 60;  // 2πr where r=60
    let offset = circumference - (circumference * percent) / 100; 
    
    console.log("Setting progress to:", percent, "Offset:", offset); // Debugging
    
    // Apply transition for smooth animation
    circle.style.transition = "stroke-dashoffset 1s ease-in-out";
    circle.style.strokeDashoffset = offset;
    text.innerHTML = `${(percent/10)} SGPA`; // Fixed text issue
}