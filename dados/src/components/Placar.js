export function Placar({player1,player2}){
 

    return(
        <div className="painel" style={{display :'flex', justifyContent:'space-between', gap : '480px', height:'100px', justifyContent:'center',textAlign:'center', marginTop:'100px'}}>
        <div className="Placar"style={{borderRadius :'10px',padding:'0px 60px 0px', fontSize:'20px', color:'Purple', backgroundColor:'white'}} >
           <h2>{player1}</h2>
        </div>
        <div className="Placar" style={{borderRadius :'10px',padding:'0px 60px 0px', fontSize:'20px', color:'Purple', backgroundColor:'white'}} >
           <h2>{player2}</h2> 
        </div>

        </div>
    )

}