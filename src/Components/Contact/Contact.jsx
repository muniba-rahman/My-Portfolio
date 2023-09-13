import React, { useRef } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6awisib', 'template_e2s17y5', form.current, '_IIv-TA93Y8Kg3bXF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Your Message has been sent successfully!");
  };
    return (
        <>
            <div className='contact'>
                <h1 className='contact-heading'>Send Your Email Here!</h1>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="form-div mb-3">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" name='from_name' class="form-input" id="name" aria-describedby="emailHelp" required/>
                        </div>
                        <div class="form-div mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" name='from_email' class="form-input" id="email" required/>
                        </div>
                        <div class="form-div mb-3">
                            <label for="email" class="form-label">Message</label>
                            <textarea rows={4} cols={10} type="email" name='message' class="form-input" id="email" required/>
                        </div>
                        <button type="submit" class="btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;
