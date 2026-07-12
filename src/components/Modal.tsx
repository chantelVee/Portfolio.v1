
import type { FormField, ModalProps } from "../types/modalProps";
import React from "react";

const FORM_FIELDS: FormField[] = [
    {id: "name", label: "Name", type: "text", required: true},
    {id: "organisation", label: "Organisation", type: "text", required: true},
    {id: "position", label: "Position", type: "text", required: true},
    {id: "email", label: "Email", type: "text", required: true},
    {id: "Telephone", label: "Telephone Optional", type: "tel", required: false},
]

export default function Modal({onClose} : ModalProps)  {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //TODO: Logic to capture form data
        console.log("FormSubmitted!");
        onClose();
    }

  return (
    <>
        <div id="modal-background" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="input-group">
                        {FORM_FIELDS.map((field) => (
                            <div key={field.id} className="input-wrapper">
                                {/* <label htmlFor={field.id} className="sr-only">
                                    {field.label}
                                </label> */}
                                <input
                                    id={field.id}
                                    name={field.id}
                                    type={field.type}
                                    placeholder={field.label}
                                    required={field.required}
                                />
                            </div>
                        ))}
                    </div> 
                    
                    <fieldset className="radio-group">
                        <legend>Are you currently recruiting for a specific role?</legend>
                        <div className="radio-options">
                            <label>
                                <input type="radio" name="isRecruiting" value="yes" required />
                                yes
                            </label>
                            <label>
                                <input type="radio" name="isRecruiting" value="no" />
                            no
                            </label>
                        </div>
                    </fieldset>
                    <fieldset className="radio-group">
                        <legend>Do you agree to receive a follow up call from myself regarding any available positions? <br/><br/>Your details will be deleted after 6 months</legend>
                        <div className="radio-options">
                            <label>
                                <input type="radio" name="followUpConsent" value="yes" required />
                                yes
                            </label>
                            <label>
                                <input type="radio" name="followUpConsent" value="no" />
                            no
                            </label>
                        </div>
                    </fieldset>
                   
                   <div className="textarea-wrapper">
                        <label htmlFor="message">Feel free to leave a message (optional)</label>
                        <textarea id="message" name="message" rows={5} cols={50} />
                   </div>
                    
                    
                </form>
                <div id="buttons" className="form-actions">
                    <button type="submit" className="btn-primary">Submit</button>
                    <button type="button" className="btn-secondary" onClick={onClose}>Close</button>
                </div>
            </div>
            
        </div>
    </>
    
  )
}
