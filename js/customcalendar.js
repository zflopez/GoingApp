angular.module('calendarModule', ['ui.calendar', 'ui.bootstrap'])

.controller('CalendarCtrl', ['$scope', '$http', '$compile', 'uiCalendarConfig',

	function($scope, $http, $compile, uiCalendarConfig) {

		$scope.events = [];

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
			/* event sources array*/	
			$scope.eventSources = [$scope.events];
		});

		/* alert on eventClick */
		$scope.alertOnEventClick = function(date, jsEvent, view) {
			$scope.alertMessage = date;
			$scope.alertaMessagestart = (moment(date.start).format('LL'));
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
				height: 700,
				header: {
					left: 'title',
					center: '',
					right: 'prev,today,next'
				},
				eventClick: $scope.alertOnEventClick,
				eventRender: $scope.eventRender
			}
		};		
	}]);
