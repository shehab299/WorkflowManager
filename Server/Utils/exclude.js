function exclude(Ob, ...args){
    args.forEach((arg) => {
        Ob.hasOwnProperty(arg) && delete Ob[arg];        
    })
}

module.exports = exclude;