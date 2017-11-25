var fs = require('fs');

exports.onCreateNode = ({ node, boundActionCreators }) => {
    const workRegex = /components\/work$/g;    
    const { createNodeField } = boundActionCreators
    if(workRegex.test(node.dir) && node.internal.type === 'Directory') {
        return new Promise((resolve, reject) => {
            let props = {
                node,
                name: `work`,
                value: {
                    external: true,
                    video: false
                },
            }
            fs.access(`${node.absolutePath}/video.mp4`, fs.constants.F_OK, function (err) {
                if (!err) {
                    props.value.video = true
                }
                createNodeField(props)
                resolve();
            })  
        })     
    }
}