const Log = (msg: string, color: string, background: string) => {
    if (!msg){
        console.log('%c console-colorify:','color: yellow; background: red', 'no message found.')
    }else if (!color){
        console.log('%c console-colorify:','color: yellow; background: red', 'no color found.')
    }else if (!background){
        console.log('%c console-colorify:','color: yellow; background: red', 'no background found.')
    }else{
        console.log(`%c ${msg}`, `color: ${color}; background: ${background}`)
    }
}


export default Log