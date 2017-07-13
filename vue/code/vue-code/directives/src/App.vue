<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Built-in Directives</h1>
				<p v-text="'Some Text'"></p>
				<p v-html="'<strong>Some Strong Text</strong>'"></p>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Custome Directives</h1>
				<p v-highlight:background.delayed="'green'">Color this</p>
					<p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this</p>
			</div>
		</div>
	</div>
</template>

<script>
	// local directives
	export default {
		directives: {
			'local-highlight': {
				bind(el, binding, vnode) {
					let delay = 0
					if (binding.modifiers['delayed']) {
						delay = 3000
					}
					if (binding.modifiers['blink']) {
						let mainColor = binding.value.mainColor
						let secondColor = binding.value.secondColor
						let currColor = mainColor
						setTimeout(() => {
							setInterval(() => {
								currColor === secondColor ? currColor=mainColor : currColor = secondColor
								if (binding.arg === 'background') {
									el.style.backgroundColor = currColor
								} else {
									el.style.color = currColor
								}
							} ,binding.value.delay)
						}, delay)
					} else {
						setTimeout(() => {
						if (binding.arg === 'background') {
							el.style.backgroundColor = binding.value.mainColor
							} else {
								el.style.color = binding.value.mainColor
							}
						} , delay)
					}
				}
			}
		}
	}
</script>

<style>

</style>