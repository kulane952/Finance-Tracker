import {z} from 'zod'
export const validate=(schema)=>(req,res,next)=>{
    const result=schema.safeParse(req.body);

    console.log("RESULT:",result)

    if(!result.success){
        const formatted=result.error.format();

        console.log("ERROR:",result.error.issues);


        return res.status(400).json({
            success:false,
            message:"validation failed",
            error:Object.keys(formatted)
            .filter(key => key!== "_errors")
            .map(field =>({
                field,
                message: formatted[field]?._error?.[0] ||
                "Invaild input"
            }))
        })
    };
    next();
}