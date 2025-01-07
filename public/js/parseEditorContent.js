
function parser(editorData) {
  
    console.log('---------------in editor data--------------')


    let htmlContent = ''; 
    for(const block of editorData.blocks){
        console.log(block)
        switch(block.type) {
            case 'header':{
                htmlContent += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
                break;
            }
              
            case 'paragraph':{ 
                htmlContent += `<p>${block.data.text}</p>`
                break;
            }
            
            case 'list': {
                console.log(block.data.style)
                if(block.data.style === 'checklist'){
                    htmlContent += `<ul id="checklist">`;
                    for (const item of block.data.items) {
                        htmlContent += `<li> ${item.meta.checked ? '✅' : '⬜'} ${item.content || ''}</li>`;
                    }
                    htmlContent += `</ul>`;
                } else if(block.data.style === 'ordered'){
                    htmlContent += `<ol>`;
                    for(const item of block.data.items) {
                        console.log(item)
                        htmlContent += `<li>${item.content || ''}</li>`
                    }
                    htmlContent += `</ol>`;
                } else {
                    htmlContent += `<ul>`;
                    for(const item of block.data.items) {
                        console.log(item)
                        htmlContent += `<li>${item.content || ''}</li>`
                    }
                    htmlContent += `</ul>`;
                }
               
                break;
            }


            default: 
                break;
        }
    }
    return htmlContent;
}

module.exports = parser;