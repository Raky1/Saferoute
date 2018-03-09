(function(A) {

	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
			'Bicicleta': [
			{
				
				location_latitude:-21.985, 
				location_longitude: -47.882,
				map_image_url: 'img/img.png',
				name_point: 'Roubo',
				description_point: 'Minha bicicleta teve o cadeado cortado enquanto eu almoçava.',
				
			},
			{
				
				location_latitude:-21.985, 
				location_longitude: -47.882,
				map_image_url: 'img/img.png',
				name_point: 'Roubo',
				description_point: 'Minha bicicleta estava presa na grade ao lado do lago. Cortaram o cadeado e a levaram enquanto eu estava almoçando.',
				
			},
			{
				
				location_latitude:-21.984, 
				location_longitude: -47.882,
				map_image_url: 'img/img.png',
				name_point: 'Roubo',
				description_point: 'Minha bicicleta teve o cadeado cortado enquanto eu almoçava.',
				
			},
			{
				
				location_latitude:-22.0021, 
				location_longitude: -47.891130,
				map_image_url: 'img/img.png',
				name_point: 'Furto',
				description_point: 'Bicicleta.',
				
			},
			
			],
			'Plus': [ //sinal de +
			{
				name: 'Bondi Beach',
				location_latitude:  -21.9991, 
				location_longitude: -47.892942,
				map_image_url: 'img/img.png',
				name_point: 'Tentativa de assalto',
				description_point: 'Estatura média, moreno, roupas escuras, moletom com touca.',
				url_point: '02.html'
			},
			{
				name: 'Bondi Beach',
				location_latitude:  -21.9973, 
				location_longitude: -47.895043,
				map_image_url: 'img/img.png',
				name_point: 'Roubo a apartamento',
				description_point: 'Levaram TV, óculos de sol, tênis ',
				url_point: '02.html'
			},

			{
				name: 'Bondi Beach',
				location_latitude:  -22.0028, 
				location_longitude: -47.900189,
				map_image_url: 'img/img.png',
				name_point: 'Tentativa de assalto',
				description_point: 'Homem branco, +/- 1.70m de altura, cabelo castanho claro encaracolado, roupa rasgada, jeans e tênis.',
				url_point: '02.html'
			},

			
			{
				name: 'Bondi Beach',
				location_latitude: -21.9955,  
				location_longitude: -47.880306,
				map_image_url: 'img/img.png',
				name_point: 'Perseguição e tentativa de assalto',
				description_point: 'Jovens, morenos, abadá e bermuda.',
				url_point: '02.html'
			},
			{
				name: 'Bondi Beach',
				location_latitude:  -22.0094,  
				location_longitude: -47.905187,
				map_image_url: 'img/img.png',
				name_point: 'Furto',
				description_point: 'Levaram o extintor. Dois rapazes de aproximadamente 1.7m',
				url_point: '02.html'
			},
			{
				name: 'Bondi Beach',
				location_latitude:  -22.0104,  
				location_longitude: -47.902527,
				map_image_url: 'img/img.png',
				name_point: 'Furto',
				description_point: 'Levaram a roda do Carro. Carro corsa classic com vidro sufilmado',
				url_point: '02.html'
			},
			
			],
			'Mochila': [ //mochila
			{
				name: 'Cronulla Beach',
				location_latitude: -22.0044,  
				location_longitude: -47.901010,
				map_image_url: 'img/img2.png',
				name_point: 'Assalto à mão armada (faca) ',
				description_point: 'Mochila com celular, carteira com documentos, chaves, fones de ouvido, cadernos da faculdade, estojos e livros. Dois homens altura aprox. 1,80, negros, com blusa de moletom azul/branca  e shorts tactel.',
				url_point: '02.html'
			},
			
			],

			'Money': [
			{
				name: 'Bondi Beach',
				location_latitude: -22.0080, 
				location_longitude: -47.892022,
				map_image_url: 'img/img.png',
				name_point: 'Assalto a mao armada',
				description_point: 'Homem de aproximadamente 40 anos,magro e de 170cm. Tinha várias tatuagens pelo corpo principalmente nos braços.',
				url_point: '02.html'
			},
			
			{
				name: 'Bondi Beach',
				location_latitude: -22.0052, 
				location_longitude: -47.901054 ,
				map_image_url: 'img/img.png',
				name_point: 'Assalto',
				description_point: 'Celular, dinheiro e relógio. 2 rapazes jovens, talvez menores. Um deles com boné e roupas pretas, outro com bermuda e camisa laranja' ,
				url_point: '02.html'
			},
			],

			'Pc': [
			
			{
				location_latitude: -22.0065,  
				location_longitude: -47.894353,
				map_image_url: 'img/img.png',
				name_point: 'Assalto dentro de casa, sem morador presente',
				description_point: 'Notebook, HD externo, pulseira de ouro, brinco e perfume',
			},

			],


			'Cartao': [
			{
				name: 'Cronulla Beach',
				location_latitude: -21.9951, 
				location_longitude: -47.881843,
				map_image_url: 'img/img.png',
				name_point: 'Roubo',
				description_point: 'Abriram meu carro e levaram minha carteira com cartões, dinheiro, carteirinha da faculdade. Dois rapazes, altura aproximada 1,70, pardos, utilizavam blusas. Já vi eles jogando bola na Ufscar.',
				url_point: '02.html'
			},
			],


			'Documento': [
			{
				name: 'Cronulla Beach',
				location_latitude: 000, 
				location_longitude: 000,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude:000 , 
				location_longitude: 000,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			
			],

			'Cel': [
			{
				name: 'Cronulla Beach',
				location_latitude: -22.0025,  
				location_longitude: -47.898380,
				map_image_url: 'img/img.png',
				name_point: 'Assalto',
				description_point: 'Dois homens, jovens, um negro e um branco, idade aproximada de 18-22 anos, de bicicleta, estatura média',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: -21.993182, 
				location_longitude: -47.884977,
				map_image_url: 'img/img.png',
				name_point: 'Roubo',
				description_point: 'Levaram meu celular. Homem moreno, cabelo curto e tinha 1,80 de altura',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: -22.0006287, 
				location_longitude: -47.8985549,
				map_image_url:'img/img.png',
				name_point:'Assalto',
				description_point:'Homem  adulto, pardo, alto e magro e uma criança aproximadamente 12 anos. O Homem vestia moletom, calça jeans e bone, tudo cinza.'
			},
			{
				name: 'Bondi Beach',
				location_latitude:  -22.017,   
				location_longitude: -47.885,
				map_image_url: 'img/img.png',
				name_point: 'Tentativa de assalto',
				description_point: 'Tentou levar o celular, mas não conseguiu. Um homem, moreno, de barba e chapéu, a pé',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: -21.9969, 
				location_longitude: -47.889490,
				map_image_url: 'img/img.png',
				name_point: 'Assalto',
				description_point: 'Celular',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: -22.0037,  
				location_longitude: -47.896118,
				map_image_url: 'img/img.png',
				name_point: 'Tentativa de assalto',
				description_point: 'Tentaram levar o celular',
				url_point: '02.html'
			},

			{
				name: 'Cronulla Beach',
				location_latitude: -22.000557, 
				location_longitude: -47.898626,
				map_image_url: 'img/img.png',
				name_point: 'Assalto',
				description_point: 'Homem, por volta de 1,75m de altura, de calça jeans e moletom. Acompanhado de adolescente um pouco mais baixo, também de calça jeans e moletom.',
				url_point: '02.html'
			},
			],

			
		};

		function initialize () {
			var mapOptions = {
				zoom: 13,
				center: new google.maps.LatLng(-22.0185, -47.9311),
				mapTypeId: google.maps.MapTypeId.ROADMAP,

				
				
			};
			var
			marker;
			mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
			for (var key in markersData)
				markersData[key].forEach(function (item) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
						map: mapObject,
						icon: 'img/icon/' + key + '.png',
					});

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					google.maps.event.addListener(marker, 'click', (function () {
      closeInfoBox();
      getInfoBox(item).open(mapObject, this);
      mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
     }));

					
				});
		};

		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.setMap(null);
				});
		};

		function toggleMarkers (category) {
			hideAllMarkers();
			closeInfoBox();

			if ('undefined' === typeof markers[category])
				return false;
			markers[category].forEach(function (marker) {
				marker.setMap(mapObject);
				marker.setAnimation(google.maps.Animation.DROP);

			});
		};
		
		function closeInfoBox() {
			$('div.infoBox').remove();
		};

		function getInfoBox(item) {
			return new InfoBox({
				content:
				'<div class="marker_info none" id="marker_info">' +
				'<div class="info" id="info">'+
				'<img src="' + item.map_image_url + '" class="logotype" alt=""/>' +
				'<h2>'+ item.name_point +'<span></span></h2>' +
				'<span>'+ item.description_point +'</span>' +
				'<a href="'+ item.url_point + '" </a>' +
				'<span class="arrow"></span>' +
				'</div>' +
				'</div>',
				disableAutoPan: true,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(40, -210),
				closeBoxMargin: '50px 200px',
				closeBoxURL: '',
				isHidden: false,
				pane: 'floatPane',
				enableEventPropagation: true
			});


		};




