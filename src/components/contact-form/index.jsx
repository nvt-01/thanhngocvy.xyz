import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <form
            id="contact-form"
            action="https://getform.io/f/a17a2715-d7ee-4ac4-8fcb-12f1eed43b2c"
            method="POST"
        >
            <div className="row">
                <div className="col-md-6">
                    <div className="single-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name..."
                            ref={register({ required: "Name is required" })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="single-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="yourmail@domain.com"
                            ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="single-form">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject (optional)"
                            ref={register({
                                required: "Subject is required",
                            })}
                        />
                        {errors.subject && <p>{errors.subject.message}</p>}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="single-form">
                        <textarea
                            name="message"
                            placeholder="Here goes your message"
                            ref={register({
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                </div>
                <p className="form-message"></p>
                <div className="col-md-12">
                    <div className="form-btn">
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
