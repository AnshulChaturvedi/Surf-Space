

const tryCatch = (controllers)=>{
    return async (req,res)=>{
        try {
            await controllers(req,res)
        } catch (error) {
            console.log(error)
            res.status(500).json({success:ture,message:'Something went wrong , try again later!'})
        }
    
    }
}

export default tryCatch