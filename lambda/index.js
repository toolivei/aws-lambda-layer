const { generaterandomfilename} = require('generaterandomfilename')

exports.handler = async function(event, context) {
    try {
        const filename = await generaterandomfilename(event.prefix)    
        console.log("Filename: ", filename)
        return { statusCode: 200, body: filename}
    
    } catch (e) {
        return { statusCode: 500, body: e.message}
    }
}