import Vuex from 'vuex';
import Axios from 'axios';

export default Vuex.createStore({
    state: {
        todos: [],
    },
    actions: {
        // Get all todos
        onFetchTodos: async ({ commit }) => {
            const response = await Axios.get(
                'https://jsonplaceholder.typicode.com/todos'
            );
            // Call mutation
            commit('fetchTodos', response.data);
        },
        // Add new todo
        onAddTodo: async ({ commit }, title) => {
            const response = await Axios.post(
                'https://jsonplaceholder.typicode.com/todos',
                {
                    title,
                    completed: false,
                }
            );
            // Call mutation
            commit('addTodo', response.data);
        },
        // Filter number od todos
        onFilterTodos: async ({ commit }, limit) => {
            const response = await Axios.get(
                `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
            );
            // Call mutation
            commit('fetchTodos', response.data);
        },
    },
    mutations: {
        fetchTodos: (state, todos) => (state.todos = todos),
        addTodo: (state, todo) => state.todos.unshift(todo),
    },
    modules: {},
});
