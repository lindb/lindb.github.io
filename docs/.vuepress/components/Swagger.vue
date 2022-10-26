<template>
    <div class="loading" v-if="isLoading">
		<loading v-model:active="isLoading" 
			:is-full-page="fullPage" 
			:can-cancel="true" 
			:opacity="0"
			:width="80"
			:height="80"
			loader="bars"
			color="#ED8A65"/>
	</div>
    <div class="swagger" id="swagger"></div>
</template>

<script>
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name: "Swagger",
	data() {
        return {
        	isLoading: true,
            fullPage: true
        }
    },
  	props: {
    	spec: {
      		type: String,
      		default: ""
    	}
  	},
	components: {
        Loading
    },
    mounted() {
	  let vm = this;

      vm.$nextTick(function () {
		fetch(vm.spec)
        	.then(r => r.json())
        	.then(json => {
				vm.isLoading = false;
			    SwaggerUI({
			    	spec: json,
			        dom_id: '#swagger'
			    });
        	});
      });
    }
}
</script>
<style>
.loading {
	height: calc(100vh - 200px);	
}

.swagger-ui .info .base-url {
	display: none;
}
.swagger-ui .info .info__contact {
	display: none;
}
.swagger-ui .info .info__license {
	display: none;
}
.swagger-ui .info {
	margin: 0;
}
.swagger-ui .info .title {
	padding: 0;
}
.swagger-ui .try-out {
	display: none;
}
.swagger-ui .opblock .opblock-section-header h4 {
 	padding-top: 0.5rem;
}
.swagger-ui div.scheme-container {
	display: none;
}
html.dark .swagger-ui {
    filter: invert(88%) hue-rotate(180deg);
}
html.dark .swagger-ui .highlight-code {
    filter: invert(100%) hue-rotate(180deg);
}
html.dark .swagger-ui pre.version{
    background-color: transparent;
}
html.dark .swagger-ui div.scheme-container{
    background-color: white !important;
}
html.dark .swagger-ui tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>
