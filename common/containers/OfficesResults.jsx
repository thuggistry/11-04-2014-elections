/**
 * @jsx React.DOM
 */

var React = require('react');

var FetchResultsMixin = require('../mixins/FetchResultsMixin.jsx');

var PollClock         = require('../components/PollClock.jsx');
var ShareTools        = require('../components/ShareTools.jsx');
var Summary           = require('../components/Summary.jsx');
var Title             = require('../components/Title.jsx');
var Ad                = require('../components/Ad.jsx');

var util              = require('../assets/js/util.js');
var Moment            = require('moment');

var OfficesResults = React.createClass({

	mixins: [FetchResultsMixin],

	// FetchResultsMixin needs this
	apiUrl: function() {

		var url;
		if (this.props.state) {
			url = '/races/office/' + this.props.state + '/' + this.props.office + '?date=' + this.props.date;
		} else {
			url = '/top/office/' + this.props.office + '?date=' + this.props.date;
		}

		return url;
	},

	render: function() {

		var self = this;

		var summaries = _.chain(this.state.results)
			.map(function(race) {

				var name;
				var isUSHouse = race.alternate_office_name === 'US House';

				if (self.props.state) {
					name = util.seatName(race);
				} else {
					if (isUSHouse) {
						name = util.raceTitle(race, true);
					} else {
						name = race.county_name;
						var date = new Date(race.election_date);
						if (race.seat_name.length && date.getFullYear() !== +race.seat_name) {
							name += ', special election';
						}
					}
				}

				var augmentedRace = {
					race: race,
					name: name
				};

				// extract number
				var regex = /(\d+)(th|st|nd|rd) (.*)/;
				var match = regex.exec(name);
				var number;

				augmentedRace.number = match ? +match[1] : -1;
				augmentedRace.rest = match ? match[3] : name;

				if (isUSHouse) {
					augmentedRace.rest = [race.county_name, augmentedRace.rest].join(' ');
				}

				return augmentedRace;
			})
			.sortBy(function(augmentedRace) {
				return augmentedRace.number;
			})
			.sortBy(function(augmentedRace) {
				return augmentedRace.rest;
			})
			.map(function(augmentedRace) {

				var name = augmentedRace.name;
				var race = augmentedRace.race;
				var moment = Moment(race.election_date);
				var displayDate = moment.format('YYYY-MM-DD');
				var isUncontested = race.candidates.length < 2;

				var url = '/news/politics/election-results/' + displayDate + '/race/' + race.state_postal + '/' + race.alternate_office_name + '/' + race.seat_name;

				var button = !isUncontested && self.props.state ? <a href={url}><button className='go-to-full-results'>Go to full results</button></a> : null;

				var related = false ? <div className='election-related-story'>
					<span className='election-related-overline'>More governor coverage</span>
					<a href=''>Related election headline goes here just like this</a>
				</div> : null;

				return (
					<div className='office' key={race.race_number}>
						<Title name={name} />
						<Summary results={race} />
						{button}
						{related}
					</div>
				);
			})
			.value();

		var title = this.state.results[0] ? <Title isHeader={true} name={util.officeTitle(this.state.results[0])} /> : null;

		return (
			<div className='offices-results'>
				<PollClock ref='thePollClock' pollCallback={this.fetchResults} />
				{title}
				<ShareTools />
				{_.first(summaries)}
				<Ad />
				{_.rest(summaries)}
			</div>
		);
	}

});

module.exports = OfficesResults;