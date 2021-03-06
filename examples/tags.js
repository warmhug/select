var React = require('react');
var Select = require('rc-select');
var Option = Select.Option;
require('rc-select/assets/index.css');
var children = [];
for (var i = 10; i < 36; i++) {
  children.push(<Option value={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log('selected ' + value);
}

var style = '.rc-select-menu {max-height:200px;overflow:auto;}';

var c2 = (
  <div>
    <h1>tags select（scroll the menu）</h1>
    <div style={{width: 300}}>
      <style>
      {style}
      </style>
      <Select tags value={['name2', 'name3']} onChange={handleChange}>
    {children}
      </Select>
    </div>
  </div>
);

React.render(c2, document.getElementById('__react-content'));
