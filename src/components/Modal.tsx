
import React, {useState, useRef} from "react";
import type { FormField, ModalProps } from "../types/modalProps";
import emailjs from '@emailjs/browser';


const FORM_FIELDS: FormField[] = [
    {id: "name", label: "Name", type: "text", required: true},
    {id: "organisation", label: "Organisation", type: "text", required: true},
    {id: "position", label: "Position", type: "text", required: true},
    {id: "email", label: "Email", type: "text", required: true},
    {id: "Telephone", label: "Telephone Optional", type: "tel", required: false},
];

const LINKEDIN_URL = "https://www.linkedin.com/in/chantel-boiro/";
const CV_URL = "/Chantel_Boiro-CV.docx"

export default function Modal({onClose} : ModalProps)  {
    const formRef = useRef<HTMLFormElement>(null);

    const [showConfirmClose, setShowConfirmClose] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formRef.current) return;
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                'service_h2e0t1e',
                'template_8zo3f1c',
                formRef.current,
                'p6zvZuuzHVhqo-cjY'
            );

            const link = document.createElement("a");
            link.href = CV_URL;
            link.download = "Chantel_Boiro-CV.docx";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            console.log("FormSubmitted & PDF Downloaded!");
            onClose();
        } catch (error) {
            console.error("Failed to submit form:", error);
            alert("Error submitting form. Please try again");
        } finally {
            setIsSubmitting(false);
        }        
    };

    const handleAttemptClose = () => {
        setShowConfirmClose(true);
    };

    const handleConnectLinkedIn = () => {
        window.open(LINKEDIN_URL, "_blank");
        onClose();
    };

    // confirmation modal
    if (showConfirmClose) {
        return (
            <div id="modal-background" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content text-center">
                        <h2>Changed your mind?</h2>
                        <p>No problem! We can still keep in touch. Feel free to connect with me on LinkedIn</p>

                        <div id="buttons" className="confirmation-form-actions" style={{marginTop: "20px"}}>
                            <button onClick={handleConnectLinkedIn} className="btn-primary" >
                                Connect on LinkedIn
                            </button>
                            <button onClick={onClose} className="btn-secondary">
                                Close and Continue Browsing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // form modal
    return (
        <div id="modal-background" onClick={handleAttemptClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <form ref={formRef} onSubmit={handleSubmit} className="modal-form">
                    {/* hidden input to track downloads in emailjs template */}
                    <input type="hidden" name="document_download" value="Yes" />
                    <div className="input-group">
                        {FORM_FIELDS.map((field) => (
                            <div key={field.id} className="input-wrapper">
                                
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
                        <div className="radio-options specific-role">
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
                    <fieldset className="radio-group follow-up">
                        <legend>Do you agree to receive a follow up call from myself regarding any available positions? <br/><br/>Your details will be deleted after 6 months</legend>
                        <div className="radio-options follow-up-answers">
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
                    <div id="buttons" className="form-actions">
                        <button 
                            type="submit" 
                            className="btn-primary" 
                            disabled={isSubmitting}>
                               {isSubmitting ? "Sending..." : "Submit & Download"}
                        </button>
                        <button 
                            type="button" 
                            className="btn-secondary" 
                            onClick={handleAttemptClose}
                            disabled={isSubmitting}
                        >
                            Close
                        </button>
                    </div>    
                        
                </form>
            </div>
        </div>
    );
}
