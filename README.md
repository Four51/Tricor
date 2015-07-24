#### Puppet Labs - Tricor  / 18.10.1 CT Release and 1.3.0 SPA Release  (0415) - Last Updated: 7/24/15
========
##### Developers
Four51: Miranda, Jen, Max

##### Github URL
* github.com/Four51/Tricor

##### Product Detail Template 
* PuppetLabs - combined PDT for automagic matrix and lightbox 

##### Images
* logo - css/images/PuppetLabs/PuppetLabsLogo.png
* size charts - css/images/PuppetLabs/SizeCharts

##### OrderCloud modules
`lib/oc/mandrill.js`, `lib/oc/mandrillTemplate.js`
- Mandrill

`lib/oc/productMatrix.js`
- Order Matrix

`lib/oc/productLightbox.js`
- Product Lightbox

##### Custom Views
`partials/controls/FAQ.html`   
- FAQ

##### js
`js/app.js` 
* inject OC Modules

`js/controllers/contactUsCtrl.js` 
* Mandrill 

`js/controllers/userEditCtrl.js` 
* anon router configuration

`js/routing.js` 
* add FAQ path / line 47

##### html
`index.html`
* remove Google Webfonts (2 default and 1 custom) / lines 16-18
* OC Modules / lines 78-81

`partials/categoryView.html`
* hide category tree

`partials/controls/accountNav.html`
* add contact us

`partials/controls/cartButtons.html`  
* remove save and cancel order buttons

`partials/controls/checkoutButtons.html`  
* remove save and cancel order buttons

`partials/controls/FAQ.html`   
* custom view

`partials/controls/nav.html`  
* add About Us (external link) / lines 8-11
* move contact us to top level / lines 12-17
* add FAQ / lines 18-23
* hide the dropdown-mega

`partials/controls/orderSummary.html`  
* 

`partials/cartView.html`
* change delete icon to x

`partials/copyrightView.html`
* fixed footer 

`partials/Messages/contact.html`   
* Mandrill

`partials/productListView.html`
* remove panel header 

`partials/userView.html`
* 
