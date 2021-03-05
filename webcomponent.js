(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    `;
	
	

    customElements.define('com-sap-sample-tile', class Tile extends HTMLElement {


		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
			this._tagContainer;
            this._tagType = "h1";
            this._tileHeaderText = "Hello World";
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
		
		setTileValues(newValue1, newValue2){
		}
		
		get tileHeaderText(){
			return this._tileHeaderText;
		}
		
		set tileHeaderText(value){
			this._tileHeaderText = value;
		}
		
		
		setSquare(newValues){
			var square4 = this._shadowRoot.querySelector("#square1");
			var ks01 = this._shadowRoot.querySelector("#KS01");
			ks01.setAttribute("fill", newValues[0]);

		}

        redraw(){
			 if (this._tagContainer){
                this._tagContainer.parentNode.removeChild(this._tagContainer);
            }

            var shadow = window.getSelection(this._shadowRoot);
            this._tagContainer = document.createElement(this._tagType);
            var theText = document.createTextNode(this._tileHeaderText);    
            this._tagContainer.appendChild(theText); 
            this._shadowRoot.appendChild(this._tagContainer);
			
        }
    });
})();
