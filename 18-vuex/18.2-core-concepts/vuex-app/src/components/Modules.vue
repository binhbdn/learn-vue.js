<template>
  <div>
    <h2>Modules</h2>
    <p>$store.state.a.count = {{ $store.state.a.count }}</p>
    <p>$store.state.b.count = {{ $store.state.b.count }}</p>
    <p>$store.state.count = {{ $store.state.count }}</p>

    <h3>Module Local State</h3>
    <p>
      Inside a module's mutations and getters, the first argument received will
      be <strong>the module's local state</strong>.
    </p>
    <p>$store.getters.doubleCount = {{ $store.getters.doubleCount }}</p>
    <p>
      <button @click="$store.commit('increment')">
        $store.commit('increment')
      </button>
    </p>
    <p>
      <button @click="$store.dispatch('incrementIfOdd')">
        $store.dispatch('incrementIfOdd')
      </button>
    </p>
    <p>
      Similarly, inside module actions, <code>context.state</code> will expose
      the local state, and root state will be exposed as
      <code>context.rootState</code>
    </p>
    <p>
      <button @click="$store.dispatch('incrementIfOddOnRootSum')">
        $store.dispatch('incrementIfOddOnRootSum')
      </button>
    </p>
    <p>
      Also, inside module getters, the root state will be exposed as their 3rd
      argument
    </p>
    <p>
      $store.getters.sumWithRootCount = {{ $store.getters.sumWithRootCount }}
    </p>

    <h3>Namespacing</h3>
    <p>
      By default, actions and mutations are still registered under the
      <strong>global namespace</strong> - this allows multiple modules to react
      to the same action/mutation type. Getters are also registered in the
      global namespace by default. However, this currently has no functional
      purpose (it's as is to avoid breaking changes). You must be careful not to
      define two getters with the same name in different, non-namespaced
      modules, resulting in an error.
    </p>
    <p>
      If you want your modules to be more self-contained or reusable, you can
      mark it as namespaced with <code>namespaced: true</code>. When the module
      is registered, all of its getters, actions and mutations will be
      automatically namespaced based on the path the module is registered at.
      For example:
    </p>
    <pre>
    const store = new Vuex.Store({
      modules: {
        account: {
          namespaced: true,

          // module assets
          state: () => ({ ... }), // module state is already nested and not affected by namespace option
          getters: {
            isAdmin () { ... } // -> getters['account/isAdmin']
          },
          actions: {
            login () { ... } // -> dispatch('account/login')
          },
          mutations: {
            login () { ... } // -> commit('account/login')
          },

          // nested modules
          modules: {
            // inherits the namespace from parent module
            myPage: {
              state: () => ({ ... }),
              getters: {
                profile () { ... } // -> getters['account/profile']
              }
            },

            // further nest the namespace
            posts: {
              namespaced: true,

              state: () => ({ ... }),
              getters: {
                popular () { ... } // -> getters['account/posts/popular']
              }
            }
          }
        }
      }
    })
    </pre>
    <p>
      Namespaced getters and actions will receive localized
      <code>getters</code>, <code>dispatch</code> and <code>commit</code>. In
      other words, you can use the module assets without writing prefix in the
      same module. Toggling between namespaced or not does not affect the code
      inside the module.
    </p>
    <p>$store.state.count = {{ $store.state.count }}</p>
    <p>$store.state.a.count = {{ $store.state.a.count }}</p>
    <p>$store.state.b.count = {{ $store.state.b.count }}</p>
    <p>$store.state.c.count = {{ $store.state.c.count }}</p>
    <p>
      $store.getters['c/doubleCount']= {{ $store.getters["c/doubleCount"] }}
    </p>
    <p>
      <button @click="$store.commit('c/increment')">
        $store.commit('c/increment')
      </button>
    </p>
    <p>
      <button @click="$store.dispatch('c/incrementIfOdd')">
        $store.dispatch('c/incrementIfOdd')
      </button>
    </p>

    <h3>Register Global Action in Namespaced Modules</h3>
    <p>
      If you want to register global actions in namespaced modules, you can mark
      it with <code>root: true</code> and place the action definition to
      function <code>handler</code>. For example:
    </p>
    <pre>
    {
      actions: {
        someOtherAction ({dispatch}) {
          dispatch('someAction')
        }
      },
      modules: {
        foo: {
          namespaced: true,

          actions: {
            someAction: {
              root: true,
              handler (namespacedContext, payload) { ... } // -> 'someAction'
            }
          }
        }
      }
    }
    </pre>
    <p>
      <button @click="$store.dispatch('someGlobalAction')">
        $store.dispatch('someGlobalAction')
      </button>
    </p>

    <h3>Binding Helpers with Namespace</h3>
    <p>
      When binding a namespaced module to components with the
      <code>mapState</code>, <code>mapGetters</code>,
      <code>mapActions</code> and <code>mapMutations</code> helpers, it can get
      a bit verbose:
    </p>
    <p>(a: state => state.a.count) a = {{ a }}</p>
    <p>(c: state => state.c.subModule.count) c = {{ c }}</p>
    <p>("c", { d: (state) => state.count, }) d = {{ d }}</p>
    <p>this['c/doubleCount'] = {{ this["c/doubleCount"] }}</p>
    <p>doubleCount = {{ doubleCount }}</p>
    <p>$store.state.c.count = {{ $store.state.c.count }}</p>
    <p>
      <button @click="test">test method : this['c/incrementIfOdd']()</button>
    </p>
    <p>
      <button @click="incrementIfOdd">incrementIfOdd</button>
    </p>
    <p>
      Furthermore, you can create namespaced helpers by using
      <code>createNamespacedHelpers</code>. It returns an object having new
      component binding helpers that are bound with the given namespace value:
    </p>
    <pre>
    import { createNamespacedHelpers } from 'vuex'

    const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

    export default {
      computed: {
        // look up in `some/nested/module`
        ...mapState({
          a: state => state.a,
          b: state => state.b
        })
      },
      methods: {
        // look up in `some/nested/module`
        ...mapActions([
          'foo',
          'bar'
        ])
      }
    }
    </pre>
    <h3>Caveat for Plugin Developers</h3>
    <p>
      You may care about unpredictable namespacing for your modules when you
      create a plugin that provides the modules and let users add them to a Vuex
      store. Your modules will be also namespaced if the plugin users add your
      modules under a namespaced module. To adapt this situation, you may need
      to receive a namespace value via your plugin option:
    </p>
    <pre>
    // get namespace value via plugin option
    // and returns Vuex plugin function
    export function createPlugin (options = {}) {
      return function (store) {
        // add namespace to plugin module's types
        const namespace = options.namespace || ''
        store.dispatch(namespace + 'pluginAction')
      }
    }
    </pre>

    <h3>Dynamic Module Registration</h3>
    <p>
      You can register a module <strong>after</strong> the store has been
      created with the <code>store.registerModule</code> method:
    </p>
    <pre>
    import Vuex from 'vuex'

    const store = new Vuex.Store({ /* options */ })

    // register a module `myModule`
    store.registerModule('myModule', {
      // ...
    })

    // register a nested module `nested/myModule`
    store.registerModule(['nested', 'myModule'], {
      // ...
    })
    </pre>
    <p>
      The module's state will be exposed as
      <code>store.state.myModule</code> and
      <code>store.state.nested.myModule</code>.
    </p>
    <p>
      Dynamic module registration makes it possible for other Vue plugins to
      also leverage Vuex for state management by attaching a module to the
      application's store. For example, the
      <code>vuex-router-sync</code> library integrates vue-router with vuex by
      managing the application's route state in a dynamically attached module.
    </p>
    <p>
      You can also remove a dynamically registered module with
      <code>store.unregisterModule(moduleName)</code>. Note you cannot remove
      static modules (declared at store creation) with this method.
    </p>
    <p>
      Note that you may check if the module is already registered to the store
      or not via <code>store.hasModule(moduleName)</code> method.
    </p>

    <h4>Preserving state</h4>
    <p>
      It may be likely that you want to preserve the previous state when
      registering a new module, such as preserving state from a Server Side
      Rendered app. You can achieve this with <code>preserveState</code> option:
      <code>store.registerModule('a', module, { preserveState: true })</code>
    </p>
    <p>
      When you set <code>preserveState: true</code>, the module is registered,
      actions, mutations and getters are added to the store, but the state is
      not. It's assumed that your store state already contains state for that
      module and you don't want to overwrite it.
    </p>

    <h4>Module Reuse</h4>
    <p>
      Sometimes we may need to create multiple instances of a module, for
      example:
    </p>
    <ul>
      <li>
        Creating multiple stores that use the same module (e.g. To
        <a
          href="https://ssr.vuejs.org/en/structure.html#avoid-stateful-singletons"
          target="_blank"
          rel="noopener noreferrer"
          >avoid stateful singletons in the SSR</a
        >
        when the <code>runInNewContext</code> option is <code>false</code> or
        <code>'once'</code>);
      </li>
      <li>Register the same module multiple times in the same store.</li>
    </ul>
    <p>
      If we use a plain object to declare the state of the module, then that
      state object will be shared by reference and cause cross store/module
      state pollution when it's mutated.
    </p>
    <p>
      This is actually the exact same problem with <code>data</code> inside Vue
      components. So the solution is also the same - use a function for
      declaring module state (supported in 2.3.0+):
    </p>
    <pre>
    const MyReusableModule = {
      state: () => ({
        foo: 'bar'
      }),
      // mutations, actions, getters...
    }
    </pre>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Modules",

  computed: {
    ...mapState({
      a: (state) => state.a.count,
      c: (state) => state.c.subModule.count,
    }),

    ...mapState("c", {
      d: (state) => state.count,
    }),

    ...mapGetters([
      //"some/nested/module/someGetter", // -> this['some/nested/module/someGetter']
      //"some/nested/module/someOtherGetter", // -> this['some/nested/module/someOtherGetter']
      "c/doubleCount",
    ]),

    ...mapGetters("c", [
      //"someGetter", // -> this.someGetter
      //"someOtherGetter", // -> this.someOtherGetter
      "doubleCount",
    ]),
  },

  methods: {
    ...mapActions([
      //"some/nested/module/foo", // -> this['some/nested/module/foo']()
      //"some/nested/module/bar", // -> this['some/nested/module/bar']()
      "c/incrementIfOdd",
    ]),

    ...mapActions("c", [
      //"foo", // -> this.foo()
      //"bar", // -> this.bar()
      "incrementIfOdd",
    ]),

    test() {
      this["c/incrementIfOdd"]();
    },
  },
};
</script>
