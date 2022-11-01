import axios from 'axios'
import urls from "@/axiosEtc/urls/urls";

export default {
    state: {
        request:{
            className: '',
            methodName: '',
            catId: ''
        },
        categoryList: {},
        selectedCategoryId: '',
        productsList: {},
        selectedProductId: '',
        manufacturersList: {},
        selectedManufacturerId: '',
        searchName: ''
    },
    getters: {
        getRequest(state){
            return state.request
        },
        getCategoryList(state) {
            return state.categoryList
        },
        getSelectedCategoryId(state){
            return state.selectedCategoryId
        },
        getProductsList(state) {
            return state.productsList
        },
        getSelectedProductId(state){
            return state.selectedProductId
        },
        getManufacturersList(state) {
            return state.manufacturersList
        },
        getSelectedManufacturerId(state){
            return state.selectedManufacturerId
        },
        getSearchName(state){
            return state.searchName
        }
    },
    mutations: {
        requestMutation(state, arg){},

        categoryListMutation(state, arg){
            state.categoryList = arg
        },
        selectedCategoryIdMutation(state, arg){},

        productsListMutation(state, arg){
            state.productsList = arg
        },
        selectedProductIdMutation(state, arg){},
        manufacturersListMutation(state, arg){},
        selectedManufacturerIdMutation(state, arg){},
        searchNameMutation(state,arg){
            state.searchName = arg
        }
    },
    actions: {
        requestAction(){},
      async  categoryListAction(context){
            // const request = context.getters.getRequest
            // request.className='CatService'
            // request.methodName = 'getAll'
          await   axios.get(urls.INITIAL_URL,{params:{
                serviceName:'CatService',
                methodName:'getAll'
                }}).then(res=>{
                    context.commit('categoryListMutation', res.data.children)
                    console.log(context.state.categoryList)
            })

        },
        selectedCategoryIdAction(){},

        async initialProductList(context){
          await  axios.get(urls.INITIAL_URL,{params:{
                  serviceName:'ProdService',
                  methodName:'getInitialProducts'
            }}).then(res=>{
              context.commit('productsListMutation', res.data)
                console.log('---------//getInitialProductsList//-------')
                console.log(res)
            })
        },
        // serviceName:'ProdService',
        // methodName:'getInitialProductsList'

        // serviceName:'UtilityService',
        // methodName:'createRandomizedProductSet'

       productsListAction(context, arg){
            console.log('--- arg ---')
            console.log(arg)
            axios.get(urls.INITIAL_URL,{params:{
                    serviceName:'ProdService',
                    methodName:'getProdByCatId',
                    сatId: Number(arg)
               }}).then(res=>{
                   context.commit('productsListMutation', res.data.content)
               console.log('----//retrieved items//----')
               console.log(res.data.content)
           })
        },
        selectedProductIdAction(){},
        manufacturersListAction(){},
        selectedManufacturerIdAction(){},
        setInitialCatalog(context, arg){

        }
    }
}