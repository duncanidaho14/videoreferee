<template>
    <div appear-active-class="FootballClassement">
        <h1>{{ classement }}</h1>
            <div class="resultatfootball">
                <iframe MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no src="http://www.foot-national.com/partage.php?type=1&id=118"></iframe>
            
            </div>
            <div>
                <iframe MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no src="http://www.foot-national.com/live/livex2289.html"></iframe>
            </div>
            <div>
                <iframe MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no src="http://www.foot-national.com/partage.php?type=2&id=7"></iframe>
            </div>
            <div>
                <iframe MARGINWIDTH=0 MARGINHEIGHT=0 HSPACE=0 VSPACE=0 FRAMEBORDER=0 SCROLLING=no src="http://www.foot-national.com/partage.php?type=1&id=118"></iframe>
            </div>
    </div>
</template>

<script>
export default {
  name: 'FootballClassement',
  data () {
    return {
      classement: 'Classement de Ligue 1'
    }
  },
  methods: {
    
  }
}
</script>    

<style>
.resultatfootball {
    background-color: #ffffff;
    margin: 0px 0px 0px 0px;
}
</style>