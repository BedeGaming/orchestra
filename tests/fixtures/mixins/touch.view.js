
var Cocktail = Orchestra.Cocktail;
var _ = Orchestra._;

module.exports = {
	getMobileView: function(props, noHammerEvents) {
		var defaultProps = {
			dummyMethod: function() {

			},

			hammerEvents: {
				'tap button': 'dummyMethod'
			},

			template: function() {
				return '<button type="button">Button</button>';
			}
		}

		var props = _.extend(defaultProps, props);

		return Orchestra.ItemView.extend(props);
	},

	boot: function(view, mixViewProps) {
		var MobView = this.getMobileView(mixViewProps);

		Cocktail.mixin(MobView, view);
		this.instance = new MobView();

		new Orchestra.Region({
      el: 'body'
    }).show(this.instance);

		return this.instance;
	}
};
