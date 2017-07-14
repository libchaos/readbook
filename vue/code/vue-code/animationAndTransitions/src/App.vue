<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations</h1>
				<hr>
				<hr>
				<select v-model="alertAnimation">
					<option value="fade">Fade</option>
					<option value="slide">Slide</option>
				</select>
				<br>
				<br>
				<button class="btn btn-primary" @click="show = !show">Show Alert</button>
				<transition :name="alertAnimation">
					<div class="alert alert-info" v-show="show">This is some info</div>
				</transition>
				<transition :name="alertAnimation" type="animation">
					<div class="alert alert-info" v-if="show">This is some info</div>

				</transition>
				<transition enter-active-class="animated bounce" leave-active-class="animated shake">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
				<transition :name="alertAnimation" type="animation" mode="out-in">
					<div class="alert alert-info" v-if="show" key="info">This is some info</div>
					<div class="alert alert-warning" v-else key="warning">This is somessss info</div>
				</transition>
				<hr>
				<button class="btn btn-primary" @click="load = !load"> Load / Remove Element</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				alertAnimation: 'fade'
			}
		}
	}
</script>

<style>
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 1s;
	}

	.fade-leave {}

	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}

	.slide-enter {
		/* transform: translateY(20px); */
		opacity: 0;
	}

	.slide-enter-active {
		animation: slide-in 1s ease-out forwards;
		transition: opacity .5s;
	}

	.slide-leave {}

	.slide-leave-active {
		animation: slide-out 1s ease-out forwards;
		transition: opacity 1s;
		opacity: 0;
	}

	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}
</style>