/**
 * Copyright Kamboo 2021 lol
 * 
 * Github repository: 
 * @copyright Kamboo 2021
 */

/**
 * @param {NodeList} targets 
 * @description Sets the typewriter plugin to the HTML by checking all elements with data-typetext attribute (lol i'm french i don't know english xD)
 * 
 */

 class TypeWriter {
    constructor(targets) {
        let nodeArray = Array.from(targets);
        
        this.elements = nodeArray.length;

        nodeArray.forEach(element => {
            if (!element.getAttribute("data-typetext")) {
                return console.error(new Error("TypeWriter: Element has no attributes called data-typetext."))
            }
            /**
            * @type {String} text
            * @type {Number} speed
            */
            let text = element.dataset.typetext;
            let speed = isNaN(parseInt(element.dataset.typespeed)) ? 50 : parseInt(element.dataset.typespeed);
            let tag = element;

            element.typeWriter = {
                text: text,
                speed: speed
            }

            for (let i = 0; i < text.length; i++) {
                let j = i;
                setTimeout(() => {
                    tag.innerHTML += text.charAt(i);
                }, speed * j + 1)
            }

        })
    }
}

let listDatatypetext = document.querySelectorAll("[data-typetext]");

new TypeWriter(listDatatypetext)
