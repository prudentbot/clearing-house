// TODO:
// New Article
// Edit Article
// 		^be cool if this was on hover for properly permissioned user
// View Article


Template.article.helpers({
	article: function() {
		return Articles.findOne();
	}
});