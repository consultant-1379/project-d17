const externals = {
  apps: [{
    path: "app-1",
    entry: "App1"
  }],
  components: {
    default: [],
    shareable: [{
      path: "json-data-table",
      entry: "JsonDataTable"
    }, {
      path: "my-component",
      entry: "MyComponent"
    }, {
      path: "no-dep",
      entry: "NoDep"
    }, {
      path: "my-component",
      entry: "MyComponent"
    }, {
      path: "find-dep",
      entry: "FindDep"
    }]
  },
  panels: [],
  plugins: []
};
module.exports = externals;