<template>
  <painel-to-do-list-tarefa-loop :tarefas="tarefas" />
</template>

<script>
import PainelToDoListTarefaLoop from "./PainelToDoListTarefaLoop.vue";
export default {
  components: { PainelToDoListTarefaLoop },
  data() {
    return {
      tarefas: [
        {
          id: 1,
          titulo: "Criar projeto Vue.js",
          descricao: "Fazer bem feito e bonito.",
          finalizada: false,
        },
        {
          id: 2,
          titulo: "Criar projeto Vue.js",
          descricao: "Fazer bem feito e bonito.",
          finalizada: true,
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped></style>
