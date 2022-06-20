import React from "react";
import { useForm } from "react-hook-form";

const ProjectForm = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
    });
    const onSubmit = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row gx-10">
                <div className="col-md-4">
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
                <div className="col-md-4">
                    <div className="single-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="youemail@domain.com"
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
                <div className="col-md-4">
                    <div className="single-form">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            ref={register({ required: "Subject is required" })}
                        />
                        {errors.subject && <p>{errors.subject.message}</p>}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="single-form">
                        <textarea
                            name="message"
                            placeholder="Here goes your message"
                            ref={register({ required: "Message is required" })}
                        ></textarea>
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ProjectForm;
