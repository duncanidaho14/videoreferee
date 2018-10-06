<template>
  <div class="HelloWorld">
    <article class="">
      {{ msg }}
      <a href="/">Accueil</a>
      <a href="FootballClassement">FootballClassement</a>
      <a href="GoogleMap">GoogleMap</a>
    </article>
  </div>
</template>

<script modules="es6">
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Salut tout le monde ! '
      }
    },
    methods: {
      hello: function(msg) {
        document.write(this.msg)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
