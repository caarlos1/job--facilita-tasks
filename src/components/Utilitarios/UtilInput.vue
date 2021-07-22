<template>
  <div>
    <label class="input__label" :for="'input_' + nome">{{ descricao }}</label>
    <input
      :id="'input_' + nome"
      class="input__base input__input"
      :type="tipo || 'text'"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    descricao: String,
    nome: String,
    placeholder: String,
    tipo: String,
  },
};
</script>
