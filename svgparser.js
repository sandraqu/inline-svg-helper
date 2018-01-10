var svgLib = {
    '__chevron': {
        path: '<path d="M21.291 9.572l-2.206-2.15-8.375 8.688 8.387 8.469 2.188-2.175-6.25-6.313z"></path>'
    },
    '__grid-view':{
        path: '<path d="M8.003 8.003h6.985v6.985h-6.985v-6.985z"></path><path d="M8.003 17.012h6.985v6.985h-6.985v-6.985z"></path><path d="M17.012 8.003h6.985v6.985h-6.985v-6.985z"></path><path d="M17.012 17.012h6.985v6.985h-6.985v-6.985z"></path>'
    },
    '__list-view':{
        path: '<path d="M8.025 7.994h15.95v1.882h-15.95v-1.882z"></path><path d="M8.025 17.414h15.95v1.882h-15.95v-1.882z"></path><path d="M8.025 12.704h15.95v1.882h-15.95v-1.882z"></path><path d="M8.025 22.124h15.95v1.882h-15.95v-1.882z"></path>'
    },
    '__pipe':{
        path: '<path d="M14.474 3.833h2.233v24.335h-2.233v-24.335z"></path>'
    }
}

var Svg = function(icon){
    this.icon = icon;
    this.minX = 0;
    this.minY = 0;
    this.width = 32;
    this.height = 32;
}

function printSvgLib(icon){
    if( svgLib.hasOwnProperty(icon) ){
        var svg = new Svg(icon);
        var space = ' ';
        var viewBox = svg.minX+space+svg.minY+space+svg.width+space+svg.height;
        var symbol = '<svg style="display:none;"><symbol id="svg'+ svg.icon 
            +'" viewBox="'+ viewBox +'">'+ svgLib[svg.icon].path +'</svg>';
        var defs = document.querySelector('defs');

        defs.innerHTML += symbol;
    } else {
        console.error(icon,' was not found');
    }
}

function setupSvgs(){
    var icons = document.querySelectorAll('svg.svg');
    var list = [];
    var seen = {};

    icons.forEach(function(ele,idx){
        var xlink = icon = label = align = span = position = null;
        var hasUpperCase = function(string){
            return /[A-Z]/.test(string);
        }
        var hasSpace = function(string){
            return /\s/.test(string);
        }
        
        icon = ele.dataset.icon;
        
        // format icon
        if( hasUpperCase(icon) ){
            icon = icon.toLowerCase();
        }
        
        if( hasSpace(icon) ){
            icon = icon.replace(' ','-');
        }

        if( icon ){
            xlink = '<use xlink:href="#svg'+ icon +'"></use>';

            label = ele.dataset.label;
            if( label ){
                span = '<span class="svg__label">'+ label +'</span>';
                
                align = ele.dataset.align;
                if( !align ){
                    position = 'afterend';
                } else {
                    position = 'beforebegin';
                }
                
                ele.setAttribute('role', 'presentation');
                ele.insertAdjacentHTML( position, span );
            } else {
                
                // make accessible
                ele.setAttribute('role', 'img');
                ele.setAttribute('title', icon + ' button');
            }

            // ele clear dataset
            // ele classList add('svg-'+icon)
            delete ele.dataset.icon;
            delete ele.dataset.label;
            delete ele.dataset.align;
            ele.classList.add('svg'+icon);
            ele.innerHTML = xlink;

            if( seen[icon] !== 1 ){
                seen[icon] = 1;
                list.push(icon);
            }
        }
    });
    
    list.forEach(function(ele,idx){
        printSvgLib(ele);
    });

}

/*
- execute all the doms svg use xlinks
- collect as you go
- remove dups
- execute path 
*/

setupSvgs();
