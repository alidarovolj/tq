// import axios from "@/utils/axios.js";

const actions = {
    async addProduct({commit}, product) {
        commit("updateAddedProduct", product);
        commit("updateCart");
    }, async cart({commit}) {
        commit("updateCart");
    },
};
const mutations = {
    updateAddedProduct: (state, res) => {
        let products = localStorage.getItem('cart');
        let parsedProducts = JSON.parse(products);
        let stateProduct = {
            index: null,
            status: false, // Initialize status to false (not found)
        };

        parsedProducts.forEach((item, index) => {
            if (item.id === res.id) {
                stateProduct.status = true; // Set status to true (found)
                stateProduct.index = index; // Store the index
            }
        });

        console.log(stateProduct);

        if (stateProduct.status) {
            // If found, remove the item from the array
            parsedProducts.splice(stateProduct.index, 1);
        } else {
            // If not found, add the item to the array
            parsedProducts.push(res);
        }

        localStorage.setItem('cart', JSON.stringify(parsedProducts));
    }, updateCart: (state, res) => {
        let products = localStorage.getItem('cart')
        let parsedProducts = JSON.parse(products)
        let price = 0
        parsedProducts.forEach((item) => {
            price = item.price + price
        })
        let cartState = {
            products: parsedProducts, price: price
        }
        state.cart = cartState;
    }
};
const state = {
    cart: null
};
const getters = {
    getCart: (state) => state.cart
};

export default {state, getters, mutations, actions};
