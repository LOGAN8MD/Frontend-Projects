
class XForm {


    constructor(collections = []) {
        this.collections = collections;
    }

    getHeader(){
        return this.collections.header;
    }

    getBanner(){
        return this.collections.banner;
    }

    getForm() {
        return this.collections.forms;
    }

    getFooter(){
        return this.collections.footer;
    }

    
}


// class StoreForm{

// }

class ImgObj {
    constructor(imgId,Url) {
        this.imgId = imgId;
        this.Url = Url;
    }
}

class FormObj {
    constructor(type,title,placeholder) {
        this.type=type;
        this.title=title;
        this.placeholder=placeholder;
    }
}

class Forms {
    constructor(header = [], footer = [], forms = [],banner=[]) {
        this.header = header;
        this.footer = footer;
        this.forms = forms;
        this.banner=banner;
    }

    setHeader(obj1) {
        this.header.push(obj1)
    }

    setFooter(obj1) {
        this.footer.push(obj1)
    }

    setForm(obj1) {
        this.forms.push(obj1)
    }

    setBanner(obj1) {
        this.banner.push(obj1)
    }
   
    getData() {
        return (this);
    }

}