"use strict";(self.webpackChunkproj3=self.webpackChunkproj3||[]).push([[143],{3143:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(2791),i=n(5671),u=n(3144),a=n(136),l=n(8557),o=(n(5713),n(364)),c=n(1924),d=n(177),s=n(1358),h=n(8577),p=(n(4897),n(184)),f=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.inputValue,n=e.list,r=e.handleInputChange,i=e.handleBtnClick,u=e.handleItemDelete;return(0,p.jsxs)("div",{style:{margin:"7px",float:"left"},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(d.Z,{value:t,placeholder:"ToDo List",style:{width:"75vw",maxWidth:"300px",marginRight:"5px"},onChange:r}),(0,p.jsx)(s.Z,{type:"primary",onClick:i,children:"Add"})]}),(0,p.jsx)(h.ZP,{style:{marginTop:"10px",width:"75vw",maxWidth:"300px",background:"white"},bordered:!0,dataSource:n,renderItem:function(e,t){return(0,p.jsx)(h.ZP.Item,{extra:(0,p.jsx)(s.Z,{type:"primary",danger:!0,size:"small",style:{marginLeft:"auto"},onClick:function(){u(t)},children:"Del"}),children:e})}})]})}},{key:"componentDidMount",value:function(){}}]),n}(r.Component);f.defaultProps={urlPara:"0"};var g=(0,o.$j)((function(e){return{inputValue:e.get("demo").get("inputValue"),list:e.get("demo").get("list")}}),(function(e){return{handleStoreChange:function(t){e(c.cq.getTodoList(t))},handleInputChange:function(t){e(c.cq.getInputChangeAction(t.target.value))},handleBtnClick:function(){e(c.cq.getAddItemAction())},handleItemDelete:function(t){e(c.cq.getDeleteItemAction(t))}}}))(f),m=n(6871),x=(0,o.$j)((function(e){return{}}),(function(e){return{}}))((function(){var e=(0,m.UO)().id;return(0,p.jsx)(g,{urlPara:e})}))}}]);
//# sourceMappingURL=143.c1b0cb7a.chunk.js.map