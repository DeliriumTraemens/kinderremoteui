import axios from 'axios'
import urls from "@/axiosEtc/urls/urls";
import { v4 as uuidv4 } from 'uuid';

export default {
    state: {
        sessionId: {
            date: null,
            browser: '',
            uuid: null
        },
        
        //добавить булевый флаг категория/производитель для фильтра по поиску и его геттер читать из мануфЛиста
        categoryFilter: '',
        currentCategory: '',
        // currentProduct: {},
        currentProduct: {},
        currentManufacturer: '',
        request: {
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
        getSessionId: (state) => state.sessionId,

        getCategoryFilter(state){
            return state.categoryFilter
        },
        getCurrentCategory(state){
          return  state.currentCategory
        },
        getCurrentProduct(state){
         return   state.currentProduct
        },
        getCurrentManufacturer(state){
          return  state.currentManufacturer
        },
        getRequest(state) {
            return state.request
        },
        getCategoryList(state) {
            return state.categoryList
        },
        getSelectedCategoryId(state) {
            return state.selectedCategoryId
        },
        getProductsList(state) {
            return state.productsList
        },
        getSelectedProductId(state) {
            return state.selectedProductId
        },
        getManufacturersList(state) {
            return state.manufacturersList
        },
        getSelectedManufacturerId(state) {
            return state.selectedManufacturerId
        },
        getSearchName(state) {
            return state.searchName
        }
    },
    mutations: {
        setDate(state){
            state.sessionId.date =new Date().toISOString();
        },

        setBrowser(state, browser){
            state.sessionId.browser=browser;
        },

        setUUID(state, uuid) {
            state.sessionId.uuid = uuid;
        },

        categoryFilterMutation(state,arg){
            state.categoryFilter=arg
        },
        currentCategoryMutation(state,arg){
            state.currentCategory = arg
        } ,
        currentProductMutation(state,arg){
            state.currentProduct = arg
        } ,
        currentManufacturerMutation(state,arg){
            state.currentManufacturer = arg
        } ,

        requestMutation(state, arg) {
        },

        categoryListMutation(state, arg) {
            state.categoryList = arg
        },
        selectedCategoryIdMutation(state, arg) {
        },

        productsListMutation(state, arg) {
            state.productsList = arg
        },
        selectedProductIdMutation(state, arg) {
        },

        buildManufacturerList(state, arg) {
            console.log('==== manufacturer ====')
            // const arr:Array;
            state.manufacturersList = arg.filter(el => el.manufacturer)
            console.log(state.manufacturersList)
        },
        manufacturersListMutation(state, arg) {
            state.manufacturersList = arg
        },
        selectedManufacturerIdMutation(state, arg) {
        },
        searchNameMutation(state, arg) {
            state.searchName = arg
        }
    },
    actions: {
        // async initializeSession({commit}){
        async initializeSession(context){
            const SessionUuid=uuidv4()
                // alert(localStorage.getItem('sessionId.uuid'))
            if(localStorage.getItem('sessionId.uuid')===null){
                localStorage.setItem('sessionId.uuid', SessionUuid)
            }
               await context.commit('setUUID', localStorage.getItem('sessionId.uuid'));
            await context.commit('setDate');
            await context.commit('setBrowser', window.navigator.userAgent);

        },
            // else
            // // await localStorage.setItem('sessionId', SessionId)
            // await commit('setDate');
            //
            // await commit('setBrowser', window.navigator.userAgent);
            // await commit('setUUID', SessionUuid);
            // await commit('setUUID', SessionId);

        //Send primary authorithy to server
        async sendPrimaryAuthorythy(context){
            // await localStorage.setItem('sessionId',context.state.sessionId.uuid )
            const session = context.state.sessionId.uuid;
            const sd = new FormData();
            // sd.append('localSessionId', localStorage.getItem('sessionId.uuid'))
            sd.append('localSessionId', context.getters.getSessionId.uuid)
            await axios.post(urls.INITIAL_URL+'/authority/noname', sd,{
                maxContentLength: 0,
                maxBodyLength: 0
            }) .then(res=>{
                //SET RECIEVED DATA HERE
                console.log(res)
            })
        },

        categoryFilterAction(context, arg){
            context.commit('categoryFilterMutation', arg)
        },
        requestAction() {
        },
        async categoryListAction(context) {
            // const request = context.getters.getRequest
            // request.className='CatService'
            // request.methodName = 'getAll'
            await axios.get(urls.INITIAL_URL, {
                params: {
                    serviceName: 'CatService',
                    methodName: 'getAll'
                }
            }).then(res => {
                context.commit('categoryListMutation', res.data.children)
                console.log(context.state.categoryList)
            })

        },
        selectedCategoryIdAction() {
        },

        async initialProductList(context) {
            await axios.get(urls.INITIAL_URL, {
                params: {
                    serviceName: 'ProdService',
                    methodName: 'getInitialProducts'
                }
            }).then(res => {
                context.commit('productsListMutation', res.data)
                console.log('---------//getInitialProductsList//-------')
                console.log(res)
            })
        },
        // serviceName:'ProdService',
        // methodName:'getInitialProductsList'

        // serviceName:'UtilityService',
        // methodName:'createRandomizedProductSet'

        async productsListAction(context, arg) {
            console.log('--- arg ---')
            console.log(arg)
            await context.commit('currentCategoryMutation', arg)
            await context.commit('categoryFilterMutation', 'true')
            await axios.get(urls.INITIAL_URL, {
                params: {
                    serviceName: 'ProdService',
                    methodName: 'getProdByCatId',
                    catId: Number(arg)
                }
            }).then(res => {
                context.commit('productsListMutation', res.data.productList);
                context.commit('manufacturersListMutation', res.data.manufacturersList)
                console.log('----//retrieved getProdByCatId items//----')
                console.log(res)
            })
        },
        productListByManufacturer(context, arg) {
            // alert(typeof arg+' '+arg)
            const filterstate = context.rootGetters.getCategoryFilter
           // alert(filterstate)
            const catID = context.getters.getCurrentCategory
            // alert(catID)

            if(filterstate==='true'){

                axios.get(urls.INITIAL_URL, {
                    params: {
                        serviceName: 'ProdService',
                        methodName: 'getProdByManId',
                        // catId: catID,
                        catId: context.getters.getCurrentCategory,
                        // manId: Number(arg)
                        manId: arg
                    }
                }).then(result => {
                    context.commit('productsListMutation', result.data)
                    // console.log("=====result.data====")
                    // console.log(result)
                })

            }else {
                //alert('Aleeeert')
                //  alert(context.getters.getSearchName)

                axios.get(urls.INITIAL_URL, {
                    params: {
                        serviceName: 'ProdService',
                        methodName: 'getProdBySearchNameAndManId',
                        // catId: catID,
                        catId: context.getters.getCurrentCategory,
                        // manId: Number(arg)
                        manId: arg,
                        searchName: context.getters.getSearchName
                    }
                }).then(result => {
                    context.commit('productsListMutation', result.data)
                    // console.log("=====result.data====")
                    // console.log(result)
                })

            }

        },

        searchProductAction(context,arg){
            // alert(arg)
            //searchProductsByName searchName
            context.commit('searchNameMutation',arg)
            context.commit('categoryFilterMutation','false')
            axios.get(urls.INITIAL_URL,{
                params: {
                    serviceName: 'ProdService',
                    methodName: 'searchProductsByName',
                    // catId: catID,
                    //catId: context.getters.getCurrentCategory,
                    // manId: Number(arg)
                    //manId: arg
                    searchName:arg
                }
            }).then(res=>{
                context.commit('productsListMutation', res.data.productSearchList)
                context.commit('manufacturersListMutation', res.data.manufacturerSet)
            })
        },

            // context.commit('currentProductMutation',arg)
            // alert(context.getters.getCurrentProduct.id)
            // const prodId = context.getters.getCurrentProduct.id
       async setCurrentProductAction(context,arg){
            const prodId = arg

            await axios.get(urls.INITIAL_URL, {
                params: {
                    serviceName: 'ProdService',
                    methodName: 'findProductById',
                    // prodId: Number(prodId)
                    prodId: prodId
                }
            }).then(res => {
                console.log('Find Product By Id ProductDetailsDto |')
                console.log(res.data)
                context.commit('currentProductMutation', res.data);
                console.log('  |context.getters.getCurrentProduct|  ')
                console.log(context.getters.getCurrentProduct)

                // context.commit('currentProductMutation', res.data);

            })
            // this.$router.push('/ProductDetails')
        },
        selectedProductIdAction() {
        },
        manufacturersListAction() {
        },
        selectedManufacturerIdAction() {
        },
        setInitialCatalog(context, arg) {

        }
    }
}