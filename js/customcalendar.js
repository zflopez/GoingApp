angular.module('calendarModule', ['ui.calendar', 'ui.bootstrap'])

.controller('CalendarCtrl', ['$scope', '$http', '$compile', 'uiCalendarConfig',

	function($scope, $http, $compile, uiCalendarConfig) {

		/* event source that contains custom events on the scope */
		$scope.events = [
		{
			"id": "01",
			"title": "El eunuco",
			"start": "2016-07-27",
			"end": "2016-07-30",
			"timetable": "22.30h",
			"location": "Teatro Romano de Itálica",
			"backgroundColor": "#FF8921",
			"borderColor": "#FF8921",
			"price": "15 €"
		},
		{
			"id": "02",
			"title": "La comedia de la olla",
			"start": "2016-08-12",
			"end": "2016-08-13",
			"timetable": "22.30h",
			"location": "Teatro Romano de Itálica",
			"backgroundColor": "#FF8921",
			"borderColor": "#FF8921",
			"price": "15 €"   
		},
		{
			"id": "03",
			"title": "La Odisea",
			"start": "2016-08-11",
			"end": "2016-08-11",
			"timetable": "22.30h",
			"location": "Teatro Romano de Itálica",
			"backgroundColor": "#FF8921",
			"borderColor": "#FF8921",
			"price": "15 €"   
		},
		{
			"id": "04",
			"title": "Los caballeros de Aristófanes",
			"start": "2016-08-04",
			"end": "2016-08-07",
			"timetable": "22.30h",
			"location": "Teatro Romano de Itálica",
			"backgroundColor": "#FF8921",
			"borderColor": "#FF8921",
			"price": "15 €"   
		},
		{
			"id": "01",
			"title": "Viva Suecia + Luis Brea y el Miedo",
			"start": "2016-07-29",
			"end": "2016-07-29",
			"timetable": "21h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "8 €"
		},
		{
			"id": "02",
			"title": "C. Tangana",
			"start": "2016-07-30",
			"end": "2016-07-30",
			"timetable": "21h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "8 €"   
		},
		{
			"id": "03",
			"title": "Xoel López + Virginia Maestro",
			"start": "2016-08-03",
			"end": "2016-08-03",
			"timetable": "21h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "10 €"
		},
		{
			"id": "04",
			"title": "Pájaro y los Saxos del Averno + Forastero + Las Janes",
			"start": "2016-08-04",
			"end": "2016-08-04",
			"timetable": "21h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "10 €"
		},
		{
			"id": "05",
			"title": "Martirio + Música Prepost",
			"start": "2016-08-05",
			"end": "2016-08-05",
			"timetable": "21h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "10 €"
		},
		{
			"id": "06",
			"title": "Kiko Veneno + Martín Buscaglia + Perlita",
			"start": "2016-08-11",
			"end": "2016-08-11",
			"timetable": "21h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "10 €"
		},
		{
			"id": "07",
			"title": "Nacho Vegas + Pinocho Detective",
			"start": "2016-08-12",
			"end": "2016-08-12",
			"timetable": "21h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "10 €"
		},
		{
			"id": "08",
			"title": "Antílopez + Mundo Chillón",
			"start": "2016-08-18",
			"end": "2016-08-18",
			"timetable": "21.30h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "14 €"
		},
		{
			"id": "09",
			"title": "Julián Maeso + El Twanguero",
			"start": "2016-08-19",
			"end": "2016-08-19",
			"timetable": "21.30h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "8 €"
		},
		{
			"id": "10",
			"title": "Los Labios + Chencho Fernández + Guillermo Alvah",
			"start": "2016-08-25",
			"end": "2016-08-25",
			"timetable": "21.30h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "8 €"
		},
		{
			"id": "11",
			"title": "Hola a Todo el Mundo + Genérica + Guille Milkyway DJ Set",
			"start": "2016-08-26",
			"end": "2016-08-26",
			"timetable": "21.30h",
			"location": "Centro Andaluz de Arte Contemporáneo",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "8 €"
		},
		{
			"id": "01",
			"title": "Neuman",
			"start": "2016-07-29",
			"end": "2016-07-29",
			"timetable": "21h",
			"location": "Hotel Inglaterra",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "18 €"
		},
		{
			"id": "02",
			"title": "Second",
			"start": "2016-08-20",
			"end": "2016-08-20",
			"timetable": "21h",
			"location": "Hotel Inglaterra",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "21 €"   
		},
		{
			"id": "01",
			"title": "María José Pérez",
			"start": "2016-07-25",
			"end": "2016-07-25",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "02",
			"title": "Mariarosaria D´Aprile / Tommaso Cogato",
			"start": "2016-07-26",
			"end": "2016-07-26",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "03",
			"title": "Massia",
			"start": "2016-07-27",
			"end": "2016-07-27",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "04",
			"title": "Rafael Aguirre",
			"start": "2016-07-28",
			"end": "2016-07-28",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "05",
			"title": "Rafael Ruibérriz / Guillermo Turina / Alfonso Sebastián",
			"start": "2016-07-29",
			"end": "2016-07-29",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "06",
			"title": "Zejel",
			"start": "2016-07-30",
			"end": "2016-07-30",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "07",
			"title": "Artefactum",
			"start": "2016-07-31",
			"end": "2016-07-31",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"   
		},
		{
			"id": "08",
			"title": "Gautama del Campo & Co",
			"start": "2016-08-01",
			"end": "2016-08-01",
			"timetable": "21",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "09",
			"title": "Yamuna",
			"start": "2016-08-02",
			"end": "2016-08-02",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "10",
			"title": "Totem Ensemble",
			"start": "2016-08-03",
			"end": "2016-08-03",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "11",
			"title": "Almawsily",
			"start": "2016-08-04",
			"end": "2016-08-04",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "12",
			"title": "Elastic Waves",
			"start": "2016-08-05",
			"end": "2016-08-05",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "13",
			"title": "Chez Luna",
			"start": "2016-08-06",
			"end": "2016-08-06",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "14",
			"title": "Alfredo Lagos / Rosalía",
			"start": "2016-08-07",
			"end": "2016-08-07",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "15",
			"title": "María José Pérez",
			"start": "2016-08-08",
			"end": "2016-08-08",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "16",
			"title": "Miguelo Delgado Trío",
			"start": "2016-08-09",
			"end": "2016-08-09",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "17",
			"title": "Antonio Lizana",
			"start": "2016-08-10",
			"end": "2016-08-10",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "18",
			"title": "Luis Balaguer / Arturo Serra Trío",
			"start": "2016-08-11",
			"end": "2016-08-11",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "19",
			"title": "Massia",
			"start": "2016-08-12",
			"end": "2016-08-12",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "20",
			"title": "Sheela Na Gig",
			"start": "2016-08-13",
			"end": "2016-08-13",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "21",
			"title": "Q & The Moonstones",
			"start": "2016-08-14",
			"end": "2016-08-14",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "22",
			"title": "Artefactum",
			"start": "2016-08-15",
			"end": "2016-08-15",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "23",
			"title": "Elastic Waves",
			"start": "2016-08-16",
			"end": "2016-08-16",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "24",
			"title": "LVP String Trio",
			"start": "2016-08-17",
			"end": "2016-08-17",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "25",
			"title": "Almawsily",
			"start": "2016-08-18",
			"end": "2016-08-18",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "26",
			"title": "La Ritirata-Josetxu Obregón",
			"start": "2016-08-19",
			"end": "2016-08-19",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "27",
			"title": "Alfredo Lagos / Rosalía",
			"start": "2016-08-20",
			"end": "2016-08-20",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "28",
			"title": "Zejel",
			"start": "2016-08-21",
			"end": "2016-08-21",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "29",
			"title": "Q & The Moonstones",
			"start": "2016-08-22",
			"end": "2016-08-22",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "30",
			"title": "Verónica Plata / Antonio Duro",
			"start": "2016-08-23",
			"end": "2016-08-23",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "31",
			"title": "Massia",
			"start": "2016-08-24",
			"end": "2016-08-24",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "32",
			"title": "Rocío de Frutos / Raúl Mallavibarrena",
			"start": "2016-08-25",
			"end": "2016-08-25",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "33",
			"title": "Guillermo Peñalver / Patricia González",
			"start": "2016-08-26",
			"end": "2016-08-26",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "34",
			"title": "Chez Luna",
			"start": "2016-08-27",
			"end": "2016-08-27",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "35",
			"title": "Antonio Lizana",
			"start": "2016-08-28",
			"end": "2016-08-28",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "36",
			"title": "María José Pérez",
			"start": "2016-08-29",
			"end": "2016-08-29",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "37",
			"title": "Almawsily",
			"start": "2016-08-30",
			"end": "2016-08-30",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		},
		{
			"id": "38",
			"title": "Araturk",
			"start": "2016-08-31",
			"end": "2016-08-31",
			"timetable": "21h",
			"location": "Jardines del Real Alcázar",
			"backgroundColor": "#487FDD",
			"borderColor": "#487FDD",
			"price": "7 €"
		}
		];

		/*$scope.events = [];

		$http.get("json/map_data.json").success(function(data) {
			$scope.locations = data;
			$scope.events.splice(0);

			data.forEach(function(object) {
				if(object.hasOwnProperty("events")) {
					object.events.forEach(function(item) {
						$scope.events.push(item);
					})
				}
			})	
		});*/

		console.log($scope.events);

		/* alert on eventClick */
		$scope.alertOnEventClick = function(date, jsEvent, view) {
			$scope.alertMessage = (date.title + " - " + moment(date.start).format('LL') + " - " + date.timetable + " - " + date.price + " - " + date.location);
		};
		
		/* Change View */
		$scope.changeView = function(view, calendar) {
			uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
		};
		/* Change View */
		$scope.renderCalendar = function(calendar) {
			if (uiCalendarConfig.calendars[calendar]) {
				uiCalendarConfig.calendars[calendar].fullCalendar('render');
			}
		};
		/* Render Tooltip */
		$scope.eventRender = function(event, element, view) {
			element.attr({
				'tooltip': event.title,
				'tooltip-append-to-body': true
			});
			$compile(element)($scope);
		};
		/* config object */
		$scope.uiConfig = {
			calendar: {
				selectable: true,
				height: 800,
				header: {
					left: '',
					center: 'title',
					right: 'prev,today,next'
				},
				eventClick: $scope.alertOnEventClick,
				eventRender: $scope.eventRender
			}
		};

		/* event sources array*/
		$scope.eventSources = [$scope.events];
		console.log($scope.eventSources);
	}]);
