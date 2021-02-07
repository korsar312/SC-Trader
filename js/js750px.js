{
	const mediaQuery = window.matchMedia('(max-width: 880px)')
	const search = document.getElementById('search_div')
	const header = document.getElementById('header')
	let change = true

	function margin_Left(){
		if(search.style.marginTop == '35px' && search.style.marginLeft == '0px'){
			search.style.marginLeft = '-410px'
		}
		if(!mediaQuery.matches){handleTabletChange(mediaQuery)}
	}
	function margin_Top(){
		if(search.style.marginLeft == '0px' && search.style.marginTop == '35px'){
			header.style.height = '40px'
			search.style.marginTop = '0px'
		}
		if(mediaQuery.matches){handleTabletChange(mediaQuery)}
		}
	function handleTabletChange(e) {
		if (e.matches && change) {
			change = false
			search.style.margin = '35px 0px 0px -410px'
			header.style.height = '75px'
		}
		else if (e.matches && !change) {
			search.style.margin = '35px 0px 0px 0px'
			header.style.height = '75px'
			setTimeout(margin_Left, 400)
		}
		else if (!e.matches && !change) {
			search.style.margin = '35px 0px 0px 0px'
			setTimeout(margin_Top, 400)
		}
		else if (!e.matches && change) {
			change = false
			search.style.margin = '0px 0px 0px 0px'
		}
	}

	mediaQuery.addListener(handleTabletChange)
	handleTabletChange(mediaQuery)
}
