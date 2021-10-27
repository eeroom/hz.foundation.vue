# hz.foundation.vue

# vuex
```
目的：创建一个程序运行时顶级的全局的数据（状态），所有组件都可以访问到其中的数据
适用场景：组件嵌套比较多，子组件内的一些操作要影响兄弟组件或父组件的状态
不适用场景：组件不拆解，一个大组件，那么其自带data()足以管理状态，使用vuex反倒把事情搞复杂；
```

#bable
```
1、babel-core //必备的核心库
2、babel-loader //webpack loader配置必备
3、babel-preset-env //有了它，你不再需要添加2015、2016、2017，全都支持
4、babel-preset-stage-0 //有了它，你不再需要添加stage-1,stage-2,stage-3,默认向后支持
5、babel-plugin-transform-runtime 
6、babel-runtime //5和6是一起使用的，支持helpers，polyfill，regenerator配置
```



