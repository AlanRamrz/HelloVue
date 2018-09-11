var ex1 = new Vue({
  el: '#ex1',
  data: {
    message: "Hey there, we are MiniCoding..."
  }
})

var ex2 = new Vue({
  el: '#ex2',
  data: {
    visible: true
  }
})

var ex3 = new Vue({
  el: '#ex3',
  data: {
    languages: ["JavaScript","Ruby","Python","PHP","Java"],
    person: {
      name: "MiniCoding",
      age: 26,
      cool: true
    }
  }
})

var ex4 = new Vue({
  el: '#ex4',
  data: {
    variable: "MiniCoding"
  }
})

var ex5 = new Vue({
  el: '#ex5',
  data: {
    count: 0
  },
  methods: {
    add: function(){
      this.count += 1;
    }
  }
})

var toDoApp = new Vue({
  el: '#toDoExample',
  data: {
    toDos: ["Follow @MiniCoding","RT this"],
    newToDo: ""
  },
  methods: {
    add: function(){
      if(this.newToDo){
        this.toDos.push(this.newToDo);
        this.newToDo = "";
      }
    },
    remove: function(index){
      this.toDos.splice(index, 1);
    }
  }
})
