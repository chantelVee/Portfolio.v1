
export default function Modal({onClose} : {onClose: () => void})  {
  return (
    <>
        <div id="modal-background">
            <div className="modal">
                <form action="input">
                   <input className="name" placeholder="Name" required type="text" />
                    <input placeholder="Organisation" required type="text" />
                    <input placeholder="Position" required type="text" />
                    <input placeholder="Email" required type="text" />
                    <input placeholder="Telephone (optional)" type="text" />  
                    <p>Are you currently recruiting for a specific role?</p>
                    <div className="radio">
                        <input type="radio" name="myRadio" value="yes" />
                        <label>
                            
                            yes
                        </label>
                        <input type="radio" name="myRadio" value="no" /> 
                        <label>
                           
                           no
                        </label>
                    </div>
                    <p>Do you agree to receive a follow up call from myself regarding any available positions? <br/><br/>Your details will be deleted after 6 months</p>
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
                    <p>Feel free to leave a message (optional)</p>
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
