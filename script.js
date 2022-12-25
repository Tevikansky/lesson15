const body = document.querySelector('body');
const text = prompt("Какой текст будет введён?");

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

const a = new DomElement(prompt("Какой будет задан div?"), +prompt("Какую высоту блока хотите задать (цифрами)?"), +prompt("Какую ширину блока хотите задать (цифрами)?"), prompt("Какой цвет фона хотите задать (blue, red, yellow,green)?"), prompt("Какой размер текста хотите задать (цифрами)?"));
a.element();