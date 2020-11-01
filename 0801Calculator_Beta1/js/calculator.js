document.addEventListener('selectstart',(e)=> {
  e.preventDefault();
  return false;
});


let Ans="";
let Temp="";
let Formula="";
let Total="";
const Count=[0,0,0,0,0,0];
const CItem=document.querySelectorAll(".CItem");
const CIO=document.querySelectorAll(".CItemOperations");

for(let i=0;i<CItem.length;i++){
  CItem[i].onclick = function(){
    if(i==11){
      if(Count[4]==0){
        Count[4]=1;
        if(!Formula){
          Formula="0.";
          document.getElementById("CalAns").value=Formula.toLocaleString();
        }else{
          Formula=Formura+".";
          document.getElementById("CalAns").value=Formula.toLocaleString();
        }
      }
    }else{
      Formula=Formula+CItem[i].innerHTML;
      document.getElementById("CalAns").value=Number(Formula).toLocaleString();
    }
    for(let v=3;v<7;v++){
      CIO[v].style="";
    }
  }
}

for(let i=0;i<CIO.length;i++){
  CIO[i].onclick=function(){
    switch(i){
      case 0:
        Ans="";
        Formula="";
        Total="";
        Temp="";
        document.getElementById("CalAns").value=Formula.toLocaleString();
        for(let i=0;i<Count.length;i++){
          Count[i]=0;
        }
        for(let v=3;v<7;v++){
          CIO[v].style="";
        }
        break;
        
      case 1:
        Formula="";
        document.getElementById("CalAns").value=Formula.toLocaleString();
        Count[4]=0;
        
        for(let v=3;v<7;v++){
          CIO[v].style="";
        }
        break;
          
      case 2:
        if(Count[5]==1){
          Formula=Ans;
          Count[5]=0;
        }
        Formula=Number(Formula)/100;
        if(Formula<1){
          document.getElementById("CalAns").value=Number(Formula);
        }else{
          document.getElementById("CalAns").value=Number(Formula).toLocaleString();
        }
        
        for(let v=3;v<7;v++){
          CIO[v].style="";
        }
        break;
        
        case 3:
          for(let v=3;v<7;v++){
            CIO[v].style="";
          }
          if(Count[5]==1){
            Formula=Ans;
          }
          for(let x=0;x<4;x++){
            if(Count[x]==1){
              switch(x){
                case 0:
                  if(Total!=0 || Formula!=0){
                    Formula=Total+Number(Formula);
                    document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                  }
                  break;
                case 1:
                  if(Total!=0 || Formula!=0){
                    Formula=Total-Number(Formula);
                    document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                  }
                  break;
                case 2:
                  if(Total!=0 || Formula!=0){
                    Formula=Total*Number(Formula);
                    document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                  }
                break;
            }
          }
        }
        for(let i=0;i<Count.length;i++){
          Count[i]=0;
        }
        Count[3]=1;
        CIO[3].style.boxShadow="none";
        CIO[3].style.transform="translate(2px,2px)";
        CIO[3].style.opacity="1";
        Total=Number(Formula);
        Formula="";
        break;
    
      case 4:
        for(let v=3;v<7;v++){
          CIO[v].style="";
        }
        if(Count[5]==1){
          Formula=Ans;
        }
        for(let x=0;x<4;x++){
          if(Count[x]==1){
            switch(x){
              case 0:
                if(Total!=0 || Formula!=0){
                  Formula=Total+Number(Formula);
                  document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                }
                break;
              case 1:
                if(Total!=0 || Formula!=0){
                  Formula=Total-Number(Formula);
                  document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                }
                break;
              case 3:
                if(Total!=0 || Formula!=0){
                  Formula=Total/Number(Formula);
                  document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                }
              break;
          }
        }
      }
      for(let i=0;i<Count.length;i++){
        Count[i]=0;
      }
      Count[2]=1;
      CIO[4].style.boxShadow="none";
      CIO[4].style.transform="translate(2px,2px)";
      CIO[4].style.opacity="1";
      Total=Number(Formula);
      Formula="";
      break;
  
      case 5:
        for(let v=3;v<7;v++){
          CIO[v].style="";
        }
        if(Count[5]==1){
          Formula=Ans;
        }
        for(let x=0;x<4;x++){
          if(Count[x]==1){
            switch(x){
              case 0:
                if(Total!=0 || Formula!=0){
                  Formula=Total+Number(Formula);
                  document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                }
                break;
              case 2:
                if(Total!=0 || Formula!=0){
                  Formula=Total*Number(Formula);
                  document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                }
                break;
              case 3:
                if(Total!=0 || Formula!=0){
                  Formula=Total/Number(Formula);
                  document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                }
                break;
          }
        }
      }
      for(let i=0;i<Count.length;i++){
        Count[i]=0;
      }
      Count[1]=1;
      CIO[5].style.boxShadow="none";
      CIO[5].style.transform="translate(2px,2px)";
      CIO[5].style.opacity="1";
      Total=Number(Formula);
      Formula="";
      break;
  
      case 6:
        for(let v=3;v<7;v++){
          CIO[v].style="";
        }
        if(Count[5]==1){
          Formula=Ans;
        }
        for(let x=0;x<4;x++){
          if(Count[x]==1){
            switch(x){
              case 1:
                if(Total!=0 || Formula!=0){
                  Formula=Total-Number(Formula);
                  document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                }
                break;
              case 2:
                if(Total!=0 || Formula!=0){
                  Formula=Total*Number(Formula);
                  document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                }
                break;
              case 3:
                if(Total!=0 || Formula!=0){
                  Formula=Total/Number(Formula);
                  document.getElementById("CalAns").value=Number(Formula).toLocaleString();
                }
                break;
          }
        }
      }
      for(let i=0;i<Count.length;i++){
        Count[i]=0;
      }
      Count[0]=1;
      CIO[6].style.boxShadow="none";
      CIO[6].style.transform="translate(2px,2px)";
      CIO[6].style.opacity="1";
      Total=Number(Formula);
      Formula="";
      break;
  
      case 7:
        if(!Total){
          Ans=Formula;
        }
        for(let v=0;v<4;v++){
          if(Count[v]==1){
            switch(v){
              case 0:
                Temp=Total+Number(Formula);
              break;
              case 1:
                Temp=Total-Number(Formula);
              break;
              case 2:
                Temp=Total*Number(Formula);
              break;
              case 3:
                Temp=Total/Number(Formula);
              break;
            }
            Ans=Temp;
            Count[v]=-1;
          }else if(Count[v]==-1){
            Temp=Ans;
            switch(v){
              case 0:
                Ans=Temp+Number(Formula);
              break;
              case 1:
                Ans=Temp-Number(Formula);
              break;
              case 2:
                Ans=Temp*Number(Formula);
              break;
              case 3:
                Ans=Temp/Number(Formula);
              break;
            }
          }
        }
      document.getElementById("CalAns").value=Ans.toLocaleString();
      Count[5]=1;
      Count[4]=0;
      for(let v=3;v<7;v++){
        CIO[v].style="";
      }
      break;
    }
  }
}
