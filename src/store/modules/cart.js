// import axios from "@/utils/axios.js";

import axios from "@/utils/axios.js";

const actions = {
    async addProduct({commit}, {product, method}) {
        commit("updateAddedProduct", {product, method});
        commit("updateCart");
    }, async removeProduct({commit}, {product, method}) {
        commit("updateRemovedProduct", {product, method});
        commit("updateCart");
    }, async cart({commit}) {
        commit("updateCart");
    }, async createOrder({commit}, form) {
        const {data} = await axios.post("/orders", form);
        commit("updateCreatedOrder", data);
    }, async clearCart({commit}) {
        commit("updateClearedCart");
        commit("updateCart");
    },
};
const mutations = {
    updateAddedProduct: (state, {product, method}) => {
        let products = localStorage.getItem('cart');
        let parsedProducts = JSON.parse(products);
        let stateProduct = {
            index: null, status: false,
        };

        for (let index = 0; index < parsedProducts.length; index++) {
            if (parsedProducts[index].id === product.id) {
                stateProduct.status = true;
                stateProduct.index = index;
                break; // Exit the loop when a matching product is found
            }
        }

        if (stateProduct.status === true) {
            if (method === 'plus') {
                parsedProducts[stateProduct.index].amount += 1;
                parsedProducts[stateProduct.index].price_main += product.price;
            } else {
                parsedProducts[stateProduct.index].amount -= 1;
                parsedProducts[stateProduct.index].price_main -= product.price;
                if (parsedProducts[stateProduct.index].amount <= 0) {
                    parsedProducts.splice(stateProduct.index, 1);
                }
            }
        } else {
            parsedProducts.push({
                ...product, amount: 1, price_main: product.price,
            });
        }

        console.log(stateProduct);
        localStorage.setItem('cart', JSON.stringify(parsedProducts));
    }, updateRemovedProduct: (state, {product, method}) => {
        let products = localStorage.getItem('cart');
        let parsedProducts = JSON.parse(products);
        let stateProduct = {
            index: null, status: false,
        };

        for (let index = 0; index < parsedProducts.length; index++) {
            if (parsedProducts[index].id === product.id) {
                stateProduct.status = true;
                stateProduct.index = index;
                break; // Exit the loop when a matching product is found
            }
        }

        if (stateProduct.status === true) {
            if (method === 'plus') {
                parsedProducts[stateProduct.index].amount += 1;
                parsedProducts[stateProduct.index].price_main += product.price;
            } else {
                parsedProducts[stateProduct.index].amount -= 1;
                parsedProducts[stateProduct.index].price_main -= product.price;
                if (parsedProducts[stateProduct.index].amount <= 0) {
                    parsedProducts.splice(stateProduct.index, 1);
                }
            }
        } else {
            parsedProducts.push({
                ...product, amount: 1, price_main: product.price,
            });
        }

        console.log(stateProduct);
        localStorage.setItem('cart', JSON.stringify(parsedProducts));
    }, updateCart: (state) => {
        let products = localStorage.getItem('cart');
        let parsedProducts = JSON.parse(products);
        let price_main = 0;

        parsedProducts.forEach((item) => {
            price_main += item.price * item.amount; // Add the product price multiplied by its amount
        });

        let cartState = {
            products: parsedProducts, price_main: price_main,
        };

        state.cart = cartState;
    }, updateCreatedOrder: (state, res) => {
        state.createdOrder = res;
    }, updateClearedCart: () => {
        localStorage.setItem('cart', JSON.stringify([]))
        const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * symbols.length);
            result += symbols.charAt(randomIndex);
        }
        localStorage.setItem('orderNumber', JSON.stringify(result))
    },
};
const state = {
    cart: null, createdOrder: null,
};
const getters = {
    getCart: (state) => state.cart, getCreatedOrder: (state) => state.createdOrder
};

export default {state, getters, mutations, actions};
