import React from "react";
import {Card, CardContent,Button, Typography,Grid, TextField,} from '@material-ui/core'

import { CryptoState } from "../CryptoContext";

function MetaPage() {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = CryptoState();

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
     
 
  return (
        
    
    
        
         <div>
          
   
            
             {!currentAccount && (
              <Button variant="contained" color="primary"
              onClick={connectWallet}>
                 Connect Wallet
              </Button>
                
                )}

          
         

         <Typography gutterBottom variant="h3" align="center">
           Deal Crypto
       </Typography>
      <Grid>
      
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
          
            <Typography gutterBottom variant="h6">
              Enter Details
          </Typography> 
           
          
              <Grid container spacing={1}>
                <Grid xs={12}  item>
                  <TextField 
                  type="text"
                  placeholder="Enter account address" 
                  label="Send To" variant="outlined" 
                  fullWidth required 
                 
                  onChange={(e)=>handleChange(e,"addressTo")}
                  />
                </Grid>
               
              
                <Grid item xs={12}>
                  <TextField type="number"
                  
                   placeholder="Enter amount to transfer" 
                   label="Amount" variant="outlined" fullWidth required
                  
                   
                   onChange={(e)=>handleChange(e,"amount")}
                    />
                </Grid>
                <Grid xs={12}  item>
                  <TextField 
                  type="text"
                  placeholder="Keyword" 
                  label="Keyword" variant="outlined" 
                  fullWidth required 
                  
                  onChange={(e)=>handleChange(e,"keyword")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" 
                  type="text"
                  multiline rows={4} 
                  placeholder="Type your message here" variant="outlined" 
                  fullWidth
                   
                   onChange={(e)=>handleChange(e,"message")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth
                    onClick={handleSubmit}
                  >Send</Button>
                </Grid>

              </Grid>
              
          </CardContent>
        </Card>
        
      </Grid>
      </div>
    
     
      
  );
}

export default MetaPage;
