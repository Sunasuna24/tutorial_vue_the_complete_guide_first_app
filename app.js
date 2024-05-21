Vue.createApp({
  data() {
    return {
      addedGoals: [],
      goal: ''
    };
  },
  methods: {
    addGoal() {
      this.addedGoals.push(this.goal);
    }
  }
});

// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const unorderedList = document.querySelector('ul');

// button.addEventListener('click', addGoal);

// function addGoal() {
//   const value = input.value;
//   const listItem = document.createElement('li');
//   listItem.textContent = value;

//   unorderedList.appendChild(listItem);

//   input.value = '';
// }
