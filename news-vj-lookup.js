const template = `
    <style>
    @import url('./news-vj-lookup.css');
    </style>
    <label>Type 'delete' to delete: <input type="text" /></label>
`;

const LookupPrototype = Object.create(HTMLElement.prototype);

LookupPrototype.createdCallback = function () {
  console.log(`I was made! I'm now going to make my own internals... in a shadow DOM`);
  this.shadow = this.createShadowRoot();
  this.shadow.innerHTML = template;
};

LookupPrototype.attachedCallback = function () {
  console.log(`I was attached! Now I'll announce my value every second...`);
  this.announcement = setInterval(() => {
    if (this.foo() === ``) console.log(`Not set yet...`);
    else if (this.foo() === `delete`) this.remove();
    else console.log(`Value: ${this.foo()}`);
  }, 1000);
};

LookupPrototype.detachedCallback = function () {
  console.log('I was detached! Stopping announcements...');
  clearInterval(this.announcement);
};

LookupPrototype.attributeChangedCallback = (attrName, oldVal, newVal) => {
  console.log(`${attrName} changed from ${oldVal} to ${newVal}`);
};

LookupPrototype.foo = function () {
  return this.shadow.querySelector('input').value;
};

document.registerElement('news-vj-lookup', {
  prototype: LookupPrototype,
});
