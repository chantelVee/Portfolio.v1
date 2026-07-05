
export default function Modal({onClose} : {onClose: () => void})  {
  return (
    <>
        <div id="modal-background">
            <div className="modal">
                <form action="input">
                   Name <input required type="text" />
                    Organisation <input type="text" />
                    Position <input type="text" />
                    Email <input type="text" />
                    Telephone <input type="text" />  
                    <p>Are you currently recruiting for a specific role?</p>
                    <p className="radio">
                        <input type="radio" name="myRadio" value="yes" />
                        <label>
                            
                            yes
                        </label>
                        <input type="radio" name="myRadio" value="no" /> 
                        <label>
                           
                           no
                        </label>
                    </p>
                    <p>Do you agree to receive a follow up call from myself regarding any available positions?</p>
                    <p className="radio">
                        <input type="radio" name="myRadio" value="yes" />
                        <label>
                            
                            yes
                        </label>
                        <input type="radio" name="myRadio" value="no" /> 
                        <label>
                           
                           no
                        </label>
                    </p>
                    <p>Feel free to leave a message</p>
                        <label>
                            <textarea rows={5} cols={50} />
                        </label>
                             
                </form>
                <div id="buttons">
                    <button>Submit</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
            
        </div>
    </>
    
  )
}
