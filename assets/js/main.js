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

    
persoToggle('.first-menu-link-1','.second-menu-1')
persoToggle('.second-menu-link-1-1','.third-menu-1-1')
persoToggle('.second-menu-link-1-2','.third-menu-1-2')
persoToggle('.second-menu-link-1-3','.third-menu-1-3')
persoToggle('.second-menu-link-1-4','.third-menu-1-4')
persoToggle('.first-menu-link-2','.second-menu-2')
persoToggle('.second-menu-link-2-1','.third-menu-2-1')
persoToggle('.second-menu-link-2-2','.third-menu-2-2')
persoToggle('.second-menu-link-2-3','.third-menu-2-3')
persoToggle('.second-menu-link-2-4','.third-menu-2-4')
persoToggle('.first-menu-link-3','.second-menu-3')
persoToggle('.second-menu-link-3-1','.third-menu-3-1')
persoToggle('.second-menu-link-3-2','.third-menu-3-2')
persoToggle('.second-menu-link-3-3','.third-menu-3-3')
persoToggle('.second-menu-link-3-4','.third-menu-3-4')
persoToggle('.first-menu-link-4','.second-menu-4')
persoToggle('.second-menu-link-4-1','.third-menu-4-1')
persoToggle('.second-menu-link-4-2','.third-menu-4-2')
persoToggle('.second-menu-link-4-3','.third-menu-4-3')
persoToggle('.second-menu-link-4-4','.third-menu-4-4')
persoToggle('.first-menu-link-5','.second-menu-5')
persoToggle('.second-menu-link-5-1','.third-menu-5-1')
persoToggle('.second-menu-link-5-2','.third-menu-5-2')
persoToggle('.second-menu-link-5-3','.third-menu-5-3')
persoToggle('.second-menu-link-5-4','.third-menu-5-4')
persoToggle('.first-menu-link-6','.second-menu-6')
persoToggle('.second-menu-link-6-1','.third-menu-6-1')
persoToggle('.second-menu-link-6-2','.third-menu-6-2')
persoToggle('.second-menu-link-6-3','.third-menu-6-3')
persoToggle('.second-menu-link-6-4','.third-menu-6-4')

})