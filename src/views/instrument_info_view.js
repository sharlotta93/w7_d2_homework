const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  console.log(instrument)
  var h2 = document.createElement('h2');
  h2.textContent = `${instrument.name}`;
  this.container.innerHTML = '';
  this.container.appendChild(h2);

  var p = document.createElement('p');
  p.textContent = `${instrument.description}`;
  this.container.appendChild(p);

  var instrumentList = document.createElement('ul');
  this.container.appendChild(instrumentList);

  const instrumentArray = instrument.instruments;

  for (const instr of instrumentArray) {
    const oneInstrument = document.createElement("li");
    oneInstrument.textContent = `${instr}`
    console.log(instr);
    instrumentList.appendChild(oneInstrument);
  }
};


module.exports = InstrumentInfoView;
