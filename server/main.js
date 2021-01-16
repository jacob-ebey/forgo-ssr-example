/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/forgo-render-to-string/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/forgo-render-to-string/dist/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

!function(e,r){ true?r(exports):0}(this,function(e){function r(){return(r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var n=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function t(e){"string"!=typeof e&&(e=String(e));for(var r="",n=0;n<e.length;n++){var t=e[n];switch(t){case"<":r+="&lt;";break;case">":r+="&gt;";break;case'"':r+="&quot;";break;case"&":r+="&amp;";break;default:r+=t}}return r}var i=function(e,r){return String(e).replace(/(\n+)/g,"$1"+(r||"\t"))},o=function(e,r,n){return String(e).length>(r||40)||!n&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},a={};function f(e){var r="";for(var t in e){var i=e[t];null!=i&&(r&&(r+=" "),r+="-"==t[0]?t:a[t]||(a[t]=t.replace(/([A-Z])/g,"-$1").toLowerCase()),r+=": ",r+=i,"number"==typeof i&&!1===n.test(t)&&(r+="px"),r+=";")}return r||void 0}function l(e,r){return Array.isArray(r)?r.reduce(l,e):null!=r&&!1!==r&&e.push(r),e}var s={shallow:!0},u=[],c=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;d.render=d;var p=function(e,n){return d(e,r({},s,n))};function d(e,r){return g(e,r)}function g(e,r,n,a,s){if(null==e||"boolean"==typeof e)return"";if(Array.isArray(e))throw new Error("Array vnode not yet supported");var p,d=e.type,h=e.props,v=!1,y=(r=r||{}).pretty,m=y&&"string"==typeof y?y:y?"\t":"";if("object"!=typeof e&&!d)return t(e);if("function"==typeof d){if(v=!0,!r.shallow||!n&&!1!==r.renderRootComponent)return g(d(h).render(h,{}),r,!1!==r.shallowHighOrder,a,s);d=(p=d).displayName||p!==Function&&p.name||function(e){var r=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!r){for(var n=-1,t=u.length;t--;)if(u[t]===e){n=t;break}n<0&&(n=u.push(e)-1),r="UnnamedComponent"+n}return r}(p)}var b,x,w="";if(h){var k=Object.keys(h);r&&!0===r.sortAttributes&&k.sort();for(var S=0;S<k.length;S++){var O=k[S],j=h[O];if("children"!==O){if(!O.match(/[\s\n\\/='"\0<>]/)&&(r&&r.allAttributes||"key"!==O&&"ref"!==O&&"__self"!==O&&"__source"!==O&&"defaultValue"!==O)){if("className"===O){if(h.class)continue;O="class"}else a&&O.match(/^xlink:?./)&&(O=O.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===O){if(h.for)continue;O="for"}"style"===O&&j&&"object"==typeof j&&(j=f(j)),"a"===O[0]&&"r"===O[1]&&"boolean"==typeof j&&(j=String(j));var A=r.attributeHook&&r.attributeHook(O,j,r,v);if(A||""===A)w+=A;else if("dangerouslySetInnerHTML"===O)x=j&&j.__html;else if("textarea"===d&&"value"===O)b=j;else if((j||0===j||""===j)&&"function"!=typeof j){if(!(!0!==j&&""!==j||(j=O,r&&r.xml))){w+=" "+O;continue}if("value"===O){if("select"===d){s=j;continue}"option"===d&&s==j&&(w+=" selected")}w+=" "+O+'="'+t(j)+'"'}}}else b=j}}if(y){var T=w.replace(/^\n\s*/," ");T===w||~T.indexOf("\n")?y&&~w.indexOf("\n")&&(w+="\n"):w=T}if(w="<"+d+w+">",String(d).match(/[\s\n\\/='"\0<>]/))throw new Error(d+" is not a valid HTML tag name in "+w);var _,H=String(d).match(c)||r.voidElements&&String(d).match(r.voidElements),$=[];if(x)y&&o(x)&&(x="\n"+m+i(x,m)),w+=x;else if(null!=b&&l(_=[],b).length){for(var C=y&&~w.indexOf("\n"),E=!1,L=0;L<_.length;L++){var R=_[L];if(null!=R&&!1!==R){var F=g(R,r,!0,"svg"===d||"foreignObject"!==d&&a,s);if(y&&!C&&o(F)&&(C=!0),F)if(y){var M=F.length>0&&"<"!=F[0];E&&M?$[$.length-1]+=F:$.push(F),E=M}else $.push(F)}}if(y&&C)for(var N=$.length;N--;)$[N]="\n"+m+i($[N],m)}if($.length||x)w+=$.join("");else if(r&&r.xml)return w.substring(0,w.length-1)+" />";return!H||_||x?(y&&~w.indexOf("\n")&&(w+="\n"),w+="</"+d+">"):w=w.replace(/>$/," />"),w}d.shallowRender=p,e.default=d,e.render=d,e.renderToStaticMarkup=d,e.renderToString=d,e.shallowRender=p});
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var jsx_runtime_1 = __webpack_require__(/*! forgo/jsx-runtime */ "../forgo/jsx-runtime/index.js");
var todos_1 = __webpack_require__(/*! ./todos */ "./src/todos.tsx");
function App(props) {
    return {
        render: function (props, args) {
            return jsx_runtime_1.jsx(todos_1.TodoList, {}, void 0);
        },
    };
}
exports.default = App;


/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var jsx_runtime_1 = __webpack_require__(/*! forgo/jsx-runtime */ "../forgo/jsx-runtime/index.js");
var fs = __webpack_require__(/*! fs */ "fs");
var path = __webpack_require__(/*! path */ "path");
var http = __webpack_require__(/*! http */ "http");
var forgo_render_to_string_1 = __webpack_require__(/*! forgo-render-to-string */ "./node_modules/forgo-render-to-string/dist/index.js");
var App_1 = __webpack_require__(/*! ./App */ "./src/App.tsx");
var requestListener = function (req, res) {
    if (req.url === "/") {
        res.writeHead(200);
        var html = forgo_render_to_string_1.renderToString(jsx_runtime_1.jsx(App_1["default"], {}, void 0), { pretty: true });
        res.end("<!DOCTYPE html>\n<html lang=\"en-us\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>Forgo SSR Example</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  </head>\n  <body>\n    " + html + "\n    <script src=\"main.js\"></script>\n  </body>\n</html>\n");
        return;
    }
    fs.readFile(path.join(process.cwd(), "dist", req.url), function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
};
var server = http.createServer(requestListener);
server.listen(8080, function () { return console.log("App started on port 8080"); });


/***/ }),

/***/ "./src/todos.tsx":
/*!***********************!*\
  !*** ./src/todos.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.TodoListItem = exports.TodoList = void 0;
var jsx_runtime_1 = __webpack_require__(/*! forgo/jsx-runtime */ "../forgo/jsx-runtime/index.js");
var forgo_1 = __webpack_require__(/*! forgo */ "../forgo/dist/index.js");
function TodoList(props) {
    var todos = [];
    return {
        render: function (props, args) {
            function onTodoAdd(text) {
                todos.push(text);
                forgo_1.rerender(args.element);
            }
            return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("h1", { children: "Forgo Todos" }, void 0),
                    jsx_runtime_1.jsx("ul", { children: todos.map(function (t) { return (jsx_runtime_1.jsx(TodoListItem, { text: t }, void 0)); }) }, void 0),
                    jsx_runtime_1.jsx(AddTodo, { onAdd: onTodoAdd }, void 0)] }, void 0));
        },
    };
}
exports.TodoList = TodoList;
function TodoListItem(props) {
    return {
        render: function () {
            return jsx_runtime_1.jsx("li", { children: props.text }, void 0);
        },
    };
}
exports.TodoListItem = TodoListItem;
function AddTodo(props) {
    var input = {};
    function saveTodo() {
        var inputEl = input.value;
        if (inputEl) {
            props.onAdd(inputEl.value);
            inputEl.value = "";
            inputEl.focus();
        }
    }
    // Add the todo when enter is pressed
    function onKeyPress(e) {
        if (e.key === "Enter") {
            saveTodo();
        }
    }
    return {
        render: function () {
            return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("input", { onkeypress: onKeyPress, type: "text", ref: input }, void 0),
                    jsx_runtime_1.jsx("button", __assign({ onclick: saveTodo }, { children: "Add me!" }), void 0)] }, void 0));
        },
    };
}


/***/ }),

/***/ "../forgo/dist/index.js":
/*!******************************!*\
  !*** ../forgo/dist/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rerender = exports.hydrate = exports.mount = exports.setCustomEnv = exports.shallowRender = exports.renderToString = void 0;
var render_to_string_1 = __webpack_require__(/*! ./render-to-string */ "../forgo/dist/render-to-string.js");
Object.defineProperty(exports, "renderToString", ({ enumerable: true, get: function () { return render_to_string_1.renderToString; } }));
Object.defineProperty(exports, "shallowRender", ({ enumerable: true, get: function () { return render_to_string_1.shallowRender; } }));
/*
  The element types we care about.
  As defined by the standards.
*/
const ELEMENT_NODE_TYPE = 1;
const ATTRIBUTE_NODE_TYPE = 2;
const TEXT_NODE_TYPE = 3;
const documentObject = globalThis ? globalThis.document : document;
const windowObject = globalThis ? globalThis : window;
let env = {
    window: windowObject,
    document: documentObject,
};
function setCustomEnv(value) {
    env = value;
}
exports.setCustomEnv = setCustomEnv;
/*
  This is the main render function.
  forgoNode is the node to render.
  
  node is an existing node to which the element needs to be rendered (if rerendering)
  May not always be passed in, like for first render or when no compatible node exists.

  statesToAttach is the list of Component State objects which will be attached to the element.
*/
function render(forgoNode, node, pendingAttachStates, fullRerender) {
    // Just a string
    if (!isForgoElement(forgoNode)) {
        return renderString(stringOfPrimitiveNode(forgoNode), node, pendingAttachStates, fullRerender);
    }
    // HTML Element
    else if (typeof forgoNode.type === "string") {
        return renderDOMElement(forgoNode, node, pendingAttachStates, fullRerender);
    }
    // Custom Component.
    // We don't renderChildren since that is the CustomComponent's prerogative.
    else {
        return renderCustomComponent(forgoNode, node, pendingAttachStates, fullRerender);
    }
}
/*
  Render a string.
  
  Such as in the render function below:
  function MyComponent() {
    return {
      render() {
        return "Hello world"
      }
    }
  }
*/
function renderString(text, node, pendingAttachStates, fullRerender) {
    var _a;
    // Text nodes will always be recreated
    const textNode = env.document.createTextNode(text);
    attachProps(text, textNode, pendingAttachStates);
    if (node) {
        // If there are old component states, we might need to unmount some of em.
        // After comparing with the new states.
        const oldComponentStates = (_a = getForgoState(node)) === null || _a === void 0 ? void 0 : _a.components;
        if (oldComponentStates) {
            unloadIncompatibleStates(pendingAttachStates, oldComponentStates);
        }
        node.replaceWith(textNode);
    }
    return { node: textNode };
}
/*
  Render a DOM element.
  
  Such as in the render function below:
  function MyComponent() {
    return {
      render() {
        return <div>Hello world</div>
      }
    }
  }
*/
function renderDOMElement(forgoElement, node, pendingAttachStates, fullRerender) {
    var _a;
    if (node) {
        let nodeToBindTo;
        // If there are old component states, we might need to unmount some of em.
        // After comparing with the new states.
        const oldComponentStates = (_a = getForgoState(node)) === null || _a === void 0 ? void 0 : _a.components;
        if (oldComponentStates) {
            unloadIncompatibleStates(pendingAttachStates, oldComponentStates);
        }
        // if the nodes are not of the same of the same type, we need to replace.
        if (node.nodeType === TEXT_NODE_TYPE ||
            (node.tagName &&
                node.tagName.toLowerCase() !== forgoElement.type)) {
            const newElement = env.document.createElement(forgoElement.type);
            node.replaceWith(newElement);
            nodeToBindTo = newElement;
        }
        else {
            nodeToBindTo = node;
        }
        attachProps(forgoElement, nodeToBindTo, pendingAttachStates);
        renderChildNodes(forgoElement, nodeToBindTo, fullRerender);
        return { node: nodeToBindTo };
    }
    else {
        // There was no node passed in, so create a new element.
        const newElement = env.document.createElement(forgoElement.type);
        if (forgoElement.props.ref) {
            forgoElement.props.ref.value = newElement;
        }
        attachProps(forgoElement, newElement, pendingAttachStates);
        renderChildNodes(forgoElement, newElement, fullRerender);
        return { node: newElement };
    }
}
/*
  Render a Custom Component
  Such as <MySideBar size="large" />
*/
function renderCustomComponent(forgoElement, node, pendingAttachStates, fullRerender) {
    if (node) {
        const state = getExistingForgoState(node);
        const componentIndex = pendingAttachStates.length;
        const savedComponentState = state.components[componentIndex];
        const hasCompatibleState = savedComponentState && savedComponentState.ctor === forgoElement.type;
        if (!hasCompatibleState) {
            // We have to create a new component
            const args = { element: { componentIndex } };
            const ctor = forgoElement.type;
            const component = ctor(forgoElement.props);
            // Create new component state
            // ... and push it to pendingAttachStates
            const componentState = {
                key: forgoElement.key,
                ctor,
                component,
                props: forgoElement.props,
                args,
            };
            const statesToAttach = pendingAttachStates.concat(componentState);
            // Create an element by rendering the component
            const newForgoElement = component.render(forgoElement.props, args);
            // Pass it on for rendering...
            return render(newForgoElement, node, statesToAttach, fullRerender);
        }
        // We have compatible state, and this is a rerender
        else {
            if (fullRerender ||
                havePropsChanged(savedComponentState.props, forgoElement.props)) {
                const args = {
                    element: { componentIndex: pendingAttachStates.length },
                };
                // Since we have compatible state already stored,
                // we'll push the savedComponentState into pending states for later attachment.
                const statesToAttach = pendingAttachStates.concat(Object.assign(Object.assign({}, savedComponentState), { props: forgoElement.props }));
                // Get a new element by calling render on existing component.
                const newForgoElement = savedComponentState.component.render(forgoElement.props, args);
                // Pass it on for rendering...
                return render(newForgoElement, node, statesToAttach, fullRerender);
            }
            else {
                return { node };
            }
        }
    }
    // First time render
    else {
        const args = { element: { componentIndex: 0 } };
        const ctor = forgoElement.type;
        const component = ctor(forgoElement.props);
        // We'll have to create a new component state
        // ... and push it to pendingAttachStates
        const componentState = {
            key: forgoElement.key,
            ctor,
            component,
            props: forgoElement.props,
            args,
        };
        const statesToAttach = pendingAttachStates.concat(componentState);
        const newForgoElement = component.render(forgoElement.props, args);
        // We have no node to render to yet. So pass undefined for the node.
        return render(newForgoElement, undefined, statesToAttach, fullRerender);
    }
}
/*
  Loop through and render child nodes of a forgo DOM element.

  In the following example, if the forgoElement represents the 'parent' node, render the child nodes.
  eg:
    <div id="parent">
      <MyTopBar />
      <p id="first-child">some content goes here...</p>
      <MyFooter />
    </div>

  The parentElement is the actual DOM element which corresponds to forgoElement.
*/
function renderChildNodes(forgoElement, parentElement, fullRerender) {
    const { children: forgoChildrenObj } = forgoElement.props;
    const childNodes = parentElement.childNodes;
    // Children will not be an array if single item
    const forgoChildren = (forgoChildrenObj !== undefined
        ? Array.isArray(forgoChildrenObj)
            ? forgoChildrenObj
            : [forgoChildrenObj]
        : []);
    let forgoChildIndex = 0;
    if (forgoChildren) {
        for (forgoChildIndex = 0; forgoChildIndex < forgoChildren.length; forgoChildIndex++) {
            const forgoChild = forgoChildren[forgoChildIndex];
            // We have to find a matching node candidate, if any.
            if (!isForgoElement(forgoChild)) {
                // If the first node is a text node, we could pass that along.
                // No need to replace here, callee does that.
                if (childNodes[forgoChildIndex] &&
                    childNodes[forgoChildIndex].nodeType === TEXT_NODE_TYPE) {
                    render(stringOfPrimitiveNode(forgoChild), childNodes[forgoChildIndex], [], fullRerender);
                }
                // But otherwise, don't pass a replacement node. Just insert instead.
                else {
                    const { node } = render(stringOfPrimitiveNode(forgoChild), undefined, [], fullRerender);
                    parentElement.insertBefore(node, childNodes[forgoChildIndex]);
                }
            }
            else {
                const findResult = typeof forgoChild.type === "string"
                    ? findReplacementCandidateForDOMElement(forgoChild, childNodes, forgoChildIndex)
                    : findReplacementCandidateForCustomComponent(forgoChild, childNodes, forgoChildIndex);
                if (findResult.found) {
                    for (let i = forgoChildIndex; i < findResult.index; i++) {
                        unloadNode(parentElement, childNodes[i]);
                    }
                    render(forgoChild, childNodes[forgoChildIndex], [], fullRerender);
                }
                else {
                    const { node } = render(forgoChild, undefined, [], fullRerender);
                    if (childNodes.length > forgoChildIndex) {
                        parentElement.insertBefore(node, childNodes[forgoChildIndex]);
                    }
                    else {
                        parentElement.appendChild(node);
                    }
                }
            }
        }
    }
    // Now we gotta remove old nodes which aren't being used.
    // Everything after forgoChildIndex must go.
    for (let i = forgoChildIndex; i < childNodes.length; i++) {
        unloadNode(parentElement, childNodes[i]);
    }
}
/*
  Unloads components from a node list
  This does:
  a) Remove the node
  b) Calls unload on all attached components
*/
function unloadNode(parentElement, node) {
    parentElement.removeChild(node);
    const state = getForgoState(node);
    if (state) {
        for (const componentState of state.components) {
            if (componentState.component.unmount) {
                componentState.component.unmount();
            }
        }
    }
}
/*
  When states is attached to a new node,
  or when states are reattached, some of the old component states need to go away.
  The corresponding components will need to be unmounted.

  While rendering, the component gets reused if the ctor is the same.
  If the ctor is different, the component is discarded. And hence needs to be unmounted.
  So we check the ctor type in old and new.
*/
function unloadIncompatibleStates(newStates, oldStates) {
    let i = 0;
    for (const newState of newStates) {
        if (oldStates.length > i) {
            const oldState = oldStates[i];
            if (oldState.ctor !== newState.ctor) {
                break;
            }
            i++;
        }
        else {
            break;
        }
    }
    for (let j = i; j < oldStates.length; j++) {
        const oldState = oldStates[j];
        if (oldState.component.unmount) {
            oldState.component.unmount();
        }
    }
}
/*
  When we try to find replacement candidates for DOM nodes,
  we try to:
    a) match by the key
    b) match by the tagname
*/
function findReplacementCandidateForDOMElement(forgoElement, nodes, searchNodesFrom) {
    if (forgoElement.key) {
        for (let i = searchNodesFrom; i < nodes.length; i++) {
            const node = nodes[i];
            const stateOnNode = getForgoState(node);
            if ((stateOnNode === null || stateOnNode === void 0 ? void 0 : stateOnNode.key) === forgoElement.key) {
                return { found: true, index: i };
            }
        }
        return { found: false };
    }
    else {
        for (let i = searchNodesFrom; i < nodes.length; i++) {
            const node = nodes[i];
            if (node.nodeType === ELEMENT_NODE_TYPE) {
                const element = node;
                if (element.tagName.toLowerCase() === forgoElement.type) {
                    return { found: true, index: i };
                }
            }
        }
        return { found: false };
    }
}
/*
  When we try to find replacement candidates for Custom Components,
  we try to:
    a) match by the key
    b) match by the component constructor
*/
function findReplacementCandidateForCustomComponent(forgoElement, nodes, searchNodesFrom) {
    if (forgoElement.key) {
        for (let i = searchNodesFrom; i < nodes.length; i++) {
            const node = nodes[i];
            const stateOnNode = getForgoState(node);
            if (stateOnNode && stateOnNode.components.length > 0) {
                if (stateOnNode.components[0].key === forgoElement.key) {
                    return { found: true, index: i };
                }
            }
        }
        return { found: false };
    }
    else {
        for (let i = searchNodesFrom; i < nodes.length; i++) {
            const node = nodes[i];
            const stateOnNode = getForgoState(node);
            if (stateOnNode && stateOnNode.components.length > 0) {
                if (stateOnNode.components[0].ctor === forgoElement.type) {
                    return { found: true, index: i };
                }
            }
        }
        return { found: false };
    }
}
/*
  Attach props from the forgoElement on to the DOM node.
  We also need to attach states from pendingAttachStates
*/
function attachProps(forgoNode, node, pendingAttachStates) {
    if (isForgoElement(forgoNode)) {
        // We're gonna keep this simple.
        // Attach everything as is.
        const entries = Object.entries(forgoNode.props);
        for (const [key, value] of entries) {
            if (key !== "children") {
                node[key] = value;
            }
        }
    }
    // We have to inject node into the args object.
    // components are already holding a reference to the args object.
    // They don't know yet that args.element.node is undefined.
    for (const state of pendingAttachStates) {
        state.args.element.node = node;
    }
    // Now attach the internal forgo state.
    const state = {
        key: isForgoElement(forgoNode) ? forgoNode.key : undefined,
        components: pendingAttachStates,
    };
    setForgoState(node, state);
}
/*
  Compare old props and new props.
  We don't rerender if props remain the same.
*/
function havePropsChanged(oldProps, newProps) {
    const oldKeys = Object.keys(oldProps);
    const newKeys = Object.keys(newProps);
    return (oldKeys.length !== newKeys.length ||
        oldKeys.some((key) => oldProps[key] !== newProps[key]));
}
/*
  Mount will render the DOM as a child of the specified container element.
*/
function mount(forgoNode, parentElement) {
    if (parentElement) {
        const { node } = render(forgoNode, undefined, [], true);
        parentElement.appendChild(node);
    }
    else {
        throw new Error(`Mount was called on a non-element (${parentElement}).`);
    }
}
exports.mount = mount;
/*
  Mount will hydrate the DOM as a child of the specified container element.
*/
function hydrate(forgoNode, parentElement, options) {
    const opts = options || {};
    if (parentElement) {
        let root;
        if (typeof opts.root === "function") {
            root = opts.root();
        }
        else if (typeof opts.root === "object") {
            root = opts.root;
        }
        else {
            root = parentElement.querySelector(opts.root || "[forgo-root]");
        }
        if (!root) {
            throw new Error("Could not locate root to hydrate into.");
        }
        const { node } = render(forgoNode, undefined, [], false);
        parentElement.replaceChild(node, root);
    }
    else {
        throw new Error(`Mount was called on a non-element (${parentElement}).`);
    }
}
exports.hydrate = hydrate;
/*
  Code inside a component will call rerender whenever it wants to rerender.
  The following function is what they'll need to call.

  Given only a DOM element, how do we know what component to render?
  We'll fetch all that information from the state information stored on the element.

  This is attached to a node inside a NodeAttachedState structure.
*/
function rerender(element, props = undefined, fullRerender = true) {
    if (element && element.node) {
        const state = getForgoState(element.node);
        if (state) {
            const component = state.components[element.componentIndex];
            const effectiveProps = typeof props !== "undefined" ? props : component.props;
            const forgoNode = component.component.render(effectiveProps, component.args);
            const statesToAttach = state.components
                .slice(0, element.componentIndex)
                .concat(Object.assign(Object.assign({}, component), { props: effectiveProps }));
            render(forgoNode, element.node, statesToAttach, fullRerender);
        }
        else {
            throw new Error(`Rerender was called on an element which was never seen before.`);
        }
    }
}
exports.rerender = rerender;
/*
  ForgoNodes can be primitive types.
  Convert all primitive types to their string representation.
*/
function stringOfPrimitiveNode(node) {
    return typeof node === "undefined" ? "undefined" : node.toString();
}
/*
  Nodes could be strings, numbers, booleans etc.
  Treat them as strings.
*/
function isForgoElement(node) {
    return (typeof node !== "undefined" && node.__is_forgo_element__ === true);
}
/*
  Get the state (NodeAttachedState) saved into an element.
*/
function getForgoState(node) {
    return node.__forgo;
}
/*
  Same as above, but will never be undefined. (Caller makes sure.)
*/
function getExistingForgoState(node) {
    return node.__forgo;
}
/*
  Sets the state (NodeAttachedState) on an element.
*/
function setForgoState(node, state) {
    node.__forgo = state;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../forgo/dist/render-to-string.js":
/*!*****************************************!*\
  !*** ../forgo/dist/render-to-string.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shallowRender = exports.renderToString = void 0;
const { encodeEntities, indent, isLargeString, styleObjToCss, getChildren, } = __webpack_require__(/*! preact-render-to-string/src/util */ "../forgo/node_modules/preact-render-to-string/src/util.js");
const SHALLOW = { shallow: true };
// components without names, kept as a hash for later comparison to return consistent UnnamedComponentXX names.
const UNNAMED = [];
const VOID_ELEMENTS = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
/**
 * Render Preact JSX + Components to an HTML string.
 */
renderToString.render = renderToString;
let shallowRender = (vnode, options) => renderToString(vnode, Object.assign(Object.assign({}, options), SHALLOW));
exports.shallowRender = shallowRender;
function renderToString(vnode, options) {
    const res = _renderToString(vnode, options);
    return res;
}
exports.renderToString = renderToString;
/** The default export is an alias of `render()`. */
function _renderToString(vnode, options, inner, isSvgMode, selectValue) {
    if (vnode == null || typeof vnode === "boolean") {
        return "";
    }
    // wrap array nodes in Fragment
    if (Array.isArray(vnode)) {
        // vnode = createElement(Fragment, null, vnode);
        throw new Error("Array vnode not yet supported");
    }
    const forgoNode = vnode;
    let nodeName = forgoNode.type, props = forgoNode.props, isComponent = false;
    let opts = options || {};
    let pretty = opts.pretty, indentChar = pretty && typeof pretty === "string" ? pretty : "\t";
    // #text nodes
    if (typeof vnode !== "object" && !nodeName) {
        return encodeEntities(vnode);
    }
    // components
    if (typeof nodeName === "function") {
        isComponent = true;
        if (opts.shallow && (inner || opts.renderRootComponent === false)) {
            nodeName = getComponentName(nodeName);
        }
        else if (false /*nodeName === Fragment*/) {}
        else {
            let rendered;
            // stateless functional components
            rendered = nodeName
                .call(null, props)
                .render.call(null, props, null);
            return _renderToString(rendered, opts, opts.shallowHighOrder !== false, isSvgMode, selectValue);
        }
    }
    // render JSX to HTML
    let s = "", propChildren, html;
    if (props) {
        let attrs = Object.keys(props);
        for (let i = 0; i < attrs.length; i++) {
            let name = attrs[i], v = props[name];
            if (name === "children") {
                propChildren = v;
                continue;
            }
            if (name.match(/[\s\n\\/='"\0<>]/))
                continue;
            if ( true &&
                (name === "key" ||
                    name === "ref" ||
                    name === "__self" ||
                    name === "__source" ||
                    name === "defaultValue"))
                continue;
            if (name === "className") {
                if (props.class)
                    continue;
                name = "class";
            }
            else if (isSvgMode && name.match(/^xlink:?./)) {
                name = name.toLowerCase().replace(/^xlink:?/, "xlink:");
            }
            if (name === "htmlFor") {
                if (props.for)
                    continue;
                name = "for";
            }
            if (name === "style" && v && typeof v === "object") {
                v = styleObjToCss(v);
            }
            // always use string values instead of booleans for aria attributes
            // also see https://github.com/preactjs/preact/pull/2347/files
            if (name[0] === "a" && name[1] === "r" && typeof v === "boolean") {
                v = String(v);
            }
            if (name === "dangerouslySetInnerHTML") {
                html = v && v.__html;
            }
            else if (nodeName === "textarea" && name === "value") {
                // <textarea value="a&b"> --> <textarea>a&amp;b</textarea>
                propChildren = v;
            }
            else if ((v || v === 0 || v === "") && typeof v !== "function") {
                if (v === true || v === "") {
                    v = name;
                    // in non-xml mode, allow boolean attributes
                    if (true) {
                        s += " " + name;
                        continue;
                    }
                }
                if (name === "value") {
                    if (nodeName === "select") {
                        selectValue = v;
                        continue;
                    }
                    else if (nodeName === "option" && selectValue == v) {
                        s += ` selected`;
                    }
                }
                s += ` ${name}="${encodeEntities(v)}"`;
            }
        }
    }
    // account for >1 multiline attribute
    if (pretty) {
        let sub = s.replace(/^\n\s*/, " ");
        if (sub !== s && !~sub.indexOf("\n"))
            s = sub;
        else if (pretty && ~s.indexOf("\n"))
            s += "\n";
    }
    s = `<${nodeName}${s}>`;
    if (String(nodeName).match(/[\s\n\\/='"\0<>]/))
        throw new Error(`${nodeName} is not a valid HTML tag name in ${s}`);
    let isVoid = String(nodeName).match(VOID_ELEMENTS);
    let pieces = [];
    let children = undefined;
    if (html) {
        // if multiline, indent.
        if (pretty && isLargeString(html)) {
            html = "\n" + indentChar + indent(html, indentChar);
        }
        s += html;
    }
    else if (propChildren != null &&
        getChildren((children = []), propChildren).length) {
        let hasLarge = pretty && !!~s.indexOf("\n");
        let lastWasText = false;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child != null && child !== false) {
                let childSvgMode = nodeName === "svg"
                    ? true
                    : nodeName === "foreignObject"
                        ? false
                        : isSvgMode, ret = _renderToString(child, opts, opts.shallowHighOrder !== false, childSvgMode, selectValue);
                if (pretty && !hasLarge && isLargeString(ret))
                    hasLarge = true;
                // Skip if we received an empty string
                if (ret) {
                    if (pretty) {
                        let isText = ret.length > 0 && ret[0] != "<";
                        // We merge adjacent text nodes, otherwise each piece would be printed
                        // on a new line.
                        if (lastWasText && isText) {
                            pieces[pieces.length - 1] += ret;
                        }
                        else {
                            pieces.push(ret);
                        }
                        lastWasText = isText;
                    }
                    else {
                        pieces.push(ret);
                    }
                }
            }
        }
        if (pretty && hasLarge) {
            for (let i = pieces.length; i--;) {
                pieces[i] = "\n" + indentChar + indent(pieces[i], indentChar);
            }
        }
    }
    if (pieces.length || html) {
        s += pieces.join("");
    }
    else if (opts && opts.xml) {
        return s.substring(0, s.length - 1) + " />";
    }
    if (isVoid && !children && !html) {
        s = s.replace(/>$/, " />");
    }
    else {
        if (pretty && ~s.indexOf("\n"))
            s += "\n";
        s += `</${nodeName}>`;
    }
    return s;
}
function getComponentName(component) {
    return (component.displayName ||
        (component !== Function && component.name) ||
        getFallbackComponentName(component));
}
function getFallbackComponentName(component) {
    let str = Function.prototype.toString.call(component), name = (str.match(/^\s*function\s+([^( ]+)/) || "")[1];
    if (!name) {
        // search for an existing indexed name for the given component:
        let index = -1;
        for (let i = UNNAMED.length; i--;) {
            if (UNNAMED[i] === component) {
                index = i;
                break;
            }
        }
        // not found, create a new indexed name:
        if (index < 0) {
            index = UNNAMED.push(component) - 1;
        }
        name = `UnnamedComponent${index}`;
    }
    return name;
}
//# sourceMappingURL=render-to-string.js.map

/***/ }),

/***/ "../forgo/jsx-runtime/index.js":
/*!*************************************!*\
  !*** ../forgo/jsx-runtime/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsxs": () => /* binding */ jsxs,
/* harmony export */   "jsx": () => /* binding */ jsx
/* harmony export */ });
function jsxs(type, props, key) {
  return { type, props, key, __is_forgo_element__: true };
}
function jsx(type, props, key) {
  return { type, props, key, __is_forgo_element__: true };
}


/***/ }),

/***/ "../forgo/node_modules/preact-render-to-string/src/util.js":
/*!*****************************************************************!*\
  !*** ../forgo/node_modules/preact-render-to-string/src/util.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IS_NON_DIMENSIONAL": () => /* binding */ IS_NON_DIMENSIONAL,
/* harmony export */   "encodeEntities": () => /* binding */ encodeEntities,
/* harmony export */   "indent": () => /* binding */ indent,
/* harmony export */   "isLargeString": () => /* binding */ isLargeString,
/* harmony export */   "styleObjToCss": () => /* binding */ styleObjToCss,
/* harmony export */   "assign": () => /* binding */ assign,
/* harmony export */   "getChildren": () => /* binding */ getChildren
/* harmony export */ });
// DOM properties that should NOT have "px" added when numeric
const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

function encodeEntities(s) {
	if (typeof s !== 'string') s = String(s);
	let out = '';
	for (let i = 0; i < s.length; i++) {
		let ch = s[i];
		// prettier-ignore
		switch (ch) {
			case '<': out += '&lt;'; break;
			case '>': out += '&gt;'; break;
			case '"': out += '&quot;'; break;
			case '&': out += '&amp;'; break;
			default: out += ch;
		}
	}
	return out;
}

let indent = (s, char) =>
	String(s).replace(/(\n+)/g, '$1' + (char || '\t'));

let isLargeString = (s, length, ignoreLines) =>
	String(s).length > (length || 40) ||
	(!ignoreLines && String(s).indexOf('\n') !== -1) ||
	String(s).indexOf('<') !== -1;

const JS_TO_CSS = {};

// Convert an Object style to a CSSText string
function styleObjToCss(s) {
	let str = '';
	for (let prop in s) {
		let val = s[prop];
		if (val != null) {
			if (str) str += ' ';
			// str += jsToCss(prop);
			str +=
				prop[0] == '-'
					? prop
					: JS_TO_CSS[prop] ||
					  (JS_TO_CSS[prop] = prop.replace(/([A-Z])/g, '-$1').toLowerCase());
			str += ': ';
			str += val;
			if (typeof val === 'number' && IS_NON_DIMENSIONAL.test(prop) === false) {
				str += 'px';
			}
			str += ';';
		}
	}
	return str || undefined;
}

/**
 * Copy all properties from `props` onto `obj`.
 * @param {object} obj Object onto which properties should be copied.
 * @param {object} props Object from which to copy properties.
 * @returns {object}
 * @private
 */
function assign(obj, props) {
	for (let i in props) obj[i] = props[i];
	return obj;
}

/**
 * Get flattened children from the children prop
 * @param {Array} accumulator
 * @param {any} children A `props.children` opaque object.
 * @returns {Array} accumulator
 * @private
 */
function getChildren(accumulator, children) {
	if (Array.isArray(children)) {
		children.reduce(getChildren, accumulator);
	} else if (children != null && children !== false) {
		accumulator.push(children);
	}
	return accumulator;
}


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/server.tsx");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map