- function() {
    "use strict";
    var d = function(b, a, c, g, h, k) {
            a = document.createElement("input");
            a.type = g;
            a.id = c;
            a.placeholder = h;
            a.style.display = k ? "block" : "none";
            a.style.width = "90%";
            a.style.width = "90%";
            a.style.marginBottom = "5px";
            b.appendChild(a);
            return a
        },
        createLabel = function(b, a, c, k) {
            a = document.createElement("label");
            a.id = c;
            a.style.display = k ? "block" : "none";
            a.style.width = "90%";
            a.style.marginBottom = "5px";
            b.appendChild(a);
            return a
        },
        e = function(b) {
            return b && "true" == b.toLowerCase() || "" == b || "1" == b
        },
        f = function(b, a) {
            var c;
            window.XMLHttpRequest && (c = new XMLHttpRequest);
            c.onreadystatechange = function() {
                4 == c.readyState && 200 == c.status && (console.log("ready"), console.log(c.responseText))
            };
            c.open("POST", a, !0);
            c.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            c.send(b)
        },
        l = function() {};
    goog.inherits(l, HTMLFormElement);
    l.prototype.createdCallback = function() {
        this.style.display = "inherit";
        this.m = "https://cplads-hrd.appspot.com/submit/" + this.getAttribute("lead_depot_id");

        this.lName = e(this.getAttribute("lbl_name"));
        this.iName = e(this.getAttribute("include_name"));
        this.iMail = e(this.getAttribute("include_email"));
        this.iPhone = e(this.getAttribute("include_phone"));
        this.iModel = e(this.getAttribute("include_model"));
        this.iLocation = e(this.getAttribute("include_location"));

        this.pName = this.getAttribute("placeholder_name");
        this.pMail = this.getAttribute("placeholder_email");
        this.pPhone = this.getAttribute("placeholder_phone");
        this.pModel = this.getAttribute("placeholder_model");
        this.pLocation = this.getAttribute("placeholder_location");
        this.pSubmit = this.getAttribute("placeholder_submit");
        this.pConfirmation = this.getAttribute("placeholder_confirmation");

        this.lblName = createLabel(this, this.j, "leadgen-lblName", this.iName);
        this.txtName = d(this, this.j, "leadgen-name", "text", this.pName, this.iName);
        this.txtMail = d(this, this.i, "leadgen-email", "email", this.pMail, this.iMail);
        this.txtPhone = d(this, this.l, "leadgen-phone", "tel", this.pPhone, this.iPhone);
        this.txtModel = d(this, this.h, "leadgen-model", "text", this.pModel, this.iModel);
        this.txtLocation = d(this, this.k, "leadgen-location", "text", this.pLocation, this.iLocation);

        var b = this.a,
            a = this.pSubmit,
            b = document.createElement("button");

        b.id = "leadgen-submit";
        b.textContent = a;
        b.style.display = "block";
        this.appendChild(b);
        this.a = b;
        this.addEventListener("submit", this.B)
    };
    l.prototype.attributeChangedCallback = function(b) {
        var a = this.getAttribute(b);
        switch (b) {
            case "lead_depot_id":
                this.m = "https://cplads-hrd.appspot.com/submit/" + a;
                break;
            case "lbl_name":
                this.lName = e(a);
                break;
            case "include_name":
                this.iName = e(a);
                break;

            case "include_email":
                this.iMail = e(a);
                break;
            case "include_phone":
                this.iPhone = e(a);
                break;
            case "include_model":
                this.iModel = e(a);
                break;
            case "include_location":
                this.iLocation = e(a);
                break;
            case "placeholder_name":
                this.pName = a;
                break;
            case "placeholder_email":
                this.pMail = a;
                break;
            case "placeholder_phone":
                this.pPhone = a;
                break;
            case "placeholder_model":
                this.pModel = a;
                break;
            case "placeholder_location":
                this.pLocation = a;
                break;
            case "placeholder_submit":
                this.pSubmit = a;
                break;
            case "placeholder_confirmation":
                this.pConfirmation = a
        }
    };
    l.prototype.B = function(b) {
        b.preventDefault();
        f("name=" + encodeURIComponent(this.txtName.value) + "&email=" + encodeURIComponent(this.txtMail.value) + "&phone=" + encodeURIComponent(this.txtPhone.value) + "&model=" + encodeURIComponent(this.txtModel.value)+ "&location=" + encodeURIComponent(this.txtLocation.value), this.m);
        this.a.disabled = !0;
        this.a.textContent = this.pConfirmation;
        b = document.createEvent("Event");
        b.initEvent("lead-submitted", !0, !0);
        this.dispatchEvent(b)
    };
    document.registerElement("ci-leadgen", {
        prototype: l.prototype,
        "extends": "form"
    });
}()
