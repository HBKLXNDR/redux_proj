import Joi from "joi";

const productValidator = Joi.object({
    name:Joi.string().min(1).max(20).required().regex(/^[a-zA-ZА-яёЁіІїЇ]{1,20}$/).messages({
        'string.empty': 'Name cant be empty'
    }),
    imageUrl:Joi.any().required().messages({
        'any.empty':'url cant be empty'
    }),
    count:Joi.number().required().messages({
        'number.empty': 'it can not be empty'
    }),
    // width:Joi.number().required().min(1).max(5000),
    // height:Joi.number().required().min(1).max(5000),
    weight:Joi.string().required().regex(/^[a-zA-ZА-яёЁіІїЇ]{1,20}$/)
});

export {productValidator}