(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{18:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a,r,c,o,i=n(1),s=n.n(i),l=n(9),u=n.n(l),d=(n(18),n(12)),b=n(4),f=n(5),h=n(7),j=n(6),p=n(25),m=n(10),x=n(2),O=n(3),g=O.a.form(a||(a=Object(x.a)(["\n  width: 350px;\n  padding: 5px;\n  border: 2px solid black;\n"]))),C=O.a.label(r||(r=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  margin-bottom: 10px;\n  font-size: 20px;\n"]))),v=n(0),y=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(f.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(g,{onSubmit:this.handleSubmit,children:[Object(v.jsxs)(C,{children:["Name",Object(v.jsx)("input",{value:this.state.name,onChange:this.handleChange,autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(v.jsxs)(C,{children:["Number",Object(v.jsx)("input",{value:this.state.number,onChange:this.handleChange,autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(v.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(i.Component),S=O.a.label(c||(c=Object(x.a)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n"]))),k=O.a.input(o||(o=Object(x.a)(["\n  margin-left: 5px;\n"])));var w,A=function(t){var e=t.filterBlur,n=t.filterChange,a=t.filter;return Object(v.jsxs)(S,{children:["Find contacts by name:",Object(v.jsx)(k,{value:a,onChange:n,onBlur:e})]})},D=O.a.li(w||(w=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 450px;\n  font-size: 20px;\n  border: 2px solid tomato;\n  border-radius: 5px;\n  box-shadow: 0px 2px 3px 3px rgba(34, 60, 80, 0.4);\n"])));var z,B=function(t){var e=t.id,n=t.name,a=t.number,r=t.onDeleteContact;return Object(v.jsxs)(D,{children:[n,": ",a,Object(v.jsx)("button",{type:"button",onClick:function(){return r(e)},children:"Delete"})]})},J=O.a.ul(z||(z=Object(x.a)(["\n  list-style: none;\n  padding: 0;\n"])));var N,F=function(t){var e=t.list,n=t.onDeleteContact;return Object(v.jsx)(J,{children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(v.jsx)(B,{id:e,name:a,number:r,onDeleteContact:n},e)}))})},I=O.a.div(N||(N=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),M=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,r={id:Object(p.a)(),name:n,number:a},c=!1;t.state.contacts.forEach((function(t){t.name!==n||(c=!0)})),c?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(d.a)(t.contacts),[r])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterChange=function(e){var n=e.target.value;t.setState({filter:n})},t.filterBlur=function(e){t.setState({filter:""})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(v.jsxs)(I,{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(y,{addContact:this.addContact}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(A,{filterBlur:this.filterBlur,filterChange:this.filterChange,filter:t}),Object(v.jsx)(F,{list:e,onDeleteContact:this.deleteContact})]})}}]),n}(i.Component);u.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.968759da.chunk.js.map