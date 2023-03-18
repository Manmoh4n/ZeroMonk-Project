import React from "react";

const Certificate = () => {
  return (

    
<div class="box">
    <div>
        <div className="content1">

                
            <div className="input-box1">
              
                <input type="text" class = "ok"  placeholder="Certificate Name" ></input>
                  
                
            </div><br></br><br></br>

            


            <div className="input-box1">
              
                <input type="month" id="start" name="start"
                min="2018-03" value="2018-05" ></input>
                  
                
            </div><br></br>

            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
            <label for="vehicle2"> Does not expire</label><br></br><br></br>


            <button class="low">Next</button>




            </div>

    </div>
</div>





    
    
  
      );
};

export default Certificate;
