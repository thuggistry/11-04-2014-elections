/**
 * @jsx React.DOM
 */

var React = require('react');

var FetchRacesMixin = {
	racesAreOver: function(races) {

		var incompleteRaces = _.chain(races)
			.pluck('reporting_units')
			.flatten()
			.reject(function(v) {
				return v.precincts_reporting === v.total_precincts;
			})
			.value();

		return races.length && !incompleteRaces.length;
	},

	fetchRaces: function() {
		var isDev = false;
		var url = 'http://' + (isDev ? 'localhost:8080' : 'www.bostonglobe.com') + '/electionapi/races/number?' + this.props.raceNumbers.map(function(value) {
			return 'number=' + value;
		}).join('&');

		window['_' + this.props.raceNumbers.join('_')] = function(json) {

			// the races array (json) doesn't necessarily come back from the server
			// in the order in which it was requested
			// let's fix that right here.

			var raceNumbers = this.props.raceNumbers;

			var races = _.sortBy(json, function(race) {
				return _.indexOf(raceNumbers, race.race_number);
			});

			this.setState({races:races});

		}.bind(this);

		$.ajax({
			url: url,
			dataType: 'jsonp',
			jsonpCallback: '_' + this.props.raceNumbers.join('_')
		});
	},
	getInitialState: function() {
		return {races: []};
	},

	// this runs after render, which is when we check if the races are over
	componentDidUpdate: function() {

		if (this.racesAreOver(this.state.races)) {

			this.refs.thePollClock.stop();

		} else {

			// resume the pollclock
			this.refs.thePollClock.resume();

		}

	}
};

module.exports = FetchRacesMixin;