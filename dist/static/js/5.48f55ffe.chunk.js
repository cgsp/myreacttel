webpackJsonp([5],{556:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),c=n.n(a),u=n(12),p=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),s=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.toThird=e.toThird.bind(e),e}return i(t,e),p(t,[{key:"componentWillMount",value:function(){console.log(this.props.match.params.location),console.log(this.props.match.params.id),console.log(this.props)}},{key:"toThird",value:function(){this.props.history.push({pathname:"/sanying",state:{type:"sex",name:"hahhah"}})}},{key:"toOne",value:function(){}},{key:"render",value:function(){return[c.a.createElement("button",{key:"btn1",onClick:this.toThird},"\u53bb\u4e09\u8425"),c.a.createElement("button",{key:"btn2",onClick:this.toOne},"\u53bb\u4e00\u8425"),c.a.createElement("div",{key:"div"},"\u6211\u662f\u4e8c\u8425")]}}]),t}(a.Component);s.propTypes={match:u.PropTypes.object,history:u.PropTypes.object},t.default=s}});