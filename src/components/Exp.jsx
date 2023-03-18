import React from "react";

const Exp = () => {
  return (
    
<div class="box">
    <div>
        <div className="content1">

                
            <div className="input-box1">
              
                <input type="text" class = "ok"  placeholder="Job Title"></input>
                  
                
            </div><br></br>

            <div className="input-box1">
              
                <input type="text" class = "ok"  placeholder="Compny or Project Name"></input>
                  
                
            </div><br></br>


            <div className="input-box1">
              
                <input type="month" id="start" name="start"
                min="2018-03" value="2022-01" ></input><br></br><br></br>
               
                    
                <input type="month" id="start" name="start"
                min="2018-03" value="2023-03" ></input>
             
                  
                
            </div><br></br>
            
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
            <label for="vehicle2"> Currently work here</label><br></br><br></br>

            <div className="input-box1">
              
                <input type="text" class = "ok"  placeholder="Accmpolishment"></input>
                  
                
            </div><br></br>

            <button class="low">Next</button>




            </div>

    </div>
</div>


     
  
    );
};

export default Exp;