"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
;// CONCATENATED MODULE: ./src/components/Basket/index.js




const ShoppingBasket = ({ basket , removeItem  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu, {
            children: ({ isOpen  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                            isActive: isOpen,
                            as: react_.Button,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                flexDirection: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                                        as: fi_namespaceObject.FiShoppingCart
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        borderRadius: 50,
                                        w: "1.3em",
                                        h: "1.3em",
                                        backgroundColor: "lightgrey",
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: ".8em",
                                        ml: ".5em",
                                        children: basket.length
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuList, {
                            p: "1em",
                            children: basket.length < 1 ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                children: "Your basket is empty"
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    basket.map((item)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                            display: "flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                                    src: item.image,
                                                    w: {
                                                        base: "3em"
                                                    },
                                                    height: "100%",
                                                    pr: ".5em"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                                    flexDirection: "column",
                                                    pb: ".5em",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                            fontWeight: "800",
                                                            fontSize: {
                                                                base: ".8em"
                                                            },
                                                            children: [
                                                                "\xa3",
                                                                item.price * item.quantity
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                            fontSize: {
                                                                base: ".8em"
                                                            },
                                                            children: item.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                                            flexDirection: "row",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                                fontSize: {
                                                                    base: ".8em"
                                                                },
                                                                children: [
                                                                    "Qty: ",
                                                                    item.quantity
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                            onClick: ()=>removeItem(item)
                                                            ,
                                                            mt: ".5em",
                                                            w: {
                                                                base: "10em"
                                                            },
                                                            h: "auto",
                                                            p: ".5em",
                                                            color: "grey",
                                                            fontSize: {
                                                                base: ".5em"
                                                            },
                                                            children: "REMOVE ITEM"
                                                        })
                                                    ]
                                                })
                                            ]
                                        });
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        children: "Checkout"
                                    })
                                ]
                            })
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const Basket = (ShoppingBasket);

;// CONCATENATED MODULE: ./src/components/Navigation/index.js




const Navigation = ({ basket , removeItem  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        flexDirection: "row",
        borderBottom: "solid 1px #ededed",
        padding: ".5em",
        justifyContent: "flex-end",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                flexGrow: 1,
                ml: 2,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                    children: "clothify"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Basket, {
                basket: basket,
                removeItem: removeItem
            })
        ]
    });
};
/* harmony default export */ const components_Navigation = (Navigation);

;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    const { 0: basket , 1: setBasket  } = (0,external_react_.useState)([]);
    function updateBasket(itemToAdd) {
        const existingItem = basket.find((item)=>{
            return item.id === itemToAdd.id;
        });
        if (existingItem) {
            existingItem.quantity++;
        } else {
            setBasket([
                ...basket,
                itemToAdd
            ]);
        }
    }
    function removeItem(itemToRemove) {
        const indexToRemove = basket.findIndex((item)=>{
            return item.id === itemToRemove.id;
        });
        if (indexToRemove > 0) {
            setBasket([
                ...basket.slice(0, indexToRemove),
                ...basket.slice(indexToRemove + 1), 
            ]);
        } else {
            setBasket([
                ...basket.slice(indexToRemove + 1)
            ]);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {
                basket: basket,
                removeItem: removeItem
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    updateBasket: updateBasket
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(729));
module.exports = __webpack_exports__;

})();