import React, { Component, useState, useLayoutEffect } from 'react';
import ShopifyBuy from 'shopify-buy';
import useScript from './hooks/useScript';
import Preloader from './preloader.jsx';
var i = 0;
var uiVar = null;

export default function MerchPage(){
  const [data, setData] = useState([]);

  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  //useScript(scriptURL);

  useLayoutEffect(() => {
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        var client = ShopifyBuy.buildClient({
          domain: 'happy-otter-brewing.myshopify.com',
          storefrontAccessToken: '94cb5fba88961365452c67c7eafcc4eb',
        });

        if (uiVar == null) {
          window.ShopifyBuy.UI.onReady(client).then(function (ui) {
            uiVar = ui;
            setData(ui);
          });
        } else {
          var remNode = document.getElementById('collection-component-' + i);
          if (remNode == null) {
            //happens when switching between pages
            var remNode = document.getElementById('collection-component-0');
          }
          if (remNode != null) {
            remNode.remove();
            i = i+1;
            var node = document.createElement("div");
            node.setAttribute("id", "collection-component-" + i);
            document.getElementById('merch-area-wrapper').appendChild(node);
            createUIComponent();
          }
        }
      } 
    }
    else {
      setData(i);
    }
  });  

  return (
    <div id='merch-area-wrapper'>
      <div className='section-padding40' id='collection-component-0'></div>
    </div>
  );

};

function createUIComponent() {
    uiVar.createComponent('collection', {
    id: '263228915756',
    node: document.getElementById('collection-component-' + i),
    moneyFormat: '%24%7B%7Bamount%7D%7D',
    options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px",
              "width": "calc(25% - 20px)"
            },
            "img": {
              "height": "calc(100% - 15px)",
              "position": "absolute",
              "left": "0",
              "right": "0",
              "top": "0"
            },
            "imgWrapper": {
              "padding-top": "calc(75% + 15px)",
              "position": "relative",
              "height": "0"
            }
          },
          "button": {
            "font-family": "Open Sans, sans-serif",
            ":hover": {
              "background-color": "#4d29ff"
            },
            "background-color": "#2d18a0",
            ":focus": {
              "background-color": "#4d29ff"
            }
          }
        },
        "buttonDestination": "modal",
        "contents": {
          "options": false
        },
        "text": {
          "button": "View product"
        },
        "googleFonts": [
          "Open Sans"
        ]
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-family": "Open Sans, sans-serif",
            ":hover": {
              "background-color": "#4d29ff"
            },
            "background-color": "#2d18a0",
            ":focus": {
              "background-color": "#4d29ff"
            }
          }
        },
        "googleFonts": [
          "Open Sans"
        ],
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "styles": {
          "button": {
            "font-family": "Open Sans, sans-serif",
            ":hover": {
              "background-color": "#4d29ff"
            },
            "background-color": "#2d18a0",
            ":focus": {
              "background-color": "#4d29ff"
            }
          }
        },
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        },
        "popup":false,
        "googleFonts": [
          "Open Sans"
        ]
      },
      "toggle": {
        "styles": {
          "toggle": {
            "font-family": "Open Sans, sans-serif",
            "background-color": "#2d18a0",
            ":hover": {
              "background-color": "#4d29ff"
            },
            ":focus": {
              "background-color": "#4d29ff"
            }
          }
        },
        "googleFonts": [
          "Open Sans"
        ]
      }
      },
    });
}