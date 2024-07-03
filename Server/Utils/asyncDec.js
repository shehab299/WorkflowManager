function asyncDecorator(fn){

    function newFunction(req,res,next){
        fn(req,res,next).catch(next);
    }

    return newFunction;
}

module.exports = asyncDecorator;


// function asyncDecorator(fn){
//     async function newFunction(req,res,next){
//         try{
//             await fn(req,res,next);
//         }catch(err){
//             next(err);
//         }
//     }
// }

