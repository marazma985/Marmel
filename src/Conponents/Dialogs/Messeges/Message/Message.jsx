import React from "react";
import s from '../Messeges.module.css'

const Message =(m)=>{
    return(
        <div>
             <div >
                 <h3 >{m.senderName} :</h3>
                  {m.body}
                  <button className={s.button} id={m.id} onClick={m.deleteMessage} > delete message</button>
            </div>
        </div>
    )
}
export default Message;