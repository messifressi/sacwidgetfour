(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
	<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="280.0px"
   height="180.0px"
   viewBox="0 0 280.0 180.0"
   version="1.1"
   id="SVGRoot">
  <g
     id="layer1"
     inkscape:groupmode="layer"
     inkscape:label="Ebene 1">
    <text
       id="textHeader"
       y="13%"
       x="8%"
       style="font-style:normal;font-weight:normal;font-size:18pt;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.02012"
       xml:space="preserve"><tspan
         style="stroke-width:1.0"
         y="23%"
         x="5%"
         id="ksText"
         sodipodi:role="line">Kontrollspur N</tspan></text>
    <text
       id="textOpen"
       y="17%"
       x="8%"
       style="font-style:normal;font-weight:normal;font-size:16pt;line-height:1.25;font-family:sans-serif;fill:#00b300;fill-opacity:1;stroke:none;stroke-width:1.02562"
       xml:space="preserve"><tspan
         style="stroke-width:1.0"
         y="40%"
         x="5%"
         id="ksOpen"
         sodipodi:role="line">status</tspan></text>
    <rect
       y="1%"
       x="1%"
       height="98%"
       width="98%"
       id="rect126"
       style="fill:none;stroke:#000000;stroke-width:1.0;stroke-opacity:1;opacity:1" />
    <text
       id="text1305"
       y="94.285713"
       x="31.428572"
       style="font-style:normal;font-weight:normal;font-size:10pt;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none"
       xml:space="preserve"><tspan
         style="font-size:12pt"
         y="65%"
         x="5%"
         id="paxKumTxt"
         sodipodi:role="line">PAX kumuliert</tspan></text>
    <text
       id="text1309"
       style="font-size:16px;line-height:1.25;font-family:sans-serif"
       xml:space="preserve"><tspan
         style="font-size:24pt"
         y="85%"
         x="5%"
         id="paxKumVal"
         sodipodi:role="line">0000</tspan></text>	
    <text
       id="text1330"
       style="font-size:16px;line-height:1.25;font-family:sans-serif"
       xml:space="preserve"><tspan
         style="font-size:12pt"
         y="65%"
         x="50%"
         id="tagesauslastung"
         sodipodi:role="line">Tagesauslastung</tspan></text>
    <rect
       y="75%"
       x="50%"
       height="14.125"
       width="120"
       id="rect1332"
       style="opacity:1;fill:#808080;fill-opacity:1;stroke:none;stroke-opacity:1" />
	<path 
	style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
	d="m 140,127
           v 30" />
	<path 
	style="fill:none;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
	d="m 260,127
           v 30" />
  </g>
</svg>
    `;
	
	

    customElements.define('com-sap-sample-tile', class Tile extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        
        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
        //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
        /*
        onCustomWidgetResize(width, height){
            redraw()
        }
        */
		getBarValue(value){
			maxVal = 7800;
			percentage = value/maxVal;
			return abs(percentage*1.2);
		}
		
		getStatusColor(value){
			if (value == 1){
				return "#1EE61E";
			}
			else {
				return "#A2A2A2";
			}
		}
		
		
		setSquare(newValues){
			var square4 = this._shadowRoot.querySelector("#square1");
			var ks01 = this._shadowRoot.querySelector("#KS01");
			ks01.setAttribute("fill", newValues[0]);

		}

        redraw(){
			
        }
    });
})();