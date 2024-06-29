import Joi from "joi";


export const RegisterSchema = Joi.object(
    {
        username: Joi.string().required(),
        uemail: Joi.string().required().email(),
        upassword: Joi.string().required()
            .pattern(new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/))
    }
)