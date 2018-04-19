<template>
    <div>
        <componentA v-for="(value, key) in objList"></componentA>
        <componentA @my-event="onMyEvent"></componentA>
        <p v-text="hello"></p>
        <p v-html="hello"></p>
        {{ status ? "sucess" : "fail"}}
        <ul>
            <li v-for="(item, index) in list" v-bind="index"> {{item.name}} - 
                {{item.price}} - {{index}}</li>
            <li v-for="(value, key) in objList"> {{ key + value }} </li>
        </ul>
        <!-- v-if会从文档流里删除，而v-show会显示在文档流里-->
        <!-- v-if配合v-show或者v-else(紧跟在v-if后面)使用-->
        <a v-if="isPartA" :style="cssStyle">PartA</a>
        <a v-else>no data</
        <a v-show="!isPartA">PartB</a>
        <a :href="link" :title="hello" :class="className">To baidu</a>
        <button v-on:click="addItem">addItem</button>
        <button v-on:click="toggle">toggle</button>
        <button @keydown="onKeyDown">onKeydown</button>
        <!-- v-on的缩写为'@' | v-bind的缩写为':'-->
        <input v-model="myValue" type="text">
        {{myValue}}
        <input v-model="myBox" type="checkbox" value="apple">
        <input v-model="myBox" type="checkbox" value="banana">
        <input v-model="myBox" type="checkbox" value="pineapple">
        {{myBox}}
        <input v-model="myValue" type="text">
        {{myValueWithoutNum}}
        <select>
            <option v-for="item in selectOptions" :value="item.value">{{item.text}}</option>
            <option value="2">2</option>
        </select>
        <!-- v-model.lazy 延迟双向绑定-->
        <!-- v-model.number 强制输入数字-->
        <!-- v-model.trim 自动忽略字符串中空格-->
        <input v-model="myVal" type="text">
        <!--属性监听-->
    </div>
</template>

<script>
import componentA from './components/a'
export default {
  components: {componentA},
  data () {
      return {
          selectOptions: [{
              text: 'apple',
              value: 0,
          },
          {
              text: 'pineapple',
              value: 1,
          }],
          selection: null,
          myBox: [],
          myValue: "",
          hello: '<span>world</span>',
          link: 'http://www.baidu.com',
          className: {  
              'red-font': true,
              'blue-font': false,
          },
          cssStyle: {
              color: green;
          },
          isPartA: true,
          status: true,
          list: [
              {
                  name: 'apple',
                  price: 4,
              },
              {
                  name: 'pineapple',
                  price: 6,
              },
          ],
          objList: {
              name: 'banana',
              price: '5',
              color: 'yellow',
          },
      }
  },
  watch: {
      myVal: function(val, oldVal) {
          console.log(val, oldVal;
          
      }
  },
  computed: {
      myValueWithoutNum() {
          return this.myValue.replace(/\d/g, '');
      }
  },
  // computed只会根据属性计算，而methods会每次使用时重新计算
  methods: {
      getmyValueWithoutNum() {
          return this.myValue.replace(/\d/g, '');
      },
      addItem() {
          this.list.push({
              name: two_pineapple,
              price: 60,
          })
      },
      toggle() {
          this.isPartA = !this.isPartA
      },
      onKeyDown() {
          console.log('on key down');
      },
      onMyEvent() {
          console.log('on key down');
      }
  }
}
</script>
