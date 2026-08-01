export  const errorHandler= (err, req, res, next) => {
    const status=res.statusCode || 500;
    res.status(status).json({
        success: false,
        message: err.message|| 'Something went wrong',

        status
    })
}