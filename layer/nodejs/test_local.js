const { generaterandomfilename }   = require('generaterandomfilename');


try {
    (async function (){
        const filename = await generaterandomfilename("teste")
        console.log(filename);
    })()

    
} catch (e) {
    throw new Error(e.message);    
}