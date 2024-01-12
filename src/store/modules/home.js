/* 
管理首页相关数据的vuex子模块
*/
import {reqBaseCategoryList} from '@/api'

const state = {
  baseCategoryList: [], // 所有分类的数组，state肯定是当前模块的，
}

const mutations = {
  /* 
  接收保存分类列表
  */
  RECEIVE_BASE_CATEGORY_LIST(state, list) {  //这个state是这个组件的状态
    state.baseCategoryList = list.splice(0, 15)
  }
}

const actions = {
  /* 
  异步获取商品三级分类列表
  */
  async getBaseCategoryList({ commit }) { //这个commit用来触发mutation的调用，只要mutation匹配上就可以，可能是其他模块或总的mutation
    const result = await reqBaseCategoryList();
    // 调用接口请求函数，发送异步Ajax请求，
    if (result.code === 200) {
      commit('RECEIVE_BASE_CATEGORY_LIST', result.data)
    }
    // 如果请求成功了，得到数据提交给mutation
  },
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}


{/* <div class="sort">
        <div class="all-sort-list2">          
          <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
            <h3>
              <a href="">{{c1.categoryNmae}}</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dt>
                    <a href="">{{c2.categoryName}}</a>
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a href="">{{c3.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div> */}