<template>
  <table>
    <td v-for="resultado in dataTopvenda" :key="resultado.codigo">
      <tr>
        <td>{{ resultado.descricao }} --</td>
      </tr>
    </td>
  </table>
</template>

        <script>
console.log('template');
var resultados = [];
for (var i = 1; i < 10; i++) {
  var tempdata = { codigo: i, descricao: "descricao qualquer" + i, valor: 1.0 };
  resultados.push(tempdata);
}
console.log(resultados);
export default {
  data() {
    return {
      dataTopvenda: resultados,
      msg: "Vue changed!",
      color: "blue",
    };
  },
};
</script>

<style scoped>
.example {
  color: v-bind("color");
}
</style>
