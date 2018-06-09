$(function(){
    function persoToggle(a,li){
        $(a).click(function (e) {
            e.preventDefault()
            if ($(li).css('display') == 'none') {
                $(li).css('display', 'flex')
            } else {
                $(li).css('display', 'none')
            }
        })
    }
for(i=1;i<=15;i++){
    persoToggle('.first-menu-link-'+[i],'.second-menu-'+[i])
    for(j=1;j<=15;j++){
        persoToggle('.second-menu-link-'+[i]+'-'+[j],'.third-menu-'+[i]+'-'+[j])
    }
}

})