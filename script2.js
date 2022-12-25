const body = document.querySelector('body');
const inputText = document.querySelector('.whats.text');




const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.element = () => {
    if (this.selector[0] === ".") {
      const div = document.createElement('div');
      div.style.cssText = "height:" + height + "px;" + "width:" + width + "px;" + "background:" + bg + ";" + "font-size:" + fontSize + "px;";
      div.className = this.selector.substring(1).toString();
      div.innerHTML = '<p>' + text + '</p>';
      document.body.append(div);
    } else if (this.selector[0] === "#") {
      const div = document.createElement('div');
      div.style.cssText = "height:" + height + "px;" + "width:" + width + "px;" + "background:" + bg + ";" + "font-size:" + fontSize + "px;";
      div.id = this.selector.substring(1).toString();
      div.innerHTML = '<p>' + text + '</p>';
      document.body.append(div);
    }
  };

};


init = function () {
  inputText.addEventListener('input', this.addText);
}

addText = function () {
  const text = inputText.value;
  console.log(inputText.value)
};
init();

